import { JsonObject, JsonProperty } from "json2typescript";
import DateConvert from "../converts/date-convert";

@JsonObject('LoginResponseOk')
export class LoginResponseOk {

    @JsonProperty('expiresIn', Number, DateConvert)
    private expiresIn: Date;

    @JsonProperty('token', String)
    private token: string;

    constructor(expiresIn: Date, token: string) {
        this.expiresIn = expiresIn;
        this.token = token;
    }

    getExpiresIn = () => new Date(this.expiresIn);
    getToken = () => this.token;
}