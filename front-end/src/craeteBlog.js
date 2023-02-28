import axios from "axios";
import React, { useState } from "react"; 
import './createBlog.css'
const CreatePost = () => {
    const [userRole , setUserRole ] = useState("")
    const [img , setImg ] = useState("")
    const [title , setTitle] = useState("")
    const [description , setDescription ] = useState("")
    const [profileImg , setProfileImg] = useState("")
    const [profileName , setProfileName] = useState("")
    const [postText , setPosttext] = useState("")
    const [blogPhoto , setBlogPhoto] = useState("")

    function encodeImgFileAsURL(element) {
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            var base64image = reader.result.split(',')[1];
            setImg(base64image)
        }
        reader.readAsDataURL(file)
    }

    function encodeProfileImgFileAsURL(element) {
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            var base64image = reader.result.split(',')[1];
            setProfileImg(base64image)
        }
        reader.readAsDataURL(file)
    }

    function encodeBlogPhotoFileAsURL(element) {
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            var base64image = reader.result.split(',')[1];
            setBlogPhoto(base64image)
        }
        reader.readAsDataURL(file)
    }

    function post() {
        axios.post('http://localhost:8000' + '/post', {
            userRole : userRole,
            img : img,
            title : title,
            description : description,
            profileImg : profileImg,
            profileName : profileName,
            postText : postText,
            blogPhoto : blogPhoto ,
        })
        .then ((res) => {
            console.log(res.data)
        })
        .catch((er) => {
            console.log(er.message)
        })
    }
    return(
        <div className="createBlog">
            <input value={userRole} onChange={(e) => {setUserRole(e.target.value)}} placeholder="UserRole" />
            <div>
                main img
                <input type="file" onChange={(e) => {encodeImgFileAsURL(e.target)}} placeholder="img" />
            </div>
            <input value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="title"/>
            <input value={description} onChange={(e) => {setDescription(e.target.value)}} placeholder="description"/>
            <div>
                profile img
                <input type="file" onChange={(e) => {encodeProfileImgFileAsURL(e.target)}} placeholder="profileImg"/>
            </div>
            <input value={profileName} onChange={(e) => {setProfileName(e.target.value)}} placeholder="profileName"/>
            <input value={postText} onChange={(e) => {setPosttext(e.target.value)}} placeholder="postText"/>
            <div>
                    blog photo
                <input type="file" onChange={(e) => {encodeBlogPhotoFileAsURL(e.target)}} placeholder="blogPhoto"/>
            </div>

            <button onClick={()=> post()}>Post</button>
        </div>
    )
}
export default CreatePost;