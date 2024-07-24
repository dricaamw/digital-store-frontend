import { useState } from "react";
import Button from "./components/buttons/Buttons.jsx";
import { default as Cb } from "./components/checkbox/Checkbox.jsx";

function App() {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <Button label="BATATA" buttonType="primary-button" />
            <Cb checked={checked} onClick={setChecked} />
        </>
    );
}

export default App;