import React from 'react';

const ContactScreen = () => {
  return (
    <section className='contact-screen'>
      <div className='container'>
        <div className='contact-screen-content'>
          <div className='form-title'>
            <h1>get in touch</h1>
          </div>
          <form>
            <div className='form-info'>
              <div className='form-input'>
                <label>Name : </label>
                <input type='text' name='name' placeholder='Name' />
              </div>
              <div className='form-input'>
                <label>Email : </label>
                <input type='email' name='email' placeholder='Email' />
              </div>
              <div className='form-input'>
                <label>Phone : </label>
                <input type='number' name='phone' placeholder='Phone Number' />
              </div>
              <div className='form-input'>
                <label>Subject : </label>
                <input type='text' name='subject' placeholder='Subject' />
              </div>
            </div>
            <div className='form-message'>
              <textarea
                name='message'
                value='Your Message'
                id=''
                cols='30'
                rows='10'
                readOnly
              ></textarea>
              <div className='form-btn'>
                <input type='submit' value='SEND' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactScreen;
