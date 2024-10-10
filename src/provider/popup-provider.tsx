import React from 'react';
import { Modal } from "@mui/material";
import AlertReact from "react-popup-alert";

import './popup-provider-styles.scss';

export type PopupProps = {
    text: string;
    header?: string | undefined;
    btnText?: string | undefined;
    showBorderBottom?: boolean;
    type?: string;
    color?: string;
    pressCloseOnOutsideClick?: boolean;
    alertStyles?: object;
    headerStyles?: object;
    textStyles?: object;
    buttonStyles?: object;
}

type ErrorProps = {
    text: string;
    header?: string;
    btnText?: string;
    showBorderBottom?: boolean;
    pressCloseOnOutsideClick?: boolean;
    onClose?: Function;
}

export type PopupContextType = {
    showPopupError: (props: ErrorProps
    ) => void,
    hidePopup: (onClose?: Function) => void,
}

const PopupContext = React.createContext<PopupContextType | null>(null);

export const usePopup = () => React.useContext(PopupContext);

export const PopupProvider = ({ children }: { children?: React.ReactNode }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [props, setProps] = React.useState<PopupProps | null>(null);

    const showPopupError = (props: ErrorProps) => {
        setProps({
            type: 'error',
            ...{
                ...{
                    header: "Erro",
                    btnText: "OK",
                    showBorderBottom: false,
                    pressCloseOnOutsideClick: false,
                },
                ...props
            }
        });
        setIsVisible(true);
    };

    const hidePopup = (onClose?: Function) => {
        onClose != undefined ? onClose() : null;
        setIsVisible(false);
    };

    return (
        <PopupContext.Provider value={{ showPopupError, hidePopup }}>
            {children}
            {isVisible && props && (
                // <Modal open={isVisible} style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                <AlertReact show={isVisible} onClosePress={hidePopup} {...props} />
                // </Modal>
            )}
        </PopupContext.Provider>
    );
};
