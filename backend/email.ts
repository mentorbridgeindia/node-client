import { sendEmail } from "./Email/sendEmail";

app.post('/send-email', (req: Request<{}, {}, EmailRequestBody>, res: Response) => {
  return sendEmail(req, res);
});
