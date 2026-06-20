import { useState } from "react";

function ControlledEg1() {
    let [state, setState] = useState('');

    let handleChange = (e) => {
        let value  = e.target.value
        if (value.length <= 10) {
            setState(e.target.value);
        }
    };

    return (
        <>
            <h1>Controlled Eg1</h1>

            <textarea
                name="feedback"
                value={state}
                onChange={handleChange}
            ></textarea>

            <h2>{state.length}/10</h2>
            <h2>Feedback : {state}</h2>
        </>
    );
}

export default ControlledEg1;