import Provider from "../api-provider";
import ResponseError from "../response-error";
import { JsonObject, JsonProperty } from "json2typescript";
import DateConvert from "../converts/date-convert";


@JsonObject('Login')
export default class Login {

    @JsonProperty('expiresIn', Number, DateConvert)
    expiresIn: Date;

    @JsonProperty('token', String)
    token: string;

    constructor(expiresIn: Date, token: string) {
        this.expiresIn = expiresIn;
        this.token = token;
    }


    static PATH: string = "api/v1/auth/login";

    
    static async post(params: postParams): Promise<typeof Login | ResponseError> {
        const headers = new Headers({ "G-Recaptcha-Response": params.gRecaptchaResponse })
        return await new Provider().executePost({ path: Login.PATH, data: params.credentials, headers: headers }, Login);
    }

}

export type loginRequest = {
    email: string,
    password: string,

}

export type postParams = {
    credentials: loginRequest,
    gRecaptchaResponse: string,
}
