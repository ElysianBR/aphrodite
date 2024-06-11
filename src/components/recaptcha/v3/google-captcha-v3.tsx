import Script from "next/script";
import React, { useImperativeHandle, forwardRef } from "react"

export type GetCaptchaToken = () => Promise<string>

export type CaptchaV3Props = {
    sitekey: string
}

const GoogleCaptchaV3 = forwardRef<GetCaptchaToken, CaptchaV3Props>((props, ref) => {


    const getToken = async () => {
        return await window.grecaptcha.execute(props.sitekey, { action: 'submit' })
    }


    useImperativeHandle(ref, () => getToken);


    return (
        <Script src={`https://www.google.com/recaptcha/api.js?render=${props.sitekey}`} async defer />
    )
})

GoogleCaptchaV3.displayName = "GoogleCaptchaV3";

export default GoogleCaptchaV3;