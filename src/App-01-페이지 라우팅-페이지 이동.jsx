import React from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'

// 1. "/" : 모든 일기를 조회하는 HOME 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

//<Link />는 프로젝트 내에서 페이지 전환하는 경우 사용한다.
//<Link />는 SPA의 특징에 맞게 필요한 부분만 재렌더링하고 나머지 부분은 그대로 유지된다. 
//<Link />는 데이터를 필요한 부분만 불러올 수 있기 때문에 속도향상에 도움이된다.

//useNavigate 훅 
//조건이 필요한 곳에서 navigate 함수를 호출해서 경로를 이동할 수 있다.
//페이지 전환 시 추가로 처리해야 하는 로직이 있을 경우 useNavigate 사용
//즉, 특정한 코드의 실행이 끝나고 나서 페이지를 이동시키고 싶을 때 사용하면 된다.

//ex) 로그인 버튼 클릭 시
//회원가입 되어 있는 사용자 -> Main 페이지로 이동
//회원가입이 되어 있지 않은 사용자 -> SignUp 페이지로 이동

//ex) 로그인 페이지에서 
//아이디와 비밀번호를 입력하고 로그인 버튼을 클릭했을 때 다른 페이지로 이동할 때

//ex) 쇼핑몰의 회원 전용 페이지에 로그인없이 들어와서 로그인 페이지로 리다이렉트하는 경우
//ex) 쇼핑몰의 상품 상세 페이지에서 제품이 품절되었거나 삭제되어서 다른 페이지로 이동시키는 경우
//ex) 쇼핑몰에서 장바구니에 담기를 눌렀을 때 리퀘스트를 보내고 장바구니 페이지로 이동시키는 경우
//ex) 쇼핑몰에서 결제하기 버튼을 누르고 나서 모든 결제가 완료된 후에 페이지를 이동시키는 경우
//ex) 리다이렉트된 로그인 페이지에서 로그인을 완료한 후에 처음 진입했던 페이지로 돌아가는 경우

//<a href=#> 는 외부 프로젝트와 연결 할 때 주로 사용한다.
//MPA에서 작업 할 때는 항상 링크이동이나 페이지 이동에서 a태그만 사용했는데 
//a태그는 전체 페이지를 재렌더링 시키기 때문에 SPA에서는 적합하지 않았다. 
//그래서 리액트에서는 주로 Link 또는 useNavigate 훅을 사용

//우선 제일 중요한건 어떠한 조건이 걸렸나, 걸리지않았냐가 제일 중요하다!! 
//예를 들어서 link(a태그)는 어떤 조건없이 그냥 누르면 바로 넘어갈때 사용하고, 
//useNavigate는
//ex. ID - @ 포함 / PW - 5글자 이상/
//이런식으로 어떤 조건이 포함되어있을때 사용한다.

//그래서 회원가입 버튼은 어떠한 조건이 걸려있지않으니, link태그지만 
//회원가입 폼을 작성한 후, 사용하는 <제출하기, 완료> 버튼은 useNavigate 훅인 것이다.

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
        <Route path='/diary' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App