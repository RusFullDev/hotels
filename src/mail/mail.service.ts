
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Admin } from 'src/admin/entities/admin.entity';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(admin: Admin) {
     process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const url = `${process.env.API_HOST}:${process.env.PORT}/api/admin/activate/${admin.activation_link}`;
    const html = `
      <h1>Hello! Dear ${admin.fullname},</h1>
      <h2>Please click below to confirm your email</h2>
      <p>
          <a href="${url}">CONFIRM</a>
      </p>
      <p>If you did not request this email you can safely ignore it</p>
    `;

    await this.mailerService.sendMail({
      to: admin.email,
      subject: 'Welcome to hotels App! Confirm your email',
      html: html, 
    });
  }
}









