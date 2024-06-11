export type CaptchaProp = {
    sitekey: string,
    theme?: 'dark' | 'light',
    size?: 'compact' | 'normal',
    tabindex?: number,
    callback?: Function,
    'expired-callback'?: Function,
    'error-callback'?: Function,
}

interface gReCaptcha {

    execute(container: string, parameters: CaptchaProp): Promise<string>;

}

declare global {

    interface Window {
        grecaptcha: typeof gReCaptcha;
    }

}

export { };