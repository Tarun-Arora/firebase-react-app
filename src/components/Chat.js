import SignOut from './SignOut.js'
import React, { useState, useEffect, useRef } from 'react'
import { auth,db } from '../firebase.js'
import SendMessage from './SendMessage.js'

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(()=>{
        console.log(db.collection('messages'))
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    // useEffect(() => {
    //     db.collection('messages').onSnapshot(snapshot => {
    //         setMessages(snapshot.docs.map(doc => doc.data()))
    //     })
    // }, [])
    return ( 
        <div>
            <SignOut></SignOut>
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll}></SendMessage>
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
