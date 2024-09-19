import Provider from "../provider";
import ResponseError from "../responses/response-error";
import { JsonObject, JsonProperty } from "json2typescript";
import DateConvert from "../converts/date-convert";


@JsonObject('Account')
export default class Account {

    @JsonProperty('id', Number)
    id: number;

    @JsonProperty('active', Boolean)
    active: boolean;

    @JsonProperty('firstName', String)
    firstName: string;

    @JsonProperty('lastName', String)
    lastName: string;

    @JsonProperty('dateOfBirth', Number, DateConvert)
    dateOfBirth: Date;

    @JsonProperty('email', String)
    email: string;

    @JsonProperty('enable', Boolean)
    enable: boolean;

    constructor(id: number, active: boolean, firstName: string, lastName: string, dateOfBirth: Date, email: string, enable: boolean) {
        this.id = id;
        this.active = active;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.enable = enable;
    }


    static PATH: string = "api/v1/account";
    

    static async get(): Promise<typeof Account | ResponseError> {
        return await new Provider().executeGet({ path: Account.PATH }, Account);
    }
}