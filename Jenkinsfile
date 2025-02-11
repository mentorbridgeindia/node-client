pipeline {
    agent any
    environment {
        SPRING_PROFILES_ACTIVE = "qa"
        CONTAINER_NAME = "node-client"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/mentorbridgeindia/node-client.git', branch: 'main'
            }
        }

        stage('Build Docker image') {
            steps {
                echo "I am Node-Client"
                sh 'ls'
                sh 'docker build -t mentorbridge/node-client:${BUILD_NUMBER} .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([string(credentialsId: 'DockerSecuroId', variable: 'DockerSecuroPwd')]) {
                    sh "docker login -u mentorbridge -p ${DockerSecuroPwd}"
                }
            }
        }

        stage('Docker Push') {
            steps {
                sh 'docker push mentorbridge/node-client:${BUILD_NUMBER}'
            }
        }

        stage('Docker Deploy') {
            steps {
                script {
                    // Stop and remove the existing container if it exists
                    def containerExists = sh(script: "docker ps -aq -f name=${CONTAINER_NAME}", returnStdout: true).trim()
                    if (containerExists) {
                        echo "Stopping and removing existing container: ${CONTAINER_NAME}"
                        sh "docker stop ${CONTAINER_NAME}"
                        sh "docker rm ${CONTAINER_NAME}"
                    } else {
                        echo "No existing container found with name ${CONTAINER_NAME}"
                    }
                }

                // Run a new container
                echo "Deploying new container: ${CONTAINER_NAME}"
                sh """
                    docker run -d --name ${CONTAINER_NAME} \
                    -e SPRING_PROFILES_ACTIVE=${SPRING_PROFILES_ACTIVE} \
                    -p 10000:10000 mentorbridge/node-client:${BUILD_NUMBER}
                """
            }
        }
    }

    post {
        success {
            echo "Pipeline executed successfully 🎉"
        }
        failure {
            echo "Pipeline failed ❌"
        }
    }
}