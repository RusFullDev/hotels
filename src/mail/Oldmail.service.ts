// import { MailerService } from '@nestjs-modules/mailer';
// import { Injectable } from '@nestjs/common';
// import { User } from 'src/user/entities/user.entity';


// @Injectable()
// export class MailService {
//   constructor(private mailerService: MailerService) {}
//   async sendMail(user: User) {
//     const url = `${process.env.API_HOST}:${process.env.PORT}/api/users/activate/${user.activation_link}`;
//     console.log(url);
//     await this.mailerService.sendMail({
//       to: user.email,
//       subject: 'Welcome to hotels App! Comformation your email',
//       template:'./confirmation',
//       context:{
//         name:user.name,
//         url,
//       }
//     });
//   }
// }

import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Admin } from 'src/admin/entities/admin.entity';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(admin: Admin) {
    //  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
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










// import { MailerService } from '@nestjs-modules/mailer';
// import { BadRequestException, Injectable } from '@nestjs/common';
// import { Admin } from 'src/admin/entities/admin.entity';
// import { User } from 'src/user/entities/user.entity';


// // @Injectable()
// // export class MailService {
// //   constructor(private mailerService: MailerService) {}


// //   async sendMail(user: User) {
  
// //     const url = `${process.env.API_HOST}/api/user/activate/${user.activation_link}`;
// //     const first_name = user.name
// //     const email =user.email;
// //     console.log(user);
// //     await this.mailerService.sendMail({
// //       to: email,
// //       subject: 'Welcome to private school app! Confirmation your email',
// //       template: './confirmation',
// //       context: {
// //         name: first_name,
// //         url,
// //       },
// //     });
// //   }
// // }













// // import { Injectable } from '@nestjs/common';
// // import { MailerService } from '@nestjs-modules/mailer';
// // import { User } from './user.entity';
// // import { Admin } from './admin.entity';

// @Injectable()
// export class MailService {
//   constructor(private readonly mailerService: MailerService) {}

//   // async sendMail(user: User): Promise<void>;
//   // async sendMail(admin: Admin): Promise<void>;
//   // async sendMail(recipient: User | Admin): Promise<void> 
 

//   async sendMail(AdminUser:any)
//   {
//     let url: string;
//     let firstName: string;
//     let email: string;

//     if (User) {
//       let user:User
//       url = `${process.env.API_HOST}/api/user/activate/${user.activation_link}`;
//       firstName = user.name;
//       email = user.email;

//     }  
//      else if (Admin) {
//       let admin:Admin
//       url = `${process.env.API_HOST}/api/admin/activate/${admin.activation_link}`;
//       firstName = admin.fullname;
//       email = admin.email;

//     } else {
//       throw new BadRequestException('Activation link not found')
//     }

//     await this.mailerService.sendMail({
//       to: email,
//       subject: 'Welcome to private school app! Confirm your email',
//       template: './confirmation',
//       context: {
//         name: firstName,
//         url,
//       },
//     });
//   }
// }



