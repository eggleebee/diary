import React from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'

import { getEmotionImage } from './util/get-emotion-image'

const App = () => {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/nav")
  }

  return (
    <>
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
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