import React, {useState} from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css'

function Newsletter(props) {
  const [email, setEmail] = useState('')
  
  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" value={email} onChange={handleChange} placeholder="Enter your email address" />
        <button type="button" className="custom__button">Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;