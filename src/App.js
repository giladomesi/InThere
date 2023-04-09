import React from 'react';
import './App.css';
import { auth } from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import Welcome from './components/Welcome';
import ChatRoom from './components/ChatRoom';

import { getDatabase, ref, onValue, set, get } from "firebase/database";


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>InThere</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <Welcome />}
      </section>

    </div>
  );
}



function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default App;
