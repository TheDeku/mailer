import { Module } from "@nestjs/common";
import { MailerModule } from '@nestjs-modules/mailer';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Configuration } from '../../config/config.keys';
import { ConfigService } from "src/config/config.service";


@Module({
    imports: [
        MailerModule.forRootAsync({
            useFactory: () => ({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'user',
                        pass: 'pass'
                    },
                    default: {
                        from: 'mail',
                    },
                    preview:true,
                    template: {
                        dir: process.cwd() + '/template/',
                        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
                        options: {
                            strict: true,
                        },
                    }
                }
            })
        })
    ],
    providers: [MailService,ConfigService],
    controllers: [MailController]
})
export class MailModule { 
    static user={
        account:"",
        password:"",
        mail:""
   }
    constructor(private readonly _configService: ConfigService) {
       MailModule.user={
            account:this._configService.get(Configuration.ACCOUNT),
            password:this._configService.get(Configuration.PASSWORD),
            mail:this._configService.get(Configuration.MAIL)
       }
      }
}
