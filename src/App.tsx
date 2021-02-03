import React, { CSSProperties } from 'react';
import {useState} from 'react';
import logo from './logo2x.png';
import './App.css';
import nameList from './name_list';

const presentList = ["迎春奖", "牛气奖", "凌峰奖", "宏运来红包奖", "宏运彩红包奖"];

const App: React.FC = () => {

  const [now, setNow] = useState(0);
  const [isBegin, setBegin] = useState(false);
  const [present, setPresent] = useState(0);

  const hide:CSSProperties = {visibility: 'hidden'};
  const sum = nameList.length;

  const begin = () => {
    setBegin(true);
    const intv = setInterval(()=>{setNow(Math.floor(Math.random() * sum))}, 100);
    console.log("begin", intv);
  }

  const end = () => {
    const temp = Array(1000).fill(0);
    temp.map((num, i) => {clearInterval(i);return 0;});
    setNow(Math.floor(Math.random() * sum));
    setBegin(false);
  }

  const nextA = () => {
    setPresent(Math.min(present+1, 4));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-main">
          <p className="App-title">
            当前奖项：{presentList[present]}
          </p>
          <p className="App-name">
            { nameList[now] }
          </p>
          <button className="App-button" style={isBegin ? hide : {}} onClick={() => {begin()}}>
            开始抽奖
          </button>
          <button className="App-button" style={isBegin ? {marginTop: '-100px'} : hide} onClick={() => {end()}}>
            停止抽奖
          </button>
        </div>
        <button className="App-next" onClick={() => {nextA()}}>
          下一个奖项
        </button>
      </header>
    </div>
  );
}

export default App;
