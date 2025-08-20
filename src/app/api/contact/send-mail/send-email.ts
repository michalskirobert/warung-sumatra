import nodemailer from "nodemailer";
import { readHtmlTemplate, renderTemplate } from "./helpers";
import { translatedMessages } from "../../translations";
import { ContactFormData } from "@components/contact/types";

export const sendEmail = async (body: ContactFormData, locale: Locale) => {
  try {
    const { email, message, name } = body;

    const customerTemplate = readHtmlTemplate("template_customer");
    const receiverTemplate = readHtmlTemplate("template_receiver");

    const templateData = {
      name,
      message,
      email,
    };

    const customerData = {
      name,
      message,
      email,
      thankYou: translatedMessages.email[locale]?.thankYou,
      forYourMessage: translatedMessages.email[locale]?.forYourMessage,
      thisWhatIReceived: translatedMessages.email[locale]?.thisWhatIReceived,
      bestRegards: translatedMessages.email[locale]?.bestRegards,
      welcome: translatedMessages.email[locale]?.welcome,
    };

    const customerHtml = renderTemplate(customerTemplate, customerData);
    const receiverHtml = renderTemplate(receiverTemplate, templateData);

    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_HOST,
      port: 465,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const customerMailOptions = {
      from: `Warung Sumatra <${process.env.NEXT_PUBLIC_EMAIL}>`,
      to: email,
      replyTo: email,
      subject: translatedMessages.email[locale]?.subject || "",
      html: customerHtml,
    };

    const receiverMailOptions = {
      from: email,
      to: process.env.NEXT_PUBLIC_EMAIL,
      replyTo: email,
      subject: `Wiadomość od ${name} (${email}), język: ${locale}`,
      html: receiverHtml,
    };

    await transporter.sendMail(customerMailOptions);
    await transporter.sendMail(receiverMailOptions);

    return translatedMessages.email[locale]?.emailSent;
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error(translatedMessages.email[locale]?.serverError);
  }
};
