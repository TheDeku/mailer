import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) { }


    async welcome(infoMail: any) {
        console.log(process.cwd());
        await this
            .mailerService
            .sendMail({
                to: '1nightlovel@protonmail.com, c.astorgagonzalez@gmail.com',
                from: 'watankes@gmail.com',
                subject: 'Enviando correo desde servicio Nest',
                template: `${process.cwd()}/template/index`, // The `.pug` or `.hbs` extension is appended automatically.
                context: {  // Data to be sent to template engine.
                    code: 'cf1a3f828287',
                    username: 'john doe',
                }
            }).then(success => {
                console.log(success);
                return success;
            }).catch(err => {
                console.log(err);
            })
    }


    // welcome(infoMail:any){
    //     this.mailerService.sendMail({
    //         to:"",
    //         from:"",
    //         subject:"",
    //         template:'index',
    //         context:{
    //             code:'',
    //             info:''
    //         },
    //     }).then(success=>{
    //         console.log(success);
    //     }).catch(err =>{
    //         console.log(err);
    //     })
    // }
}