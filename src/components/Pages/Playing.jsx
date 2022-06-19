import React, { Fragment } from 'react'
import { ControllerButtons } from '../Buttons.tsx'

export const Playing = () => {
    return (
        <>
            <main>
                <div className="main_zone">
                    <div className='main_text'>
                        <span>開始ボタンを押してください</span>
                    </div>
                    <ControllerButtons />
                </div>
            </main>

            <style jsx>{`
                main {
                    width: 100%;
                    height: 70vh;
                    padding: 50px 0 0 0;
                    background-color: #e4faee;
                }
                
                main .main_zone {
                    width: 80%;
                    height: 400px;
                    background-color: #ffb1b1;
                    margin: 0 auto;
                    border-radius: 10px;
                    position: relative;
                }
                
                main .main_zone .main_text {
                    position: absolute;
                    top: 40%;
                    left: 50%;
                    -webkit-transform: translate(-50%, -50%);
                            transform: translate(-50%, -50%);
                    margin-right: -50%;
                    padding: 2rem;
                    font-size: clamp(20px, 3vw, 40px);
                }
                
                main .main_zone .main_text h1 {
                    display: none;
                }
                
                main .main_zone .main_text span {
                    font-weight: bold;
                    letter-spacing: 0.2rem;
                    color: darkgray;
                }
                
                main .main_zone .main_text .success {
                    color: red;
                }
                
                main .main_zone .main_text .nextNumber {
                    color: #5858ff;
                }
                
                main .main_zone .buttons {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    position: absolute;
                    bottom: 15%;
                    left: 50%;
                    -webkit-transform: translate(-50%, -50%);
                            transform: translate(-50%, -50%);
                    margin-right: -50%;
                    width: 70%;
                    -ms-flex-pack: distribute;
                        justify-content: space-around;
                }
                
                main .main_zone .buttons button {
                    padding: 0.5rem 1rem;
                    border-radius: 15px;
                    background-color: #d1f2ff;
                    font-size: clamp(10px, 1.8vw, 25px);
                }
                
                main .main_zone .buttons button:hover {
                    cursor: pointer;
                }
            `}</style>
        </>
    )
}