import { Expose } from "class-transformer";
import { IsBoolean, IsString } from "class-validator";

@Expose()
export class MailInfoDto {

    //required
    @Expose()
    @IsString()
    title: string;
    @Expose()
    @IsString()
    usernameOrName: string;
    @Expose()
    @IsString()
    description: string;
    @Expose()
    @IsString()
    content: string;
    @Expose()
    @IsString()
    type: string;
    @Expose()
    @IsString()
    emailToSend: string;

    //optional config
    @Expose()
    urlToSend: string;
    @Expose()
    urlImageHeaderMail: string;
    @Expose()
    urlImageBodyMail: string;
    @Expose()
    containButton:boolean;
}