import React, {useState, useRef, useCallback} from 'react';

const UseRefTest = () => {
    const inputEl = useRef(null);
    const [text, changeText] = useState('');
    const handleClick = useCallback(() => {
        changeText(inputEl.current.value)
    },[])

    return (
        <>
            <p>text: {text}</p>
            <input ref={inputEl} type="text" />
            <button onClick={handleClick}>Set Text</button>
        </>
    );
}

export default UseRefTest;