import React from 'react';
import './Contact.css';

const Contact = () => {
    
        return (
          <div className="App">
          <p>Contact Us</p>
          <div>
          <form action="/action_page.php">
          <label>First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />
          <label>Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
      
      
          <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" />
      
      
          <label>Subject</label>
          
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
          <div class="button-place"><input type="submit" value="Submit" /></div>
          </form>
          </div>
          </div>
        );
      };

export default Contact;