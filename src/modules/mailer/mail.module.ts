import { Module } from "@nestjs/common";
import { MailerModule } from '@nestjs-modules/mailer';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';


@Module({
    imports: [
        MailerModule.forRootAsync({
            useFactory: () => ({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: "watankes",
                        pass: "Cdekaur15"
                    },
                    default: {
                        from: 'watankes@gmail.com',
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
    providers: [MailService],
    controllers: [MailController]
})
export class MailModule { }
