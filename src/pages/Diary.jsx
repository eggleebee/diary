import React from 'react'
import { useParams } from 'react-router-dom'

const Diary = () => {
    const params = useParams();
    console.log(params)

    return (
        <div>
            <h1>Diary 컴포넌트</h1>
            <p>{params.id} 번 일기입니다</p>
        </div>
    )
}

export default Diary