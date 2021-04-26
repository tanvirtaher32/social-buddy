import React from 'react';
import Avatar from '@material-ui/core/Avatar';



const Comment = (props) => {
    const {name,body,email} = props.comment;

  
    
    return (
        <div >
            
            <Avatar  src={props.img.thumbnailUrl} />
            
           <h4 style={{color: 'purple'}}> {name} </h4> 
           <p>{body}</p>
           <h6>by: {email}</h6>
        </div>
    );
};

export default Comment;