import express from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 4444;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerPath = path.join(__dirname, "swagger");
if (!fs.existsSync(swaggerPath)) {
  console.error(" ERROR: Swagger directory not found!");
  process.exit(1);
}


const swaggerFiles: Record<string, string> = {
  "comebackemail": "swaggerComebackEmail.json",
  "inviteuser": "swaggerInviteUser.json",
  "loginverifyemail": "swaggerLoginVerifyEmail.json",
  "passwordchangedemail": "swaggerPasswordChangedEmail.json",
  "registeremail": "swaggerRegisterEmail.json",
  "resetemail": "swaggerResetEmail.json",
  "welcomeemail": "swaggerWelcomeEmail.json"
};

Object.entries(swaggerFiles).forEach(([route, file]) => {
  const filePath = path.join(swaggerPath, file);

  if (fs.existsSync(filePath)) {
    const swaggerDoc = JSON.parse(fs.readFileSync(filePath, "utf8"));
    app.use(`/api-docs/${route}`, swaggerUi.serve, (req, res, next) => {
      swaggerUi.setup(swaggerDoc)(req, res, next);
    });
    console.log(` Swagger UI available at: http://localhost:${PORT}/api-docs/${route}`);
  } else {
    console.warn(` Swagger file missing: ${filePath}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

