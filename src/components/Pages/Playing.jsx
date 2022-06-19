import React, { Fragment } from 'react'
import { ControllerButtons } from '../Buttons.tsx'

export const Playing = () => {
    return (
        <Fragment>
            <div className="main_zone">
                <div className='main_text'>
                    <span>開始ボタンを押してください</span>
                </div>
                <ControllerButtons />
            </div>
        </Fragment>
    )
}