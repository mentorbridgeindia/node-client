import { Express, Request, Response } from "express";
import { getEmailContent } from "./emailHelper";
import { EmailRequestBody } from "./sendEmail.types";
import { transporter } from "./transporter";

export const setupEmailRoutes = (app: Express) => {
  app.post(
    "/send-email",
    async (req: Request<{}, {}, EmailRequestBody>, res: Response) => {
      const { from, to, subject, type, info } = req.body;

      const options = {
        from,
        to,
        subject,
        html: getEmailContent(type, info),
      };

      await transporter.sendMail(options);
      res.status(200).json({ message: "Email sent successfully" });
    }
  );
};
