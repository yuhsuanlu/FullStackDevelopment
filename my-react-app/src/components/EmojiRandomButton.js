import React, { useState } from 'react';
import EmojiConnection from './EmojiConnection';
import './EmojiRandom.css';

const getRandomEmoji = () => {
    const emojis = ["😀", "😎", "🚀", "❤️"];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
};

const EmojiRandomButton = () => {
    const [emoji1, setEmoji1] = useState(getRandomEmoji());
    const [emoji2, setEmoji2] = useState(getRandomEmoji());
    const [emoji3, setEmoji3] = useState(getRandomEmoji());

    const handleRandomize = () => {
        setEmoji1(getRandomEmoji());
        setEmoji2(getRandomEmoji());
        setEmoji3(getRandomEmoji());
    };

    return (
        <div className="pageStyle">
            <button className="button" onClick={handleRandomize}>Randomize Emojis Button</button>
            <EmojiConnection val1={emoji1} val2={emoji2} val3={emoji3} />
        </div>
    );
};

export default EmojiRandomButton;
