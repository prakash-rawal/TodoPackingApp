import React, { useState } from "react";

function AddTask({ addTask }) {


    const [userInput, setUserInput] = useState('');
    const [userSelect, setUserSelect] = useState("1");

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ id: Date.now() + 1, task: userInput, select: userSelect, complete: false });
        setUserInput("");
        setUserSelect("1");
    }
    return (
        <div className="form">
            <h1>What Do You Need For Your🤩Trip?</h1>
        <form onSubmit={handleSubmit}>
            <select className="select" onChange={(e) => setUserSelect(e.target.value)}  value={userSelect}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
            </select>
            <input className="input" value={userInput} type="text" onChange={handleChange} placeholder="Items..." required />
            <button className="select-btn">ADD</button>
        </form>
        </div>

    )
}

export default AddTask;