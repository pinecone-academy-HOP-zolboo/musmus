import "../css/miniPost.css"
import img1 from './image/1.png'
import { useNavigate } from "react-router-dom"
export const MiniPost = ({id ,img , title , description, profileImg , profileName , postDate ,blogPhoto}) => {
    const navigation = useNavigate()
    const onClickPost = () => {
        navigation(`/blog/${id}`)
    }
    return(
        <div className="Miniipost" onClick={onClickPost}>
            <img src={`data:image/jpeg;base64,${blogPhoto}`} className="PostImage" />
            <div className="PostTitle">{title}</div>
            <div className="PostDescription">{description}</div>
            <div className="PostProfile">
                <img src={`data:image/jpeg;base64,${profileImg}`} className="ProfileImage"/>
                <div className="ProfileName">{profileName}</div>
                <div className="ProfileDate">{(postDate.slice(0,10))}</div>
            </div>
        </div>
    )
}
