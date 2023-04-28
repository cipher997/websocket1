import React from 'react'
import '../App.css';
import { useSelector } from 'react-redux';


const Navbar = () => {
const rData = useSelector(state=>state.responseData.responseData)
const result = []

for (let i = 0; i < rData.length; i++) {
  
  if(rData[i].toString() !== "")
  {
  const innerArray = rData[i];
  const temp = [];

  for (let j = 0; j < innerArray.length; j++) {
    const splitArray = innerArray[j].split(/[\t\n]/);
    temp.push(splitArray.slice(0,-1));
  }
  result.push(temp);
  // processCmdMsg(result[0])}
  
 //console.log(result)
}


// function processCmdMsg(result1) {
//   switch (true) {
//     case (result1[0][0].toString(0,result1[0][0].toString().indexOf(" ")) === 'RATE'):
//       console.log(`The rate is RATE`);
//       break;
//     case (result[1][0].toString(0,result1[1][0].toString().indexOf(" ")) ==='USDPLAYER'):
//       console.log(`USDPLAYER response is USDPLAYER`);
//       break;
//     case 'USERSIGNUPTYPE':
//       console.log(`User sign up type is`);
//       break;
//     case 'IPPORTLIST':

//       console.log(`IP port list is  and the bad beat value is `);
//       break;
//     case 'BIGBADBEATVALUE':

//       console.log(`The big bad beat value is `);
//       break;
//     case 'ALLOWTEENPATTI':

//       console.log(`Allow teen patti response is `);
//       break;
//     case 'CREDITINFO':

//       console.log(`Credit info is  and user info is `);
//       break;
//     case 'PLAYERNAME':

//       console.log(`Player  the game`);
//       break;
//     case 'TABLECOUNT':

//       console.log(`There are  tables with players`);
//       break;
//     default:
//       console.log(`Unhandled response: response`);
  // }
}


  return (
    <div className="App">
      <p>{result}</p>
    </div>
  )
}

export default Navbar