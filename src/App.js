import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {db} from './firebase-config';
import {addDoc, collection, getDocs, updateDoc,doc} from 'firebase/firestore';


function App() {
  const [getNewName,setNewName] = useState("");  
  const [users, setUser] = useState([]);
  const usersCollectionRef=collection(db,'users');

  const createUser = async() => {
    await addDoc(usersCollectionRef, {name:getNewName});
  }
  const editUser = async(id) => {
    const userDoc = doc(db,"users",id);
    const newName = {name:getNewName};
    await updateDoc(userDoc, newName);
  }

  useEffect(()=>{
    const getUsers = async()=>{
      const data = await getDocs(usersCollectionRef);
      setUser(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }
    getUsers();
  }, [])
  return (
    <div className="App">
      <input placeholder='Name...' onChange={(event)=>{setNewName(event.target.value)}}></input>
      <button onClick={createUser}>Submit</button>
      {users.map((user)=>{return <div><h1 key={user.id}>Name:{user.name}</h1> <button onClick={()=>{editUser(user.id)}}>Edit</button></div>})}
    </div>
  );
}

export default App;
