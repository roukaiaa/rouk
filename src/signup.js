
import "./signup.css";
import photos from "./images/photos.png";

import { FaUser, FaEnvelope, FaLock, FaIdCard, FaMoneyCheck, FaDollarSign,  FaPiggyBank,FaArrowRight,  FaPencilAlt } from 'react-icons/fa'; 

function SignUp() {
  return (
    
       <div className="container">
          <div className="photo">
              <img src={photos}  />
          </div>
          <div className="signform">
              <form action="/sign_up" method="post">
                  <div className="input">
                  <label htmlFor="user" className="input-label">
        <FaUser className="input-icon" />
        
      </label>
      <input type="text" placeholder="Enter your username" id="user" name="user" />
      
                  </div>
                  <div className="input">
                  <label htmlFor="Email" className="input-label">
          <FaEnvelope className="input-icon" />
          
        </label>
                      <input type="text" placeholder="Email Address" id="Email" name="Email" />
                  </div>
                  <div className="input">
                  <label htmlFor="Password" className="input-label">
          < FaLock className ="input-icon" />
          
        </label>
                      <input type="password" placeholder="Password" id="Password" name="Password" />
                  </div>
                  <div className="input">
                  <label htmlFor="Password" className="input-label">
          < FaLock className ="input-icon" />
          
        </label>
                      <input type="password" placeholder="Confirm password" id="Password2" name="Password2" />
                  </div>
                  <div className="input">
                  <label htmlFor="Title" className="input-label">
          < FaPiggyBank className ="input-icon" />
          
        </label>
                      <input type="text" placeholder="Title for the pot..." id="Title" name="Title" />
                  </div>
                  <p> Select category:</p>
                  <div className="input">
                  <label htmlFor="selectedCategory" className="input-label">
          < FaArrowRight className ="input-icon" />
          
        </label>
                      <input list="category" name="selectedCategory" id="selectedCategory" />
                      <datalist id="category">
                          <option value="Disease research and treatment" />
                          <option value="Providing aid to the impoverished" />
                          <option value="Supporting victims of natural disasters" />
                          <option value="Funding scientific research" />
                          <option value="Providing education for underprivileged groups" />
                          <option value="Supporting social programs for disadvantaged children" />
                          <option value="Other causes" />
                      </datalist>
                  </div>
                  
                  <div className="input">
                  <label htmlFor="nCCP" className="input-label">
          < FaMoneyCheck className ="input-icon" /> </label>
                      <input type="number" placeholder="CCP number" id="nCCP" name="nCCP" />

                  </div>
                  <div className="input">
                  <label htmlFor="nCCP" className="input-label">
          < FaDollarSign className ="input-icon" /> </label>
                      <input type="number" placeholder="the amount" id="amount" name="amount" />
                  </div>
                  <div className="input">
                  <label htmlFor="description" className="input-label">
          < FaPencilAlt className ="input-icon" />
          
        </label>
                      <input className="Describtion" type="text" placeholder="Description.." id="description" name="description" />
                  </div>
                  <p>Please attach an image of a document justifying your request for collecting donations:</p>
                  <div className="confirmi">
                      <input type="file" id="image" name="image" />
                  </div>
                  <div className="bottom">
                      <input type="submit" value="Sign up" />
                  </div>
              </form>
          </div>
      </div>
  );
}

export default SignUp;
