import React from "react";
import { LanguageButton, timeBar } from './StartAction';

export const ControllerButtons = () => {
    return (
        <>
            <div className="buttons">
                <button onClick={() => {
                    timeBar();
                    LanguageButton();
                }}>開始</button>
                <button>停止</button>
                <button>最初から</button>
            </div>
        </>
    );
};
