import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f6d2d9ddde026d",
    pass: "34524005301bb8"
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <hello@feedget.com>',
      to: 'Lucas Andrade <lucasantos.dev@gmail.com>',
      subject,
      html: body
    })
  }
}