import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject('ResponseError')
export default class ResponseError {

    @JsonProperty('statusCode', Number)
    private statusCode: number;

    @JsonProperty('error', String)
    private error: string;

    @JsonProperty('error', String)
    private message: string;

    constructor(statusCode: number, error: string, message: string) {
        this.statusCode = statusCode;
        this.error = error;
        this.message = message;
    }
}