import React from "react";
import "./App.css";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr />

            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr />

            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr />

            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr />
        </div>
    );
}

export default App;
