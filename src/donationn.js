import React from 'react';
import Donation from './donation'; 
import imn from './images/testphoto.jpg';

const Donationn = () => {
    
    
  


  return (
    <div>
      
      <Donation
        pictureUrl={imn}
        title="Treating my son for a congenital deformity that he has suffered from for years"
        username="Mustapha Noureddine"
        amount={30000}
        target={100000}
        description=" As a mother, I remember the day my son was born, full of hope and dreams for his future. But when the doctors told us about his congenital deformity, our lives changed drastically. We decided, with one heart, to do everything in our power to help him live a happy life despite the challenges ahead.
        We embarked on a journey of numerous medical visits, surgeries, and therapies. There were moments of despair and tears, but also moments of joy and triumph as we watched him grow and overcome obstacles with determination.
        Finally, we found a doctor capable of helping him and assisting in his treatment. Now, we have hope of improving his condition and overcoming the difficulties we have faced. We are seeking to raise funds to reach the specified amount for treatment, and we trust in the support of the community on this journey."
        
      />
    </div>
  );
}

export default Donationn;