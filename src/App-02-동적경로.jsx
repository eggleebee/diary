import React from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'

// 1. "/" : 모든 일기를 조회하는 HOME 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

//URL Parameter : / 뒤에 아이템의 id를 명시 
// ~/product/1
// ~/product/2
// ~/product/3
// 아이템의 id 등의 잘 변경되지 않는 값을 주소로 명시하시 위해 사용됨


//Query String : ?뒤에 변수명과 값 명시
//~/search?q=검색어
//검색어 등의 자주 변경되는 값을 주소로 명시하기 위해 사용된다

const App = () => {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/nav")
  }

  return (
    <>
      <h1>Routes 컴포넌트 외부에 배치하면 모든 페이지에 공통으로 나타납니다.</h1>
      
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