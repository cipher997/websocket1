import React from 'react'
import '../App.css';
import { useSelector } from 'react-redux';


const Navbar = () => {
const rData = useSelector(state=>state.responseData.responseData)
const tostr=rData.toString()
console.log(tostr)
const arr = tostr.split("\n");
const arr1 = arr.toString()
const arr2 = arr1.replace(","," ")
// const arr2 = arr1.split("\t").join(" ")
// const arr3 = arr2.toString()
console.log(arr2)

;


 for (let i = 0; i < arr.length; i++) {
  const subArr = arr[i].split("\t");
  console.log(subArr)
}


   
  return (
    <div className="App">
       <p>{arr2}</p> 
       
    </div>
  )
}

export default Navbar