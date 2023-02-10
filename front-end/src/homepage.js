import './homepage.css';
import { MiniPost } from './components/miniPost';
import postImg from './components/image/1.png'
import userImg from './components/image/user1.png'
import { Header } from './components/header.js'
var data = [{
    img : postImg,
    title : "The Emotional Toll of Being in UX<",
    description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
    profileImg : userImg,
    profileName : "Wade Warren",
    postDate : "2nd January,2022"
}, 
{
    img : postImg,
    title : "The Emotional Toll of Being in UX<",
    description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
    profileImg : userImg,
    profileName : "Wade Warren",
    postDate : "2nd January,2022"
}, 

{
    img : postImg,
    title : "The Emotional Toll of Being in UX<",
    description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
    profileImg : userImg,
    profileName : "Wade Warren",
    postDate : "2nd January,2022"
}, 

{
    img : postImg,
    title : "The Emotional Toll of Being in UX<",
    description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
    profileImg : userImg,
    profileName : "Wade Warren",
    postDate : "2nd January,2022"
}, 

{
    img : postImg,
    title : "The Emotional Toll of Being in UX<",
    description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
    profileImg : userImg,
    profileName : "Wade Warren",
    postDate : "2nd January,2022"
}, 

{
    img : postImg,
    title : "The Emotional Toll of Being in UX<",
    description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
    profileImg : userImg,
    profileName : "Wade Warren",
    postDate : "2nd January,2022"
},
{
    img : postImg,
    title : "The Emotional Toll of Being in UX<",
    description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
    profileImg : userImg,
    profileName : "Wade Warren",
    postDate : "2nd January,2022"
}, 
{
    img : postImg,
    title : "The Emotional Toll of Being in UX<",
    description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
    profileImg : userImg,
    profileName : "Wade Warren",
    postDate : "2nd January,2022"
}, 

{
    img : postImg,
    title : "The Emotional Toll of Being in UX<",
    description : "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
    profileImg : userImg,
    profileName : "Wade Warren",
    postDate : "2nd January,2022"
}]
export const HomePage = () => {
    return (
      <div className="home">
        <Header />
            <h1 className='h1'>Blog posts</h1>
            <div className='title'>Our latest updates and blogs about managing your team</div>

        <div className='posts'>
        {
            data.map((data)=> <MiniPost img={data.img} title={data.title} description={data.description} profileImg={data.profileImg} profileName={data.profileName} postDate={data.postDate}/>)
        }
        </div>
       

      </div>
    );
  }