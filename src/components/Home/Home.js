import React, { useState } from 'react';
import './Home.css'

const Home = () => {
    const [count,setCount] = useState(0);

    const handleIncrease=()=>{
        const counts = count+1;
        setCount(counts);
    }

    const handleDecrease=()=>{
        const counts = count-1;
        setCount(counts);
    }

    const handleReset=()=>{
        const counts = count*0;
        setCount(counts)
    }

    return (
        <div className='count'>
           <h1>{count}</h1>
           <button onClick={handleIncrease} disabled={count>4?true:false}>Increase</button>
           <button onClick={handleDecrease} disabled={count<1?true:false}>Decrease</button>
           <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Home;