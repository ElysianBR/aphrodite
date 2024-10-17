import Provider from "../api-provider";
import ResponseError from "../response-error";
import { JsonObject, JsonProperty } from "json2typescript";
import DateConvert from "../converts/date-convert";

@JsonObject('Register')
export default class Register {

    @JsonProperty('expiresIn', DateConvert, Date)
    expiresIn: Date;

    @JsonProperty('token', String)
    token: string;

    constructor(expiresIn: Date, token: string) {
        this.expiresIn = expiresIn;
        this.token = token;
    }

    static PATH: string = "api/v1/account/register";

    static async post(params: postParams): Promise<typeof Register | ResponseError> {
        return await new Provider().executePost({ path: Register.PATH, data: params.credentials }, Register);
    }
}

export type registerRequest = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export type postParams = {
    credentials: registerRequest,
}