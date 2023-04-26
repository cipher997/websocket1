import '../App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { responseStore } from './ResponseSlice';
import { useSelector } from 'react-redux';

function Login(props) {
  const rData = useSelector(state=>state.responseData.responseData)
  const Dispatch = useDispatch()

    const handleClick = () => {
        const data = "some data"
        props.onData(data);
      };

  const [response, setResponse] = useState([])
  const [username, setUsername] = useState("");

  var socket = new WebSocket("ws://salus15:4088/ws");

  if (!socket || socket.readyState !== WebSocket.OPEN) {
     
    socket.onopen = function (event) {   
    console.log('Connection opened'); 
    };
}
else{
 socket.close(1000, "Closing from client");
 console.log('Connection close'); 
}


function submit(){
  Dispatch(responseStore(response))
  var data = 'LOGIN\t' + username + '\tTest@123\t1\t192.168.0.15\tCAPTCH\n'
  console.log(data)
  socket.send(data)
  socket.onerror =function (event) {
    console.log(event.data) 
    }; 
  socket.onmessage = function (event) {
  setResponse(prevResponse => [...prevResponse, event.data])
    };    
}
        
  return (
    <div className="App">
  <h1>web socket</h1>
  <input
    className="form-control"
    placeholder="Enter your username"
    type="text"
    name='username'
    value={username}
    onChange={(e) => setUsername(e.target.value)}
  />
  <button type='submit' onClick={submit}>submit</button>
  
  <div>
  { 
    response.length > 0 &&
    <p> {response.map((item, index) => {
    const data = item.split('\n')
    
    return <p key={index}>{data}</p>;
  })}</p>
  
  }
  {/* <p>{rData}</p> */}
  <button onClick={handleClick}>Click me</button>
</div>
</div>
  );
}

export default Login;
