import React, { useState, useEffect } from "react";
const axios = require('axios').default;

function Form(props) {

    const {user_id} = props;

    const [text, setText] = useState({});
   

    const Input = () => {
        return <input type="text" onChange={e => setText({ [e.target.name]: e.target.value })}></input>;
    };
    const [inputList, setInputList] = useState([]);

    return (
        <div className="popup">
            
            <p> {"this is popup with id " + user_id} </p>
            <div className="labelPlusBtn">
                <label>Add Exercise</label>
                <button onClick={e => {e.preventDefault(); setInputList(inputList.concat(<Input key={inputList.length} name={inputList.length} />)); }}>Plus</button>
            </div>

            {inputList}
            <br>
            </br>
            <input type="text" name="llll" onChange={e => setText({ [e.target.name]: e.target.value })}></input>
            <input type="text" name="pppp" onChange={e => setText({ [e.target.name]: e.target.value })}></input>
            {console.log(text)}
            
        </div>
    );
}

export default Form;