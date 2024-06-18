"use client"

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
    private protocol = window.location.protocol;
    private host = window.location.hostname;
    private profile = process.env.NODE_ENV;
    private alias = this.profile === 'development' ? '' : 'api.';
    private port =  this.profile === 'development' ? ':8080' : '';
    private URI = this.protocol + '//' + this.alias + this.host + this.port;

    private REACT_APP_RECAPTCHA_KEY = process.env.NEXT_PUBLIC_REACT_APP_RECAPTCHA_KEY || '';

    private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${'token'}`,
        'Accept-Language': 'pt-BR',
        'XSS-Security': 'true'
    });


    // Constructors
    constructor() {
    }


    deserializeResponse<T extends { new(...args: any[]): any }>(response: any, classT: T) {
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
        try {
            const response = await fetch(
                `${this.URI}/${post.path}`,
                {
                    method: 'POST',
                    headers: this.resolveHeaders(post.headers),
                    body: JSON.stringify(post.data),
                }
            );

            const json = await response.json();

            if (response.ok) {
                return this.deserializeResponse(json, classT)
            }

            return this.deserializeResponse(json, ResponseError)
        } catch (err) {

            if (err instanceof Error) {
                return new ResponseError(0, err.name, err.message);
            }

            return new ResponseError(-1, "UNEXPECTED ERROR", "An unexpected error has occurred, contact your administrator.");

        }
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