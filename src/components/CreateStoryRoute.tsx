import { useState } from "react";

export function CreateStoryRoute() {
    const [ form, setForm ] = useState( '' );
    return (
        <form className="CreateStoryForm">
            <label>Your Name: <input type="text" /></label>
            <label>Word: <input type="text" /></label>
            <label>Word: <input type="text" /></label>
            <label>Word: <input type="text" /></label>
            <label>Word: <input type="text" /></label>
            <label>Word: <input type="text" /></label>
            <label>Word: <input type="text" /></label>
            <button>Submit</button>
        </form>
    );
}