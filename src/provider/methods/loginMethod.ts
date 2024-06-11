import Provider from "../provider";
import ResponseError from "../dtos/ResponseErrorDTO";
import { LoginResponseOk } from "../dtos/LoginResponseOkDTO";


export type LoginRequest = {
    email: string,
    password: string,
}


export default class LoginMethod {

    public static PATH: string = "api/v1/auth/login";
    private provider: Provider;

    constructor(provider: Provider) {
        this.provider = provider
    }

    login = async ({ credentials, gRecaptchaResponse }: { credentials: LoginRequest, gRecaptchaResponse: string }): Promise<typeof LoginResponseOk | ResponseError> => {
        const headers = new Headers({ "G-Recaptcha-Response": gRecaptchaResponse })
        return await this.provider.executePost({ path: LoginMethod.PATH, data: credentials, headers: headers }, LoginResponseOk);
    }

}
