import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { contentMail } from './content/content.html';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) { }
    content: contentMail = new contentMail()

    async welcome(infoMail: any) {
        console.log(process.cwd());
        await this
            .mailerService
            .sendMail({
                to: '1nightlovel@protonmail.com, c.astorgagonzalez@gmail.com',
                from: 'watankes@gmail.com',
                subject: 'Enviando correo desde servicio Nest',
                html: this.content.hello
            }).then(success => {
                console.log(success);
                return success;
            }).catch(err => {
                console.log(err);
            })
    }
}