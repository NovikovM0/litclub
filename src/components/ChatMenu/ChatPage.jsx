import React, { useRef, useState } from 'react';
import { useUserAuth } from "context/UserAuth";
import { useLocation } from "react-router-dom";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { ChatMessage } from './ChatMessage';
import { db } from 'components/Auth/firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "./Chat.css";

const ChatPage = () => {
    const { user } = useUserAuth();
    const useQuery = () => new URLSearchParams(useLocation().search);
    const queryURL = useQuery();
    let bookId = queryURL.get('id');
    const messagesRef = db.collection(`messages-${bookId}`);
    const query = messagesRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'});
    const [formValue, setFormValue] = useState('');
    
    const sendMessage = async (e) => {
      e.preventDefault();

      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        name: user.displayName || user.email,
        userid: user.uid, 
        photoURL: user.photoURL,
      })  
      setFormValue('');
    }

    return (
        <div>
            <div className='chatWrapper'>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
            </div>
            
          <form className='chatForm' onSubmit={sendMessage}>

             <input className='chatInput' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Разговаривайте культурно" />

              <button className="chatInputButton" type="submit" disabled={!formValue}>✏️</button>

          </form>
        </div>
 )
}
export {ChatPage}