import React, { memo } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './home.css';
import Button from './components/Atoms/button';
import { buttonEffect } from './components/page';

import { SampleA } from './components/SampleA.jsx'
import { SampleB } from './components/SampleB.jsx'
import { SampleC } from './components/SampleC.jsx'
import { englishes } from './components/english';
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
  }  =  useCountdown({isPlaying:true, duration:7, colors:'#abc'})


  // タイムバーの実装
  let timeValue = 0;
  function timeBar() {
    if (timeValue < 100) {
      timeValue += 1;
      let timer = document.querySelector('.tv') as HTMLInputElement;
      timer.style.width = ++timeValue + '%';
      // 20で1秒(1200で1分)
      setTimeout(timeBar, 200);
    } else {
      alert(`${successNumber}文字完了！`);
      timeValue = 0;
      let timer = document.querySelector('.tv') as HTMLInputElement;
      timer.style.width = 0 + '%';
    };
  };

  //タイピングテキストの挿入処理
  let successNumber: number = 0;
  async function testButton() {
    // DOMキーワード習得
    const textLists = englishes;

    const rnd = Math.floor(Math.random() * textLists.length);
    // 小文字変換
    let textList = textLists[rnd].name.toLowerCase();

    let tippingWords: string = textList;

    // キーワード分割
    let tippingWord: Array<string> = tippingWords.split('');
    // 入れる要素を獲得
    let mainText = document.querySelector('.main_zone .main_text') as HTMLInputElement;

    // もし既に単語が存在するのであれば削除
    if (document.querySelector('.main_zone .main_text span')) {
      while (mainText.firstChild) {
        mainText.removeChild(mainText.firstChild);
      }
    };
    // 順番に要素を入れていく
    tippingWord.forEach(function (value) {
      let new_element = document.createElement('span');
      new_element.textContent = value;
      mainText.appendChild(new_element);
    });
    // 最初のspanだけ青色に変更
    document.querySelector('.main_zone .main_text span')!.className = 'nextNumber';
    // 要素の取得
    let spanText = document.querySelectorAll('.main_zone .main_text span');
    // 配列に格納
    let spanTextContents: Array<string> = [];
    spanText.forEach(function (value) {
      spanTextContents.push(value.innerHTML);
      return (spanTextContents);
    });

    document.addEventListener('keydown', keypressEvent);

    let i: number = 0;
    async function keypressEvent(e) {
      if (e.key === tippingWord[i] && i !== spanTextContents.length) {
        successNumber += 1;
        console.log(successNumber); // (6) ['t', 'i', 'p', 'i', 'n', 'g'] 要素から改めて獲得
        spanText[i].className = 'success';
        // 点数加算
        i++;
        // 次の文字を青くする処理
        if (i !== tippingWord.length) {
          spanText[i].className = 'nextNumber';
        }
      }
      // else if (e.key !== spanTextContents[i]) {
      //   alert('不正解');
      // }
      if (i === spanTextContents.length) {
        i = 0;
        await testButton();
      };
    };
  };

  ///////////////////////////////////////////

  // window.addEventListener('DOMContentLoaded', function (e) {
  //   alert('問題');
  //   // DOMキーワード習得
  //   let tippingWords: string = 'vneirvenaibnriob';
  //   // キーワード分割
  //   let tippingWord: Array<string> = tippingWords.split('');
  //   // 入れる要素を獲得
  //   let mainText = document.querySelector('.main_zone .main_text') as HTMLInputElement;
  //   // 順番に要素を入れていく
  //   tippingWord.forEach(function (value) {
  //     let new_element = document.createElement('span');
  //     new_element.textContent = value;
  //     mainText.appendChild(new_element);
  //   });
  // });
  //

  //   function keypress_event(e) {
  //   if(e.key === tippingWord[0]){
  //     alert('正解');
  //     tippingWord.slice[0];
  //   }
  //   alert('不正解');
  // }
  // document.addEventListener('keypress', keypress_event);

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
              <h1>tiping</h1>
            </div>
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
          <button onClick={() => {
            timeBar();
            testButton();
          }}>開始</button>
          <button onClick={testButton}>開始</button>
        </footer>
        <UrgeWithPleasureComponent/>
      </body>
    </>
  );
};


export default App;
