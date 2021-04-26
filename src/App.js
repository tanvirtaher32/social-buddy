
import './App.css';
import Header from './Components/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import PostDetails from './Components/PostDetails/PostDetails';
import Error from './Components/Error/Error';
import Comment from './Components/Comment/Comment';

function App() {

  

  //console.log(post)

  return (
    <div className="App-header">
     
     
    

      <Router>
        <Switch>
          <Route path="/header">
            <Header></Header>
          </Route>
          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route path="/post/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/comments/:commentId">
            <Comment></Comment>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>

     
    </div>
  );
}

export default App;
