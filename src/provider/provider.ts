import { JsonConvert, OperationMode, ValueCheckingMode } from "json2typescript";
import ResponseError from "./dtos/ResponseErrorDTO";

export type executePostType = {
    path: string
    headers?: Headers,
    data: any,
}

export type executeGetType = {
    path: string
    headers?: Headers,
}


export default class Provider {

    // Variables
    private URI = process.env.NEXT_PUBLIC_API_URI || '';
    private REACT_APP_RECAPTCHA_KEY = process.env.NEXT_PUBLIC_REACT_APP_RECAPTCHA_KEY || '';
    private headers: Headers;


    // Constructors
    constructor() {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${'token'}`,
            'Accept-Language': 'pt-BR',
            'XSS-Security': 'true'
        });
    }


    deserializeResponse<T extends { new(...args: any[]): any }> (response: any, classT: T) {
        let jsonConvert: JsonConvert = new JsonConvert();
        jsonConvert.operationMode = OperationMode.ENABLE;
        // jsonConvert.ignorePrimitiveChecks = true;
        jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
    
    
        try {
            return jsonConvert.deserializeObject(response, classT);
        } catch (e) {
            throw <Error>e;
        }
    }


    public async executePost<T extends { new(...args: any[]): any }>(post: executePostType, classT: T): Promise<T | ResponseError> {
        const response = await fetch(
            `${this.URI}/${post.path}`,
            {
                method: 'POST',
                headers: this.resolveHeaders(post.headers),
                body: JSON.stringify(post.data),
            }
        );

        const json = await response.json();

        if (response.status === 200) {
            return this.deserializeResponse(json, classT)
        }

        return this.deserializeResponse(json, ResponseError)
    }


    public async executeGet(post: executeGetType): Promise<any> {
        const response = await fetch(
            `${this.URI}/${post.path}`,
            {
                method: 'GET',
                headers: this.resolveHeaders(post.headers),
            }
        );

        return await response.json();
    }


    public resolveHeaders(h: Headers | undefined): Headers {
        let headersTemp = this.headers;

        if (h !== undefined) {

            h.forEach((v, k) => {
                headersTemp.set(k, v)
            })

        }

        return headersTemp;
    }


    public getUri = (): string => this.URI;
    public getRecaptchaAppKey = (): string => this.REACT_APP_RECAPTCHA_KEY;

}