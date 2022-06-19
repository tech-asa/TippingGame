import React from "react";
import { LanguageButton, timeBar } from './StartAction';
import { UrgeWithPleasureComponent } from './TimeRing';

export const ControllerButtons = () => {
    return (
        <>
            <div className="buttons">
                <button onClick={() => {
                    UrgeWithPleasureComponent();
                    timeBar();
                    LanguageButton();
                }}>開始</button>
                <button>停止</button>
                <button onClick={() => {
                    timeBar();
                    LanguageButton();
                }}>最初から</button>
            </div>
        </>
    );
};
