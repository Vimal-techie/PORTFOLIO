import  Header from './components/Header/Header'
import Topcontainer from "./components/Topcontainer/Topcontainer";
import Projectcontainer from "./components/Projectcontainer/Projectcontainer";
import Skillcontainer from "./components/Skillcontainer/Skillcontainer";
import "./App.css"
import Experiencecontainer from "./components/Experiencecontainer/Experiencecontainer";
import Contactcontainer from "./components/Contactcontainer/Contactcontainer";

const App = () => {
  return (
    <div>
        <Header/>
        <Topcontainer/>
        <Skillcontainer/>
        <Projectcontainer/>
        <Experiencecontainer/>
        <Contactcontainer/>
    </div>
  )
}

export default App
