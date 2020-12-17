import React, { useState, useMemo } from 'react'

const UseMemoTest =() => {
    const [dateArray, setDateArray ] = useState([]); 
    
    const dateString = useMemo(() => {
        const dateObj = new Date();
        return `${dateObj.getFullYear()}年
            ${dateObj.getMonth() + 1}月
            ${dateObj.getDate()}日
            ${dateObj.getHours()}時
            ${dateObj.getMinutes()}分
            ${dateObj.getSeconds()}秒`;
        }, [])
        // }, [dateArray])
        // useMemoの挙動を見るときに、上の行を差し替えるとわかりやすい
        // 基本は計算結果をメモ化。dependencyListを入れたときには、そこがレンダーされた際に再度関数が走る
        // ちなみに、これをuseMemoではなく単純にuseCallbackにすると、中身のない日付の配列が吐き出される。
        // useMemoは最終変数にreturn下値が入るのに対し、useCallbackは中の関数を発火する違いがあるてことかな

    const addDate = () => {
        setDateArray([...dateArray, <p>日付： {dateString}</p>])
        console.log(dateArray)
    }

    return(
        <div>
            {dateArray}
            <button onClick={addDate}>add date</button>
        </div>
    )
}

export default UseMemoTest;