import PropTypes from "prop-types";
import "./Checkbox.css";

const Checkbox = (props) => {
    const handleChange = (event) => {
        props.onClick(event.target.checked);
        console.log(event.target.checked);
    };

    return (
        <label>
            <input
                type="checkbox"
                checked={props.checked}
                onChange={handleChange}
            />
            <span style={{ fontFamily: "primeicons" }}>
                {props.checked === true && "✔"}
            </span>
        </label>
    );
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};

export default Checkbox;