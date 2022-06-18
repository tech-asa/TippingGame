import { englishes } from './english';

//タイピングテキストの挿入処理
let successNumber: number = 0;
let timeValue: number = 0;

export const LanguageButton = () => {
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

    document.onkeydown = function (e) {
        // Enterキーもしくはスペースキーだったら無効にする
        if (e.key === 'Enter' || e.key === ' ') {
            return false;
        }
    }

    let i: number = 0;
    async function keypressEvent(e) {
        if (e.key === tippingWord[i] && i !== spanTextContents.length) {
            successNumber++;
            console.log(successNumber); // (6) ['t', 'i', 'p', 'i', 'n', 'g'] 要素から改めて獲得
            spanText[i].className = 'success';
            // 点数加算
            i++;
            // 次の文字を青くする処理
            if (i !== tippingWord.length) {
                spanText[i].className = 'nextNumber';
            }
        }
        if (i === spanTextContents.length) {
            i = 0;
            LanguageButton();
        };
    };
};

// タイムバーの実装

export const timeBar = () => {
    if (timeValue < 100) {
        timeValue += 1;
        let timer = document.querySelector('.tv') as HTMLInputElement;
        timer.style.width = ++timeValue + '%';
        // 20で1秒(1200で1分)
        setTimeout(timeBar, 200);
    } else {
        let mainText = document.querySelector('.main_zone .main_text') as HTMLInputElement;
        while (mainText.firstChild) {
            mainText.removeChild(mainText.firstChild);
        }
        alert(`${successNumber}文字成功！`);
        timeValue = 0;
        let timer = document.querySelector('.tv') as HTMLInputElement;
        timer.style.width = 0 + '%';
    };
};
