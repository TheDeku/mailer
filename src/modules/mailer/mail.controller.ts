import { Body, Controller, Post } from "@nestjs/common";
import { MailService } from './mail.service';

@Controller('mail')
export class MailController{

    constructor(private mailService:MailService){

    }


    @Post()
    async createEndowment(@Body() data: any) {
       return await this.mailService.welcome(data);

    }


}