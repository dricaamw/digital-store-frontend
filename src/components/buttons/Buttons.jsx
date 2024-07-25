import PropTypes from "prop-types";
import { Button as But } from "primereact/button";
import "./Buttons.css";

const Button = (props) => (
    <But
        style={{ fontFamily: "Inter, primeicons" }}
        className={`button ${
            props.buttonType === "icon-button"
                ? `pi pi-plus ${props.buttonType}`
                : props.buttonType
        }`}
        label={` ${props.label}`}
        disabled={props.disabled}
    >
        {props.children}
    </But>
);

Button.propTypes = {
    buttonType: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    label: PropTypes.string,
};

export default Button;
