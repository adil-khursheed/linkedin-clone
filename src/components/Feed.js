import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import InputOptions from './InputOptions'
import Post from './Post'
import { db } from '../firebase'
import firebase from 'firebase'

const Feed = () => {

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        )
    }, [])

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'Adil Khursheed',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }
  return (
      <>
          <main className='feed'>
              <div className="feed__inputContainer">
                  <div className="feed__input">
                      <CreateIcon />
                      <form>
                          <input value={input} onChange={e=> setInput(e.target.value)}  type="text" />
                          <button onClick={sendPost} type='submit'>Send</button>
                      </form>
                  </div>
                  <div className="feed__inputOptions">
                      <InputOptions Icon={ImageIcon} title='Photo' color='#70b5f9' />
                      <InputOptions Icon={SubscriptionsIcon} title='Video' color='#e7a33e' />
                      <InputOptions Icon={EventNoteIcon} title='Event' color='#c0cbcd' />
                      <InputOptions Icon={CalendarViewDayIcon} title='Write article' color='#7fc15e' />
                  </div>
              </div>

              {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                  <Post
                      key={id}
                      name={name}
                      description={description}
                      message={message}
                      photoUrl={photoUrl}
                  />
              ))}
          </main>
      </>
  )
}

export default Feed