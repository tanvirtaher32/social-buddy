import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


const Post = (props) => {

  const { title,id } = props.post;

  const classes = useStyles();
 
  return (
    <div>

    
    <Card className={classes.root} style={{ margin: 30 }}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
       
          <Link to={`/post/${id}`}><Button variant="contained" color="primary"  >View More</Button></Link>
        
        

      </CardActions>
    </Card>

     
   


    </div>
  );
};

export default Post;