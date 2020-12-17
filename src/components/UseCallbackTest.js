import React, { useState, useCallback } from 'react';

const UseCallbackTest = () => {
    const [count, setCount] =useState(0);
    const handleInput = useCallback(e => {
        console.log(e.target.value);
        setCount((prevCount) => prevCount + 1)
    },[])

    return (
        <div>
            <input 
                type="button" 
                value={count}
                onClick={handleInput}
            />
        </div>
    );
}

export default UseCallbackTest;

// そもそも、functionはサイレンダーのたびに新しく生成されてしまう（という仕様？）
// 関数の計算結果をメモ化したいときは、useMemo、関数自体をメモ化したいときはuseCallback