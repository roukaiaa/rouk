
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SignUp from "./signup";
import Donation from "./donation";
import Donationn from "./donationn";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AboutUs from "./aboutUs";
import Donate from "./donate";
function App() {
  return (
<> <Navbar/>
    <Router>
      <div className="App">
     
          <Switch>
            
            <Route path="/signup"><SignUp/></Route>
            <Route path="/donation"><Donation/></Route>
            <Route path="/donationn"><Donationn/></Route>
            <Route path="/donate"><Donate/></Route>
            <Route path="/aboutUs"><AboutUs/></Route>
          </Switch>
        
        </div>

    </Router>
     <Footer/> </>
  );
}

export default App;
