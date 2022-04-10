
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;



   const [progress, setProgress]= useState(0)

  //  setProgress = (progress)=>{
  //   this.setState({progress: progress})
  //  }

  return (
    <div>
      <Router>
      <Navbar/>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => this.setProgress(0)}
      />
      {/* <News this.setProgress={this.setProgress}   pageSize={this.pageSize} country="in" category="Sports"/> */}
      <Switch>
          <Route exact path="/"> <News setProgress={setProgress}   key="/" pageSize={pageSize} country="in" category="General" /> </Route>
          <Route exact path="/Business"> <News setProgress={setProgress}   key="Business" pageSize={pageSize} country="in" category="Business"/></Route>
          <Route exact path="/Entertainment"> <News setProgress={setProgress}   key="Entertainment" pageSize={pageSize} country="in" category="Entertainment"/></Route>
          <Route exact path="/General"> <News setProgress={setProgress}   key="General" pageSize={pageSize} country="in" category="General"/></Route>
          <Route exact path="/Health"> <News setProgress={setProgress}   key="Health" pageSize={pageSize} country="in" category="Health"/></Route>
          <Route exact path="/Science"> <News setProgress={setProgress}   key="Science" pageSize={pageSize} country="in" category="Science"/></Route>
          <Route exact path="/Sports"> <News setProgress={setProgress}   key="Sports" pageSize={pageSize} country="in" category="Sports"/></Route>
          <Route exact path="/Technology"> <News setProgress={setProgress}   key="Technology" pageSize={pageSize} country="in" category="Technology"/></Route>
       
        </Switch>
      </Router>
    </div>
  );
}


export default App;
