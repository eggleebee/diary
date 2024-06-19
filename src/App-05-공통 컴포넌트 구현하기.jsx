import React from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import Button from './components/Button'
import Header from './components/Header'

import { getEmotionImage } from './util/get-emotion-image'

const App = () => {

  const handleClick = ( ) => {
    console.log("handleClick함수 호출!! 버튼 클릭됨")
  }

  return (
    <>
      <Header 
        title={"Header"}
        leftChild={<Button text={"왼쪽 버튼"} />}
        rightChild={<Button text={"오른쪽 버튼"} />}
      />
      <Button 
        text={"버튼1"} 
        type={"POSITIVE"}
        buttonClick={() => {console.log("버튼 클릭됨")}} 
      />

      <Button 
        text={"버튼2"} 
        type={"NEGATIVE"}
        buttonClick={handleClick} 
      />

      <Button 
        text={"버튼3"} 
        buttonClick={handleClick} 
      />
     
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