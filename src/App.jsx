
import { useState } from "react";
import Button from "./components/buttons/Buttons.jsx";
import { default as Cb } from "./components/checkbox/Checkbox.jsx";
import Radio from "./components/radio/Radio.jsx";
import { Paths } from './routes';

function App() {
    const [checked, setChecked] = useState(false);
    const [ingredient, setIngredient] = useState("");

    return (
        <div className="flex gap-3">
            <Button label="BATATA" buttonType="primary-button" onClick={() => {}}/>
            <div className="bg-purple-900" style={{ inlineSize: "1px" }}></div>
            <Cb checked={checked} onClick={setChecked} />
            <div className="bg-purple-900" style={{ inlineSize: "1px" }}></div>
            <div className="ingredientes flex gap-1">
                <Radio
                    inputId="ingrediente1"
                    value="batata"
                    checked={ingredient === "batata"}
                    onClick={setIngredient}
                ></Radio>
                <Radio
                    inputId="ingrediente1"
                    value="feijão"
                    checked={ingredient === "feijão"}
                    onClick={setIngredient}
                ></Radio>
                <Paths />
            </div>
        </div>
    );
}

export default App;
