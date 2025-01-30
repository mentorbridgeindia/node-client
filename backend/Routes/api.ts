export const apiFunc = (app )=>{
    app.get('/welcome',(req,res)=>{
        res.send({message:'Welocme to Stublab'
        });
    })
    app.put('/hello',(req,res)=>{
        res.send({message:'Updated'
        });
        })
    app.post('/hi',(req,res)=>{
            res.send({message:'created successfully'
            });
            })     
    app.delete('/...',(req,res)=>{
        res.send({message:'Deleted'
        });
        })
 
    
};

