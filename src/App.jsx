import Header from './compenants/header/header'
import Hero from './compenants/hero/hero'
import Programs from './compenants/programs/programs'
import Courses from './compenants/courses/courses'
import Value from './compenants/value/value'
import Contact from './compenants/contact/contact'
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
        <Value/> 
        <Contact/>      
    </div>
  );
}

export default App;
 