import { PopupContextType } from "@/provider/popup-provider"
import ResponseError from "@/provider/response-error"

export const showPopError = (popup: PopupContextType | null, error: object, onClose?: Function) => {
    if (error.constructor.name == ResponseError.name) {
        popup?.showPopupError({
            text: (error as ResponseError).getMessage(),
            header: (error as ResponseError).getStatusCode() + ' - ' + (error as ResponseError).getError(),
            onClose: onClose
        })
    }
}