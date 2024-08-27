import PropTypes from "prop-types";
import { RadioButton } from "primereact/radiobutton";
import "./Radio.css";

const Radio = (props) => {
    const handleChange = (event) => {
        props.onClick(event.target.value);
    };

    return (
        <RadioButton
            inputId={props.inputId}
            value={props.value}
            onChange={handleChange}
            checked={props.checked}
        />
    );
};

Radio.propTypes = {
    checked: PropTypes.bool.isRequired,
    inputId: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default Radio;
