import React, { useState } from "react";
import CardPresenter from "./CardPresenter";

const CardContainer = () => {
    const [fill, setFill] = useState(false);

    const [text, setText] = useState("");
    const [comments, setComments] = useState([]);

    const toggleLike = () => {
        console.log(fill);
        setFill(!fill)
    };

    const handleText = (args: string) => {
        setText(args);
    };

    const onSubmit = () => {
        setComments((prev) => {
            return [...prev, text];
        });
        setText("");
    };

    console.log(comments);

    return (
        <CardPresenter 
            toggleLike={toggleLike} 
            handleText={handleText}
            fill={fill}            
            text={text}
            onSubmit={onSubmit}
        />
    );
};

export default CardContainer;