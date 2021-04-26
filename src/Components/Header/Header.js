import React from 'react';
import { useEffect, useState } from 'react';
import './Header.css';

import Post from '../Post/Post';

const Header = () => {

    const [post,setPost] = useState([]);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => setPost(data))
  },[])

  

    return (
        <div>
        <div className="headerDiv">
            <h1>Welcome To Social Buddy</h1>
            
        </div>
        {
       post.map(post => <Post post={post}></Post>)
        }
        

        </div>
    );
};

export default Header;