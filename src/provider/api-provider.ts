import { JsonConvert, OperationMode, ValueCheckingMode } from "json2typescript";
import ResponseError from "./response-error";

export type genericLoaderType = {
    path: string
    headers?: Headers,
    data?: any,
    queryParams?: { [key: string]: string }
}


export default class Provider {

    static TOKEN_STORE_PREFIX = "jwt_token";
    static EXPIRE_STORE_PREFIX = "jwt_expires";

    // Variables
    private protocol = typeof window !== 'undefined' ? window.location.protocol : '';
    private host = typeof window !== 'undefined' ? window.location.hostname : '';
    private profile = process.env.NODE_ENV;
    private alias = this.profile === 'development' ? '' : 'api.';
    private port = this.profile === 'development' ? ':8080' : '';
    private jwt_token = typeof window !== 'undefined' ? Provider.getAuthorization() : '';

    // Se API_URL estiver definida, use-a; caso contrário, use a lógica atual
    private URI = process.env.NEXT_PUBLIC_API_URL || `${this.protocol}//${this.alias}${this.host}${this.port}`;

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
        jsonConvert.ignorePrimitiveChecks = true;
        jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
        jsonConvert.mapUndefinedToNull = true;

        try {
            return jsonConvert.deserializeObject(response, classT);
        } catch (e) {
            throw <Error>e;
        }
    }


    public async execute<T extends { new(...args: any[]): any }>(method: string, loader: genericLoaderType, classT: T): Promise<T | ResponseError> {
        try {
            const response = await fetch(
                `${this.URI}/${loader.path}${this.resolveQueryParams(loader.queryParams)}`,
                {
                    method: method,
                    headers: this.resolveHeaders(loader.headers),
                    body: JSON.stringify(loader.data),
                }
            );

            this.store(response);

            const json = await response.json();

            if (response.ok) {
                return this.deserializeResponse(json, classT)
            }

            return this.deserializeResponse(json, ResponseError)
        } catch (err) {
            console.debug(err);

            if (err instanceof Error) {
                return new ResponseError(0, err.name, err.message);
            }

            return new ResponseError(-1, "UNEXPECTED ERROR", "An unexpected error has occurred, contact your administrator.");

        }
    }


    public async executeSimple(method: string, loader: genericLoaderType): Promise<void | ResponseError> {
        try {

            let simpleHeaders = this.resolveHeaders(loader.headers);
            simpleHeaders.set('Content-Type', 'text/plain')

            const response = await fetch(
                `${this.URI}/${loader.path}${this.resolveQueryParams(loader.queryParams)}`,
                {
                    method: method,
                    headers: simpleHeaders,
                    body: loader.data,
                }
            );

            this.store(response);

            const json = await response.json();

            if (response.ok) {
                return;
            }

            return this.deserializeResponse(json, ResponseError)
        } catch (err) {
            console.debug(err);

            if (err instanceof Error) {
                return new ResponseError(0, err.name, err.message);
            }

            return new ResponseError(-1, "UNEXPECTED ERROR", "An unexpected error has occurred, contact your administrator.");

        }
    }


    public async executePost<T extends { new(...args: any[]): any }>(loader: genericLoaderType, classT: T): Promise<T | ResponseError> {
        return this.execute('POST', loader, classT)
    }

    public async executePostSimple(loader: genericLoaderType): Promise<void | ResponseError> {
        return this.executeSimple('POST', loader)
    }

    public async executeGet<T extends { new(...args: any[]): any }>(loader: genericLoaderType, classT: T): Promise<T | ResponseError> {
        return this.execute('GET', loader, classT)
    }

    public async executeGetSimple(loader: genericLoaderType): Promise<void | ResponseError> {
        return this.executeSimple('GET', loader)
    }

    public async executePut<T extends { new(...args: any[]): any }>(loader: genericLoaderType, classT: T): Promise<T | ResponseError> {
        return this.execute('PUT', loader, classT)
    }

    public async executePutSimple(loader: genericLoaderType): Promise<void | ResponseError> {
        return this.executeSimple('PUT', loader)
    }

    public async executePatch<T extends { new(...args: any[]): any }>(loader: genericLoaderType, classT: T): Promise<T | ResponseError> {
        return this.execute('PATCH', loader, classT)
    }

    public async executePatchSimple(loader: genericLoaderType): Promise<void | ResponseError> {
        return this.executeSimple('PATCH', loader)
    }

    public static getAuthorization() {
        if (window.localStorage.getItem('rememberMe') === "true") {
            return window.localStorage.getItem(Provider.TOKEN_STORE_PREFIX);
        } else {
            return window.sessionStorage.getItem(Provider.TOKEN_STORE_PREFIX);
        }
    }


    public static isAuthenticated(): boolean {
        return Provider.getAuthorization() != null;
    }


    public store(response: Response) {
        if (response != null && response.status == 200 && response.headers != null) {

            const bearer = response.headers.get('Authorization');
            const expires = response.headers.get('X-Expires');
            Provider.store(bearer, expires);

        }
    }


    public static store(token: string | null, expires: string | null) {
        if (window.localStorage.getItem('rememberMe') === "true") {

            if (token != undefined && token != null) {
                window.localStorage.setItem(Provider.TOKEN_STORE_PREFIX, token.replace("Bearer ", "").trim());
            }

            if (expires != undefined && expires != null) {
                window.localStorage.setItem(Provider.EXPIRE_STORE_PREFIX, expires);
            }

        } else {

            if (token != undefined && token != null) {
                window.sessionStorage.setItem(Provider.TOKEN_STORE_PREFIX, token.replace("Bearer ", "").trim());
            }

            if (expires != undefined && expires != null) {
                window.sessionStorage.setItem(Provider.EXPIRE_STORE_PREFIX, expires);
            }

        }
    }


    public static unStore() {
        if (window.localStorage.getItem('rememberMe') === "true") {

            window.localStorage.removeItem(Provider.TOKEN_STORE_PREFIX);
            window.localStorage.removeItem(Provider.EXPIRE_STORE_PREFIX);

        } else {

            window.sessionStorage.removeItem(Provider.TOKEN_STORE_PREFIX);
            window.sessionStorage.removeItem(Provider.EXPIRE_STORE_PREFIX);

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

    private resolveQueryParams(q: { [key: string]: string } | undefined): string {
        let queryStr: string = "";
        let count: number = 0;

        if (q != undefined) {
            for (const [key, value] of Object.entries(q)) {
                if (count > 0) {
                    queryStr = queryStr + "&" + key + "=" + value
                }
                else {
                    queryStr = queryStr + "?" + key + "=" + value
                }

                count++;
            }
        }

        return queryStr;
    }


    public getUri = (): string => this.URI;

}