import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearData } from './slice/dataSlice';

const DataRecived = () => {
    const data = useSelector((state) => state.data.cartItem);
    let dispatch =useDispatch()
    let handleClear =()=>{
        dispatch(clearData())
    } 

  return (
    <div className="text-center">
    <h2 className="text-lg font-bold">Data Recived: {data}</h2>
    <div className="">
    <button onClick={handleClear} className="ml-2 p-2 bg-blue-500 text-white rounded">Clear Data</button>
    </div>
  </div>
  );
};

export default DataRecived