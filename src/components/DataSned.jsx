import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from './slice/dataSlice';
import { Link } from 'react-router-dom';
const DataSend = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
  
    const handleSubmit = () => {
      dispatch(setData(input));
    };
  
    return (
      <div className="text-center">
        <div className="py-[20px]">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="p-2 border rounded" placeholder="Enter some data"
        />
        </div>
        <div className="py-[20px]">
        <button onClick={handleSubmit} className="ml-2 p-2 bg-blue-500 text-white rounded">
          Send to ComponentB
        </button>
        </div>
        <Link to='/datarcv' target='blank'>
        <div className="">
            <button className="ml-2 p-2 bg-blue-500 text-white rounded">Go To ComponentB</button>
        </div>
        </Link>
      </div>
    );
};
export default DataSend;
