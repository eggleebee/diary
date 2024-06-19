import React from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'

import emotion1 from './assets/emotion1.png'
import emotion2 from './assets/emotion2.png'
import emotion3 from './assets/emotion3.png'
import emotion4 from './assets/emotion4.png'
import emotion5 from './assets/emotion5.png'

// npm run build
// dist 폴더가 생성됨
// assets 폴더안의 index~ 파일안의 내용이 압축된 상태로 번들링 된것을 을 확인
// npm run preview
// http://localhost:4173/
// data URI 포맷으로 이미지주소 설정 
// 문자열 형태로 브라우저의 메모리에 캐싱하기 위해 사용되는 포맷
// 새로고침하더라도 다시 불러오지 않도록 최적화됨
// 일반 img src 는 새로고침 할 때마다 다시 불러옴

const App = () => {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/nav")
  }

  return (
    <>
      <div>
        <img src={emotion1} />
        <img src={emotion2} />
        <img src={emotion3} />
        <img src={emotion4} />
        <img src={emotion5} />
      </div>

      <div>
        <img src={"/emoji01.png"} />
        <img src={"/emoji02.png"} />
        <img src={"/emoji03.png"} />
      </div>
      
      <div>
        <Link to={"/"}>Home</Link>&nbsp;&nbsp;&nbsp; 
        <Link to={"/new"}>New</Link>&nbsp;&nbsp;&nbsp;
        <Link to={"/diary"}>Diary</Link>&nbsp;&nbsp;&nbsp;
      </div>

      <button onClick={onClickButton}>특정조건에 따라 페이지를 이동시켜야 한다면</button>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App