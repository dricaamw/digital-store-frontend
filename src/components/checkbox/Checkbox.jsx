// import { Checkbox as Cb } from "primereact/checkbox";
import { useState } from "react";
import "./Checkbox.css"

const Checkbox = () => {
    const [checked, setChecked] = useState(false);

    return (
        <label>
            <input type="checkbox" onClick={() => setChecked(!checked)} checked={checked} />
            <span className={`checkbox`}></span>
        </label>
    );
};

export default Checkbox;
