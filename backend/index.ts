import express from 'express';
import bodyParser from 'body-parser';
import { setupEmailRoutes } from './Email/sendEmail';

const app = express();


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

setupEmailRoutes(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 