import React, { memo, useState } from 'react';
import './home.css';
import { useCountdown } from 'react-countdown-circle-timer';
import { PageRouting } from './components/Routing/Routing';

function App() {
  // タイマーの設定
  const {
    path,
    pathLength,
    stroke,
    strokeDashoffset,
    remainingTime,
    elapsedTime,
    size,
    strokeWidth
    // 実行するか、感覚は、色は
  } = useCountdown({ isPlaying: true, duration: 7, colors: '#abc' })

  return (
    <>
      <body>
        <header>
          <h1>[試作]寿司打</h1>
        </header>

        <main>
          <PageRouting/>
        </main>

        <footer>
          <div className="timer">
            <div className="tv"></div>
          </div>
        </footer>
      </body>
    </>
  );
};

export default App;
