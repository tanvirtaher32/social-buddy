import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import Comment from '../Comment/Comment';




const PostDetails = () => {
    const {postId} = useParams()
    const[post,setPost] = useState({})
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data) )

    },[postId])
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [postId])

    const [img,setImg] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setImg(data))
    },[postId])


  

    
    
    return (
        <div>
            
            <h2>Title: <span style={{color: 'brown'}}> {post.title}</span></h2>
           
            <h4>Description:</h4>
            <p> {post.body}</p>
            <h3>Comments : {comment.length}</h3>
            
            
            {
               comment.map(comment => <Comment comment={comment} img={img}></Comment>)
           } 
           

            
            
        </div>
    );
};

export default PostDetails;