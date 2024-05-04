
import "./aboutUs.css"
import about from "./images/about.png";

function AboutUs() {
  return (
   
    <div className="containerabout">
    <div className="content">
      <h1 className="abo1" >Welcome to <span className="zr">Takaful</span> </h1>
      <p className="abo">At Takaful, we believe in the power of collective generosity to make a meaningful impact in the lives of those in need. Our platform allows users like you to select a cause close to your heart and contribute to it directly, whether it's supporting education, healthcare, or providing relief during times of crisis. Not only can you donate, but you also have the opportunity to nominate individuals deserving of assistance, or if you find yourself in a position of need, you can receive support from our community. Together, we can create a world where kindness knows no bounds. Join us in our mission to spread hope and uplift lives through the simple act of giving..</p>
      </div>
      <img className="photoa" src={about} />
      
   
   </div>
  
  );
}

export default AboutUs;
