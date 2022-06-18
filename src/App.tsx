import React, { memo, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './home.css';
import Button from './components/Atoms/button';
import { ControllerButtons } from './components/buttons';

import { SampleA } from './components/SampleA.jsx'
import { SampleB } from './components/SampleB.jsx'
import { SampleC } from './components/SampleC.jsx'
import { useCountdown } from 'react-countdown-circle-timer';
import { UrgeWithPleasureComponent } from './components/sample';

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
          {/* <Button name={'ボタン'} />
          <Router>
            <div>
              <Link to="/sampleA">sampleA</Link>
              <Link to="/sampleB">sampleB</Link>
              <Link to="/sampleC">sampleC</Link>
            </div>
            <Switch> */}
          {/* <Route>で個々のルーティングを定義する */}
          {/* <Route path="/sampleA" component={SampleA} />
              <Route path="/sampleB" component={SampleB} />
              <Route path="/sampleC" component={SampleC} />
            </Switch>
          </Router> */}

          <div className="main_zone">
            <div className='main_text'>
              <span>開始ボタンを押してください</span>
            </div>
            < ControllerButtons />
          </div>
        </main>

        <footer>
          <div className="timer">
            <div className="tv"></div>
          </div>
        </footer>
        <UrgeWithPleasureComponent />
      </body>
    </>
  );
};


export default App;
