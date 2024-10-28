import Provider from "../api-provider";
import ResponseError from "../response-error";
import { JsonObject, JsonProperty } from "json2typescript";


@JsonObject('Company')
export default class Company {

    @JsonProperty('id', Number)
    id: number;

    @JsonProperty('active', Boolean)
    active: boolean;

    @JsonProperty('cnpj', String)
    cnpj: string;

    @JsonProperty('companyName', String)
    companyName: string;

    constructor(id: number, active: boolean, cnpj: string, companyName: string) {
        this.id = id;
        this.active = active;
        this.cnpj = cnpj;
        this.companyName = companyName;
    }


    static PATH: string = "api/v1/company";


    static async get(): Promise<typeof Company | ResponseError> {
        return await new Provider().executeGet({ path: Company.PATH }, Company);
    }
}