import { MailerService } from "@nestjs-modules/mailer";
import { Injectable, HttpStatus } from '@nestjs/common';
import { contentMail } from './content/content.html';
import { MailInfoDto } from './dto/email.info.dto';
import { MessagesApi } from '../../shared/messages.api';
import { ConfigurationEmail } from './dto/email.config';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) { }
    content: contentMail = new contentMail()

    async welcome(infoMail: MailInfoDto) {
        let message;
        let configurationEmail=new ConfigurationEmail();
        configurationEmail.imageBody="https://images.vexels.com/media/users/3/153503/isolated/preview/82d5effb4641c42771a17d0550ffc60b-icono-de-la-insignia-de-acceso-by-vexels.png";
        configurationEmail.urlToButton="https://watasoft.com/signin";
        configurationEmail.imageHeader="https://pngimg.com/uploads/welcome/welcome_PNG81.png";
        console.log(configurationEmail);
        await this
            .mailerService
            .sendMail({
                to: infoMail.emailToSend,
                from: 'watankes@gmail.com',
                subject: infoMail.title,
                html: this.content.template(infoMail,configurationEmail)
            }).then(success => {
                message = new MessagesApi(`Correo enviado: ${infoMail.type}`,true,HttpStatus.ACCEPTED,success);
            }).catch(err => {
                message = new MessagesApi(`Correo enviado: ${infoMail.type}`,true,HttpStatus.NOT_FOUND,err);
            })
        return message;
    }

    async general(infoMail: MailInfoDto) {
        let message;
        let configurationEmail= new ConfigurationEmail();
        configurationEmail.containButton=infoMail.containButton;
        configurationEmail.imageBody=infoMail.urlImageBodyMail;
        configurationEmail.urlToButton=infoMail.urlToSend;
        configurationEmail.imageHeader=infoMail.urlImageHeaderMail;

        console.log(configurationEmail);
        await this
            .mailerService
            .sendMail({
                to: infoMail.emailToSend,
                from: 'watankes@gmail.com',
                subject: infoMail.title,
                html: this.content.template(infoMail,configurationEmail)
            }).then(success => {
                message = new MessagesApi(`Correo enviado: ${infoMail.type}`,true,HttpStatus.ACCEPTED,success);
            }).catch(err => {
                message = new MessagesApi(`Correo enviado: ${infoMail.type}`,true,HttpStatus.NOT_FOUND,err);
            })
        return message;
    }

    async payment(infoMail: MailInfoDto) {
        let message;
        let configurationEmail=new ConfigurationEmail();
        configurationEmail.imageBody="https://images.vexels.com/media/users/3/153503/isolated/preview/82d5effb4641c42771a17d0550ffc60b-icono-de-la-insignia-de-acceso-by-vexels.png";
        configurationEmail.urlToButton="https://watasoft.com/signin";
        configurationEmail.imageHeader="https://pngimg.com/uploads/welcome/welcome_PNG81.png";
        console.log(configurationEmail);
        await this
            .mailerService
            .sendMail({
                to: infoMail.emailToSend,
                from: 'watankes@gmail.com',
                subject: infoMail.title,
                html: this.content.template(infoMail,configurationEmail)
            }).then(success => {
                message = new MessagesApi(`Correo enviado: ${infoMail.type}`,true,HttpStatus.ACCEPTED,success);
            }).catch(err => {
                message = new MessagesApi(`Correo enviado: ${infoMail.type}`,true,HttpStatus.NOT_FOUND,err);
            })
        return message;
    }

    async booking(infoMail: MailInfoDto) {
        let message;
        let configurationEmail=new ConfigurationEmail();
        configurationEmail.imageBody="https://images.vexels.com/media/users/3/153503/isolated/preview/82d5effb4641c42771a17d0550ffc60b-icono-de-la-insignia-de-acceso-by-vexels.png";
        configurationEmail.urlToButton="https://watasoft.com/signin";
        configurationEmail.imageHeader="https://pngimg.com/uploads/welcome/welcome_PNG81.png";
        console.log(configurationEmail);
        await this
            .mailerService
            .sendMail({
                to: infoMail.emailToSend,
                from: 'watankes@gmail.com',
                subject: infoMail.title,
                html: this.content.template(infoMail,configurationEmail)
            }).then(success => {
                message = new MessagesApi(`Correo enviado: ${infoMail.type}`,true,HttpStatus.ACCEPTED,success);
            }).catch(err => {
                message = new MessagesApi(`Correo enviado: ${infoMail.type}`,true,HttpStatus.NOT_FOUND,err);
            })
        return message;
    }
}