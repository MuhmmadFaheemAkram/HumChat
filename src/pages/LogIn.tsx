import {IonButtons, IonContent, IonIcon, IonImg, IonInput, IonItem, IonPage,} from '@ionic/react';
import {chatbubbleOutline,eyeOutline,lockClosedOutline, mailOutline,} from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './LogIn.scss';

const LogIn: React.FC = () => {
  let history=useHistory();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const login=()=>{
    history.push("/Home");
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='wrapper p_max'>
          <div className='bg_primary app_logo m_auto'>
              <IonIcon className='app_icon' icon={chatbubbleOutline}/>
          </div>
          <div className='text_center'>
            <h5 className='text_capitalize'>YouChat</h5>
          </div>
          <div>
            <h6 className='text_center mb_20 text_capitalize'>Login your account</h6>
            <div className='mrl_15'>
            <IonItem lines='none' className='box_shadow br_10 mb_20'>
              <IonIcon icon={mailOutline}/>
              <IonInput placeholder='Email Address' className='p_10'/>
              </IonItem>
              <IonItem lines='none' className='box_shadow br_10 mb_20'>
              <IonIcon icon={lockClosedOutline}/>
              <IonInput placeholder='Password' type={passwordShown ? "text" : "password"}
               className=' p_10'/>
              <IonIcon onClick={togglePassword} icon={eyeOutline}>
                </IonIcon>
              </IonItem>
              <a href="#" className='text_capitalize forgot_text mb_20'>Forgot Password?</a>
            </div>
            <div className='mrl_15'>
            <IonButtons className='bg_primary wh_100 text_capitalize br_10 button_text mb_20' onClick={login}>Login</IonButtons>
              <h6 className='text_center mb_20'>or continue with</h6>
              <IonButtons className='wh_100 text_capitalize br_10 google_login mb_20'>
              <IonImg className='google_img' src={require('../assets/images/Google.png')} />Google</IonButtons>
              <h6 className='text_center mb_20'>Don't have an account?<a className='text_capitalize'>Sign up</a></h6>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LogIn;