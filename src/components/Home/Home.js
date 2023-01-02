import React, { useState } from 'react';

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

    return (
        <div>
           <h1>{count}</h1>
           <button onClick={handleIncrease}>Increase</button>
           <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
};

export default Home;