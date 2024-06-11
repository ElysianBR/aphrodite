import { ButtonHTMLAttributes } from "react";

import "@/components/button/button.css";


interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: React.FC<CustomButtonProps> = (props) => {

    const {
        ...rest
    } = props;


    return (
        <button
            {...rest}
            className={`custom-button ${rest.className !== undefined ? rest.className : ''}`}
        />
    );
}

export default Button;