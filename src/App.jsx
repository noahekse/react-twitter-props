import React from 'react'
import { useState } from 'react'

// The initial tweet objects that should be displayed
import initialTweets from './assets/data/tweets.js'

// The user that we're pretending is signed in
import user from './assets/data/user.js'

// You may need to move these when creating new components
import LeftMenu from './components/LeftMenu.jsx'
import Middle from './components/Middle.jsx'
import RightMenu from './components/RightMenu.jsx'

function App() {
    const [loggedInUser] = useState(user)
    const [tweets, setTweets] = useState(initialTweets)
   

    return (
        <div className="container">
            
            <LeftMenu loggedInUser={loggedInUser} />
            <Middle loggedInUser={loggedInUser} tweets={tweets} setTweets={setTweets} />
            <RightMenu />

            

        </div>
    )
}

export default App
