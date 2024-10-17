import Provider from "../api-provider";
import ResponseError from "../response-error";
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

    @JsonProperty('profilePic', String)
    profilePic: string;

    @JsonProperty('address', String)
    address: string;

    @JsonProperty('city', String)
    city: string;

    @JsonProperty('state', String)
    state: string;

    @JsonProperty('country', String)
    country: string;

    @JsonProperty('email', String)
    email: string;

    @JsonProperty('enable', Boolean)
    enable: boolean;

    constructor(id: number,
        active: boolean,
        firstName: string,
        lastName: string,
        dateOfBirth: Date,
        profilePic: string,
        address: string,
        city: string,
        state: string,
        country: string,
        email: string,
        enable: boolean) {
        this.id = id;
        this.active = active;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.profilePic = profilePic;
        this.address = address;
        this.city = city;
        this.state = state;
        this.country = country;
        this.email = email;
        this.enable = enable;
    }


    static PATH: string = "api/v1/account";


    static async get(): Promise<typeof Account | ResponseError> {
        return await new Provider().executeGet({ path: Account.PATH }, Account);
    }

    static async put(account: Account): Promise<typeof Account | ResponseError> {
        return await new Provider().executePut({ path: Account.PATH, data: account }, Account);
    }

    static async patchProfilePic(dataPic: string): Promise<void | ResponseError> {
        return await new Provider().executePatchSimple({ path: `${Account.PATH}/profile-pic`, data: dataPic });
    }
}