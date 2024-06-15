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

    execute(container: string, { action: string }): Promise<string>;
    reset(): void;

}

declare global {

    interface Window {
        grecaptcha: gReCaptcha;
    }

}

export { };