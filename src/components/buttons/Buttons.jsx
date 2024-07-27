import PropTypes from "prop-types";
import { Button as But } from "primereact/button";
import "./Buttons.css";

const Button = (props) => {
    const handleClick = (event) => {
        if (props.onClick) {
            props.onClick(event);
        }
    };

    return (
        <But
            style={{ fontFamily: "Inter, primeicons" }}
            className={`button ${props.buttonType === "icon-button"
                    ? `pi pi-plus ${props.buttonType} ${props.className}`
                    : `${props.buttonType} ${props.className}`
                }`}
            label={`${props.label ? props.label : ""}`}
            disabled={props.disabled}
            onClick={handleClick}
        >
            {props.children}
        </But>
    );
};

Button.propTypes = {
    buttonType: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.any,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;
