import Header from './compenants/header/header'
import Hero from './compenants/hero/hero'
import Programs from './compenants/programs/programs'
import Courses from './compenants/courses/courses'
import './App.css'
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradiant"/>
        <Header/>
        <Hero/> 
      </div>
        <Programs/>
        <Courses/>
    </div>
  );
}

export default App;
 