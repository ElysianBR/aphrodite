import { InputHTMLAttributes } from "react";

import "@/components/input/input.css";


interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
}

const Input: React.FC<CustomInputProps> = (props) => {

    const {
        label,
        ...rest
    } = props;


    return (
        <input
            {...rest}
            className={`custom-input ${rest.className !== undefined ? rest.className : ''}`}
            placeholder={`${rest.placeholder}${rest.required ? " *" : ""}`}
        />
    );
}

export default Input;