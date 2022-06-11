import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './home.css';
import Button from './components/Atoms/button';
import { buttonEffect } from './components/page';

import { SampleA } from './components/SampleA.jsx'
import { SampleB } from './components/SampleB.jsx'
import { SampleC } from './components/SampleC.jsx'

function App() {

  // タイムバーの実装
  let timeValue = 0;
  function timeBar() {
    if (timeValue < 100) {
      timeValue += 1;
      let timer = document.querySelector('.tv') as HTMLInputElement;
      timer.style.width = ++timeValue + '%';
      // 20で1秒(1200で1分)
      setTimeout(timeBar, 3600);
    } else {
      alert('終了！');
      timeValue = 0;
      let timer = document.querySelector('.tv') as HTMLInputElement;
      timer.style.width = 0 + '%';
    }
    //
  }

  function testButton() {
    // DOMキーワード習得
    let tippingWords: string = document.querySelector('.main_zone h1')!.innerHTML;
    // キーワード分割
    let tippingWord: Array<string> = tippingWords.split('');
    // spanタグに変更
    let changedSpanText: string[] = [];
    tippingWord.forEach(function (value) {
      changedSpanText.push(`<span>${value}</span>`);
    });
    console.log(changedSpanText[0]);
  };

  // document.addEventListener('keypress', keypress_event);

  // function keypress_event(e) {
  //   if(e.key === tippingWord[0]){
  //     alert('正解');
  //     tippingWord.slice[0];
  //   }
  //   alert('不正解');
  // }

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
            <h1>タイピング文章タイピング文章タイピング文章</h1>
            <div className="buttons">
              <button>仮ボタン</button>
              <button>仮ボタン</button>
              <button>仮ボタン</button>
            </div>
          </div>
        </main>

        <footer>
          <div className="timer">
            <div className="tv"></div>
          </div>
          <button onClick={timeBar}>開始</button>
          <button onClick={testButton}>開始</button>
        </footer>
      </body>
    </>
  );
}

export default App;
