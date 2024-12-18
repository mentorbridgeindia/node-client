import express from 'express';
import bodyParser from 'body-parser';
import { setupEmailRoutes } from './Email/sendEmail';

const app = express();

// Parse application/json
app.use(bodyParser.json());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

setupEmailRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 