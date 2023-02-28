import './homepage.css';
import { MiniPost } from './components/miniPost';
import { Header } from './components/header.js'
import { useEffect, useState } from 'react';
import axios from 'axios';
// var data = [{
//     _id : "172891271982",
//     userRole : "CEO Team App" ,
//     img : postImg,
//     title : "The Emotional Toll of Being in UX<",
//     description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
//     profileImg : userImg,
//     profileName : "Wade Warren",
//     postDate : "2nd January,2022",
//     postText : "If you’re thinking of starting a blog of your own, but just don’t have a clue on what to blog about, then fear not! In this article, I have included a whole load of blog examples from a wide variety of different niches, all run on different blogging platforms like WordPress, Joomla! and Drupal.Since the beginning of the internet, millions and millions and millions of blogs have been created. Many have died due to lost interest or their owners giving up on the idea, while others have thrived and continue to grow, making money and earning their owners a steady income. It’s a constant evolution of content that keeps people coming back for more, especially if these blogs contact highly resourceful material that people find useful and interesting.Each example listed in this blog post are all different in some way and all bring something unique to their readers & subscribers. I want to show you what is possible and how you can take inspiration from them and create an awesome blog of your own.Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information.Some of these blogs make over $100k a month, others are just a hobby for their owners, but all have the same purpose at their core… the love of writing and sharing information."
// }, 
// {
//     img : postImg,
//     title : "The Emotional Toll of Being in UX<",
//     description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
//     profileImg : userImg,
//     profileName : "Wade Warren",
//     postDate : "2nd January,2022"
// }, 

// {
//     img : postImg,
//     title : "The Emotional Toll of Being in UX<",
//     description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
//     profileImg : userImg,
//     profileName : "Wade Warren",
//     postDate : "2nd January,2022"
// }, 

// {
//     img : postImg,
//     title : "The Emotional Toll of Being in UX<",
//     description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
//     profileImg : userImg,
//     profileName : "Wade Warren",
//     postDate : "2nd January,2022"
// }, 

// {
//     img : postImg,
//     title : "The Emotional Toll of Being in UX<",
//     description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
//     profileImg : userImg,
//     profileName : "Wade Warren",
//     postDate : "2nd January,2022"
// }, 

// {
//     img : postImg,
//     title : "The Emotional Toll of Being in UX<",
//     description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
//     profileImg : userImg,
//     profileName : "Wade Warren",
//     postDate : "2nd January,2022"
// },
// {
//     img : postImg,
//     title : "The Emotional Toll of Being in UX<",
//     description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
//     profileImg : userImg,
//     profileName : "Wade Warren",
//     postDate : "2nd January,2022"
// }, 
// {
//     img : postImg,
//     title : "The Emotional Toll of Being in UX<",
//     description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
//     profileImg : userImg,
//     profileName : "Wade Warren",
//     postDate : "2nd January,2022"
// }, 

// {
//     img : postImg,
//     title : "The Emotional Toll of Being in UX<",
//     description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
//     profileImg : userImg,
//     profileName : "Wade Warren",
//     postDate : "2nd January,2022"
// }]

export const HomePage = () => {
    const [data , setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000')
        .then((res) => {
            console.log(res.data)
            setData(res.data.data)
        })
        .catch((er) => {
            console.log(er)
        })
    }, [])
    return (
      <div className="home">
        <Header />  
            <h1 className='h1'>Blog posts</h1>
            <div className='titleDescription'>Our latest updates and blogs about managing your team</div>

        <div className='posts'>
        {
            data.map((data)=> <MiniPost  id={data._id} userRole={data.userRole} img={data.img} title={data.title} description={data.description} profileImg={data.profileImg} profileName={data.profileName} postDate={data.postDate} postText={data.postText} blogPhoto={data.blogPhoto}/>)
        }
        </div>
       

      </div>
    );
  }