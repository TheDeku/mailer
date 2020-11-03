import { Body, Controller, Post, UsePipes, ValidationPipe, HttpStatus, Res } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailInfoDto } from './dto/email.info.dto';
import { MessagesApi } from '../../shared/messages.api';

@Controller()
export class MailController {

    constructor(private mailService: MailService) {

    }


    @Post("send")
    @UsePipes(ValidationPipe)
    async sendMail(@Body() data: MailInfoDto,@Res() response) {
        let resService;
        switch (data.type) {
            case "GENERAL":
                resService = await this.mailService.general(data);
                response.status(resService.code).json(resService);
                break;
            case "NEW_USER":
                resService = await this.mailService.welcome(data);
                response.status(resService.code).json(resService);
                break;
            case "PAYMENT":
                resService = await this.mailService.payment(data);
                response.status(resService.code).json(resService);
                break;
            case "BOOKING":
                resService = await this.mailService.booking(data);
                response.status(resService.code).json(resService);
                break;
            default:
                let message = new MessagesApi(`TIPO NO ENCONTRADO: ${data.type}`,true,HttpStatus.NOT_IMPLEMENTED,data)
                response.status(message.code).json(message);
                break;
        }
  

    }


}