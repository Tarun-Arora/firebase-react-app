import { Button, Input } from '@material-ui/core'
import React, { useState } from 'react'
import firebase from 'firebase'
import {db,auth} from '../firebase'

function SendMessage({scroll}) {
    const [msg,setMsg] = useState('')
    async function sendMsg(e){
        e.preventDefault();
        console.log(msg);
        const { uid, photoURL } = auth.currentUser
        const message = {
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }
        await db.collection('messages').add(message)
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMsg}>
                <div class="sender">
                <Input value={msg} style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder="Message..." onChange={(e)=>setMsg(e.target.value)}></Input>
                <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} type="submit">Send</Button>
                </div>
            </form>
            
        </div>
    )
}

export default SendMessage
