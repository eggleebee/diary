import React from 'react'
import { useReducer } from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'

const dummy = [
  {
    id : 'd001',
    createDate: new Date().getTime(),
    emotionId : 1,
    content : "1번 일기 내용"
  },
  {
    id : 'd002',
    createDate: new Date().getTime(),
    emotionId : 2,
    content : "2222번 일기 내용"
  },

]

function reducer(state, action) {
  return state;
}

const App = () => {
  /* const [data, dispatch] = useReducer(reducer, [] ) */

  const [data, dispatch] = useReducer(reducer, dummy )
  
  return (
    <>     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App