import { JsonConverter, JsonCustomConvert } from "json2typescript";

@JsonConverter
export default class DateConvert implements JsonCustomConvert<Date> {
    serialize(data: Date): any {
        return data.toISOString();
    }

    deserialize(data: any): Date {
        return new Date(data);
    }
}