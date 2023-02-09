import "../css/miniPost.css"
import img1 from './image/1.png'
export const MiniPost = ({img , title , description, profileImg , profileName , postDate}) => {

    return(
        <div className="Miniipost">
            <img src={img} className="PostImage" />
            <div className="PostTitle">{title}</div>
            <div className="PostDescription">{description}</div>
            <div className="PostProfile">
                <img src={profileImg} className="ProfileImage"/>
                <div className="ProfileName">{profileName}</div>
                <div className="ProfileDate">{postDate}</div>
            </div>
        </div>
    )
}
