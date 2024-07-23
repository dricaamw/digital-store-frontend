import { Checkbox as Cb } from "primereact/checkbox";
import { useState } from "react";
import "./Checkbox.css"

const Checkbox = () => {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <Cb className="checkbox" onChange={(e) => setChecked(e.checked)} checked={checked}></Cb>
        </>
    );
};

export default Checkbox;
