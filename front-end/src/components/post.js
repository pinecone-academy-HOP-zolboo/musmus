import '../css/post.css'
import Host from './image/Ellipse.svg'
import postImg from './image/Rectangle.svg'
import commentImg from './image/Ellipse (1).svg'
import { Header } from './header'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from "axios"

export const Post = () => {
    const [post, setPost] = useState([])
    const id  = useParams();

    const instanse = axios.create({
        baseURL: `http://localhost:8000/`
    })
    
    const getPost = async () => {
        try {
            const res = await instanse.get(`/blog/${id}`)
            setPost(res.data.data)
            console.log(res.data.data)
        } catch (error) {
            alert("Error")
        }
    }
    useEffect(() => {
        getPost()
    }, [])

    return(
        <div className="container">
            {/* <Header /> */}
            <div className='mainContainer'>
                <div className="header">    
                </div>
                <div className='upperSection'>
                    <div className='title'>
                        <center><h1>10 Secrets for managing a remote team</h1></center>
                    </div>
                    <div className='postDate'>
                      <div className='whoPosted'> 
                        <img src={Host} className='hostImage' />
                        <div style={{width:"8vw"}}>Shedrack eze</div>
                      </div>
                          |
                      <div>2nd January,2022</div>
                    </div>
                </div>
                <div className='mainPost'>
                    <img className='postImg' src={postImg} />
                    <div className='description'>
                        If you're thinking of starting a blog of your own, but just don’t have a clue on what to blog about, then fear not! In this article, I have included a whole load of blog examples from a wide variety of different niches, all run on different blogging platforms like WordPress, Joomla! and Drupal. Since the beginning of the internet, millions and millions and millions of blogs have been created. Many have died due to lost interest or their owners giving up on the idea, while others have thrived and continue to grow, making money and earning their owners a steady income. It’s a constant evolution of content that keeps people coming back for more, especially if these blogs contact highly resourceful material that people find useful and interesting. Each example listed in this blog post are all different in some way and all bring something unique to their readers & subscribers. I want to show you what is possible and how you can take inspiration from them and create an awesome blog of your own. Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information. Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information. Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.
                    </div>
                </div>
                <div className='writterSection'>
                    <div className='whoWritten'>
                        <img src={Host} className='hostImage' />
                        <div className='writerInfo'>
                            <div style={{fontSize: "14px", color: "#1E2742"}}>Written by</div>
                            <div style={{fontSize: "24px", color: "#1E2742"}}>Shedrack Eze</div>
                            <div style={{fontSize: "14px", color: "#989898"}}>CEO Team App</div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='commentSection'>
                    <div className='Join'>
                        Join the conversation
                    </div>
                    <div className='comment'>
                        <img src={commentImg} />
                        <input placeholder='Comments' className='commentInput' />
                    </div>
                </div>
          </div>
        </div>
    )
}