import { MailerModule } from '@nestjs-modules/mailer';
import { Global, Module } from '@nestjs/common';
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { MailModule } from './modules/mailer/mail.module';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';



@Global()
@Module({
  imports: [ConfigModule,MailModule,HandlebarsAdapter],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT)
  }
}
