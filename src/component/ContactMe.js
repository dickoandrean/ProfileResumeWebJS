import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import ReactiveButton from 'reactive-button';
import './Profile.css';
import './contactme.css';

export default function ContactMe() {
  const [open, setOpen] = React.useState(false);
  const [fail, setFail] = React.useState(false);
  const [state, setState] = React.useState('idle');

  const onClickHandler = () => {
      setState('loading');
      setTimeout(() => {
          setState('success');
      }, 2000);}

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCloseFail = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setFail(false);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('dickoandrean', 'template_jh2ozjs', form.current, 'user_1lZQLfVRTO8oY6UCdRUbE')
      .then((result) => {
          setOpen(true);
      }, (error) => {
          setFail(true);
      });
  };
    
    return <div className='box-b'>
        <div><h className='a-title'>Contact Me</h></div>
        <div className='scrl'>
        <div className='mail'>
          	<form ref={form} onSubmit={sendEmail}>
              <div className='mail-box'>
                <label>Name</label>
                <input className='name' type="text" name="from_name" placeholder="Input Your Name" />  
              </div>
              <div className='mail-box'>
                <label>Email</label>
                <input className='email' type="email" name="from_email" placeholder="Input Your email" />
              </div>
              <div className='mail-box'>
                <label>Message</label>
                <textarea className='message' name="message" placeholder="Input Your Message" />
              </div>
              <div>
              <ReactiveButton
              buttonState={state}
              onClick={onClickHandler}
              idleText={'Send'}
              errorText={'Error'}
              type={'submit'}
              style={{ borderRadius: '20px', backgroundColor:"#FF005C", marginTop:'10px' }}
              size={'large'}
              animation={false}
              messageDuration={2000}
              />
              </div>
            </form>
        </div>
        <div className='maps' >
            <iframe title="maps" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA5ZE5nk53zMg3vm5EhOCFVtBk9193ZRhU&q=0.4719903237675686, 101.39134299275521" width='100%' height='100%'>Maps</iframe>
            </div>
        </div>
        <Snackbar 
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Message Sent
        </Alert>
      </Snackbar>
      <Snackbar open={fail} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleCloseFail} severity="warning">
          Message Send Failed
        </Alert>
      </Snackbar>
      <div className='expand'><ExpandMoreIcon /></div>
    </div>

}
