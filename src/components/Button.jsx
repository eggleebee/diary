import React from 'react'
import './Button.css'

//React.js에서는 
// 데이터와 함수를 부모 컴포넌트에서 자식 컴포넌트로 props를 통해 전달하는 것이 일반적입니다. 
//그러나 자식 컴포넌트에서 부모 컴포넌트의 함수를 호출해야 하는 경우는 어떨까요? 

//자식 컴포넌트에서 어떤 이벤트가 발생하면 
//해당 이벤트를 부모 컴포넌트로 전달하여 
//부모 컴포넌트에서 필요한 작업을 수행할 수 있습니다. 
//이를 위해 콜백 함수를 사용합니다.

const Button = ({ text, type, buttonClick }) => {
  return (
    <button className={`Button Button_${type}`} onClick={buttonClick}>
        {text}
    </button>
  )
}

export default Button