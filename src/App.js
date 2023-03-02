import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {db} from './firebase-config';
import {collection, getDocs} from 'firebase/firestore';


function App() {  
  const [users, setUser] = useState([]);
  const usersCollectionRef=collection(db,'users');

  useEffect(()=>{
    const getUsers = async()=>{
      const data = await getDocs(usersCollectionRef);
      setUser(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }
    getUsers();
  }, [])
  return (
    <div className="App">
      {users.map((user)=>{return <div><h1 key={user.id}>Name:{user.name}</h1></div>})}
    </div>
  );
}

export default App;
