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
    const id = useParams();

  

    useEffect(() => {
        axios.get(`http://localhost:8000/${id.id}`)
        .then((res) => {
            console.log(res.data)
            setPost(res.data.data)
        })
        .catch((er) => {
            console.log(er)
        })
    }, [])

    return (
        <div className="container">
            <Header />
            <div className='mainContainer'>
                <div className="header">
                </div>
                <div className='upperSection'>
                    <div className='title'>
                        <center><h1>{post.title}</h1></center>
                    </div>
                    <div className='postDate'>
                        <div className='whoPosted'>
                            <img src={`data:image/jpeg;base64,${post.profileImg}`} className='hostImage' />
                            <div style={{ width: "5vw" }}>{post.profileName}</div>
                        </div>
                        |
                        <div>{post.postDate}</div> 
                    </div>
                </div>
                <div className='mainPost'>
                    <img className='postImg' src={`data:image/jpeg;base64,${post.img}`}/>
                    <div className='description'>
                        {post.postText}
                    </div>
                </div>
                <div className='writterSection'>
                    <div className='whoWritten'>
                        <img src={`data:image/jpeg;base64,${post.profileImg}`} className='hostImage' />
                        <div className='writerInfo'>
                            <div style={{ fontSize: "14px", color: "#1E2742" }}>Written by</div>
                            <div style={{ fontSize: "24px", color: "#1E2742" }}>{post.profileName}</div>
                            <div style={{ fontSize: "14px", color: "#989898" }}>{post.userRole}</div>
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