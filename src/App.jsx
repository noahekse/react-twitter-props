import { useState } from 'react'

// The initial tweet objects that should be displayed
import initialTweets from './assets/data/tweets.js'

// The user that we're pretending is signed in
import user from './assets/data/user.js'

// You may need to move these when creating new components
import imgElon from './assets/images/elon.jpg'
import imgZuck from './assets/images/zuck.jpg'

function App() {
    const [loggedInUser] = useState(user)
    const [tweets, setTweets] = useState(initialTweets)
    const [createTweetContent, setCreateTweetContent] = useState('')

    const addTweet = (e) => {
        e.preventDefault()
        setTweets([
            {
                ...loggedInUser,
                date: '1m',
                content: createTweetContent,
                commentCount: 0,
                retweetCount: 0,
                heartCount: 0,
                analyticsCount: 0
            },
            ...tweets
        ])
    }

    return (
        <div className="container">
            
            <aside className="left-side">
                <div className="logo">
                    <i className="fa-brands fa-twitter"></i>
                </div>

                <div className="menu-item active">
                    <a href="#">
                        <i className="fa-solid fa-house"></i>
                        Home
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        Explore
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-regular fa-bell"></i>
                        Notifications
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-regular fa-envelope"></i>
                        Messages
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-solid fa-bars"></i>
                        Lists
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-regular fa-bookmark"></i>
                        Bookmarks
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-regular fa-circle-check"></i>
                        Verified
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-regular fa-user"></i>
                        Profile
                    </a>
                </div>

                <div className="menu-item">
                    <a href="#">
                        <i className="fa-solid fa-ellipsis"></i>
                        More
                    </a>
                </div>

                <button className="tweet-btn">Tweet</button>

                <div className='profile-card'>
                    <div className="profile-icon"><img src={loggedInUser.profileImage}/></div>

                    <div className="profile-details">
                        <h4>{loggedInUser.name}</h4>
                        <small>{loggedInUser.handle}</small>
                    </div>

                    <div className="action">
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </aside>

            <main>
                <div className='top-bar'>
                    <h2 className="title">Home</h2>
                </div>

                <div className='create-tweet'>
                    <form onSubmit={addTweet}>
                        <div className="avatar-section">
                            <div className="profile-icon"><img src={loggedInUser.profileImage}/></div>
                        </div>

                        <div className="textarea-section">
                            <textarea
                                className="content"
                                type="text"
                                placeholder="What is happening?!"
                                value={createTweetContent}
                                onChange={(e) => setCreateTweetContent(e.target.value)}
                            ></textarea>
                        </div>

                        <div></div>

                        <div className="actions-section">
                            <div className="actions">
                                <i className="fa-regular fa-image action-icon"></i>
                                <i className="fa-solid fa-list action-icon"></i>
                                <i className="fa-regular fa-face-smile action-icon"></i>
                                <i className="fa-regular fa-calendar action-icon"></i>
                                <i className="fa-solid fa-location-dot action-icon"></i>
                            </div>

                            <button type="submit" disabled={createTweetContent.length < 1} className="tweet-btn">Tweet</button>
                        </div>
                    </form>
                </div>

                <div className="show-more-tweets">
                    <p>Show 35 Tweets</p>
                </div>

                {tweets.map((tweet, index) => {
                    return (
                        <article className='tweet' key={index}>
                            <div className="profile-icon"><img src={tweet.profileImage}/></div>

                            <div className="tweet-content">
                                <h4>{tweet.name} <span>{tweet.handle} · {tweet.date}</span></h4>
                                <p>{tweet.content}</p>

                                {tweet.article &&
                                    <div className="tweet-article">
                                        <img src={tweet.article.image} />
                                        <small>{tweet.article.site}</small>
                                        <h5>{tweet.article.title}</h5>
                                        <p>{tweet.article.content}</p>
                                    </div>
                                }

                                <div className="tweet-actions">
                                    <span>
                                        <i className="fa-regular fa-comment"></i>
                                        <small>{tweet.commentCount}</small>
                                    </span>

                                    <span>
                                        <i className="fa-solid fa-arrows-rotate"></i>
                                        <small>{tweet.retweetCount}</small>
                                    </span>

                                    <span>
                                        <i className="fa-regular fa-heart"></i>
                                        <small>{tweet.heartCount}</small>
                                    </span>

                                    <span>
                                        <i className="fa-solid fa-chart-simple"></i>
                                        <small>{tweet.analyticsCount}</small>
                                    </span>

                                    <span>
                                        <i className="fa-solid fa-upload"></i>
                                    </span>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </main>

            <aside className='right-side'>
                <div className='search-section'>
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    <input className="search" type="text" placeholder="Search Twitter" />
                </div>

                <div className='widget'>
                    <div className="widget-grid">
                        <h1>Get Verified</h1>
                        <h3>Subscribe to unlock nothing.</h3>

                        <button className="verify-btn">Get Verified</button>
                    </div>
                </div>

                <div className='widget'>
                    <h1>What's happening</h1>

                    <div className="news-block">
                        <div className="content">
                            <small>Entertainment · Trending</small>
                            <h4>Elon Musk</h4>
                            <small>14.5k Tweets</small>
                        </div>

                        <div className="action">
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>

                    <div className="news-block">
                        <div className="content">
                            <small>Cage Fights · Trending</small>
                            <h4>Mark Zuckerberg</h4>
                            <small>59.1k Tweets</small>
                        </div>

                        <div className="action">
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </div>
                <div className='widget'>
                    <h1>Who to follow</h1>

                    <div className="follow-block">
                        <div className="icon"><img src={imgElon}/></div>

                        <div className="content">
                            <h4>Elon Musk</h4>
                            <h5>@elonmusk</h5>
                        </div>

                        <div className="action">
                            <button className="follow-btn">Follow</button>
                        </div>
                    </div>

                    <div className="follow-block">
                        <div className="icon"><img src={imgZuck}/></div>

                        <div className="content">
                            <h4>Mark Zuckerberg</h4>
                            <h5>@markzuckerberg</h5>
                        </div>

                        <div className="action">
                            <button className="follow-btn">Follow</button>
                        </div>
                    </div>
                </div>
            </aside>

        </div>
    )
}

export default App
