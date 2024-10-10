import { PopupContextType } from "@/provider/popup-provider"
import ResponseError from "@/provider/response-error"

export const showPopError = (popup: PopupContextType | null, error: object, onClose?: Function) => {
    if (error instanceof ResponseError) {
        popup?.showPopupError({
            text: error.getMessage(),
            header: error.getStatusCode() + ': ' + error.getError(),
            onClose: onClose
        })
    }
}