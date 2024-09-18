import { JsonConvert, OperationMode, ValueCheckingMode } from "json2typescript";
import ResponseError from "./responses/ResponseErrorDTO";

export type genericLoaderType = {
    path: string
    headers?: Headers,
    data?: any,
}


export default class Provider {

    // Variables
    private protocol = typeof window !== 'undefined'? window.location.protocol : '';
    private host = typeof window !== 'undefined' ? window.location.hostname : '';
    private profile = process.env.NODE_ENV;
    private alias = this.profile === 'development' ? '' : 'api.';
    private port = this.profile === 'development' ? ':8080' : '';
    private URI = this.protocol + '//' + this.alias + this.host + this.port;
    private jwt_token = typeof window !== 'undefined' ?  window.localStorage.getItem('jwt_token') : '';

    private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.jwt_token}`,
        'Accept-Language': 'pt-BR',
        'XSS-Security': 'true'
    });


    // Constructors
    constructor() {
    }


    private deserializeResponse<T extends { new(...args: any[]): any }>(response: any, classT: T) {
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


    public async execute<T extends { new(...args: any[]): any }>(method: string, loader: genericLoaderType, classT: T): Promise<T | ResponseError> {
        try {
            const response = await fetch(
                `${this.URI}/${loader.path}`,
                {
                    method: method,
                    headers: this.resolveHeaders(loader.headers),
                    body: JSON.stringify(loader.data),
                }
            );

            this.setJwtToken(response);

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

    public async executePost<T extends { new(...args: any[]): any }>(loader: genericLoaderType, classT: T): Promise<T | ResponseError> {
        return this.execute('POST', loader, classT)
    }


    public async executeGet<T extends { new(...args: any[]): any }>(loader: genericLoaderType, classT: T): Promise<T | ResponseError> {
        return this.execute('GET', loader, classT)
    }


    private setJwtToken(response: Response) {
        if (response != null && response.status === 200 && response.headers != null && response.headers.get('Authorization') != undefined) {
            const bearer = response.headers.get('Authorization');
            if (bearer != null) {
                window.localStorage.setItem('jwt_token', bearer.replace("Bearer ", ""));
            }
        }
    }


    private resolveHeaders(h: Headers | undefined): Headers {
        let headersTemp = this.headers;

        if (h !== undefined) {

            h.forEach((v, k) => {
                headersTemp.set(k, v)
            })

        }

        return headersTemp;
    }


    public getUri = (): string => this.URI;

}