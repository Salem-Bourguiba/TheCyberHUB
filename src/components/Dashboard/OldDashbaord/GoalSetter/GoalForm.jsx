import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "src/features/goals/goalSlice";

const GoalForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createGoal({ text }));
        setText("");
    };

    return (
        <section className={"form"}>
            <form onSubmit={onSubmit}>
                <div className={"form-group"}>
                    <label htmlFor="goal">Goal</label>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="What's your goal?"
                    />
                    <button className={"btn btn-block"} type={"submit"}>
                        +
                    </button>
                </div>
            </form>
        </section>
    );
};

export default GoalForm;
