import { IonAvatar, IonBadge, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonSearchbar, IonSlide, IonSlides, IonTitle, IonToolbar, } from '@ionic/react';
import { chatbubbleOutline, notificationsOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './Home.scss';

const Home: React.FC = () => {
  let history=useHistory();
  const openInbox=()=>{
    history.push("/Inbox")
  }
  const [searchText, setSearchText] = useState('');
  const slideOpts = {
    speed: 400
  };
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <div className='top_header'>
            <div className='header_logo'>
              <IonIcon className='app_icon' icon={chatbubbleOutline} /></div>
            <IonTitle>Chat room</IonTitle>
            <div>
              <IonIcon className='notification_icon' icon={notificationsOutline} />
            </div>
          </div>
        </IonToolbar>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        <div className='m_10'>
          <IonSlides options={slideOpts} className='p_10'>
            <IonSlide>
              <IonAvatar>
                <IonImg src={require('../assets/images/profile1.jpg')} />
              </IonAvatar>
            </IonSlide>
            <IonSlide>
              <IonAvatar>
                <IonImg src={require('../assets/images/profile1.jpg')} />
              </IonAvatar>
            </IonSlide>
            <IonSlide>
              <IonAvatar>
                <IonImg src={require('../assets/images/profile1.jpg')} />
              </IonAvatar>
            </IonSlide>
            <IonSlide>
              <IonAvatar>
                <IonImg src={require('../assets/images/profile1.jpg')} />
              </IonAvatar>
            </IonSlide>
            <IonSlide>
              <IonAvatar>
                <IonImg src={require('../assets/images/profile1.jpg')} />
              </IonAvatar>
            </IonSlide>
            <IonSlide>
              <IonAvatar>
                <IonImg src={require('../assets/images/profile1.jpg')} />
              </IonAvatar>
            </IonSlide>
            <IonSlide>
              <IonAvatar>
                <IonImg src={require('../assets/images/profile1.jpg')} />
              </IonAvatar>
            </IonSlide>
            <IonSlide>
              <IonAvatar>
                <IonImg src={require('../assets/images/profile1.jpg')} />
              </IonAvatar>
            </IonSlide>
            <IonSlide>
              <IonAvatar>
                <IonImg src={require('../assets/images/profile1.jpg')} />
              </IonAvatar>
            </IonSlide>
            <IonSlide>
              <IonAvatar>
                <IonImg src={require('../assets/images/profile1.jpg')} />
              </IonAvatar>
            </IonSlide>
            <IonSlide>
              <IonAvatar>
                <IonImg src={require('../assets/images/profile1.jpg')} />
              </IonAvatar>
            </IonSlide>
          </IonSlides>
        </div>
      </IonHeader>
      <IonContent>
        <IonItem lines='none' onClick={openInbox}>
          <IonAvatar className='friend_img'>
            <IonImg src={require('../assets/images/profile1.jpg')} />
          </IonAvatar>
         <div className='friend_front_detail'>
         <div className='friend_text'>
            <h4>Faheem Kmboh</h4>
            <p>How are you?</p>
          </div>
          <div className='msg_time_badge'>
          <IonLabel>Just now</IonLabel>
          <IonBadge>3</IonBadge>
          </div>
         </div>
        </IonItem>
        <IonItem lines='none'>
          <IonAvatar className='friend_img'>
            <IonImg src={require('../assets/images/profile1.jpg')} />
          </IonAvatar>
         <div className='friend_front_detail'>
         <div className='friend_text'>
            <h4>Faheem Kmboh</h4>
            <p>How are you?</p>
          </div>
          <div className='msg_time_badge'>
          <IonLabel>Just now</IonLabel>
          <IonBadge>3</IonBadge>
          </div>
         </div>
        </IonItem>
        <IonItem lines='none'>
          <IonAvatar className='friend_img'>
            <IonImg src={require('../assets/images/profile1.jpg')} />
          </IonAvatar>
         <div className='friend_front_detail'>
         <div className='friend_text'>
            <h4>Faheem Kmboh</h4>
            <p>How are you?</p>
          </div>
          <div className='msg_time_badge'>
          <IonLabel>Just now</IonLabel>
          <IonBadge>3</IonBadge>
          </div>
         </div>
        </IonItem>
        <IonItem lines='none'>
          <IonAvatar className='friend_img'>
            <IonImg src={require('../assets/images/profile1.jpg')} />
          </IonAvatar>
         <div className='friend_front_detail'>
         <div className='friend_text'>
            <h4>Faheem Kmboh</h4>
            <p>How are you?</p>
          </div>
          <div className='msg_time_badge'>
          <IonLabel>Just now</IonLabel>
          <IonBadge>3</IonBadge>
          </div>
         </div>
        </IonItem>
        <IonItem lines='none'>
          <IonAvatar className='friend_img'>
            <IonImg src={require('../assets/images/profile1.jpg')} />
          </IonAvatar>
         <div className='friend_front_detail'>
         <div className='friend_text'>
            <h4>Faheem Kmboh</h4>
            <p>How are you?</p>
          </div>
          <div className='msg_time_badge'>
          <IonLabel>Just now</IonLabel>
          <IonBadge>3</IonBadge>
          </div>
         </div>
        </IonItem>
        <IonItem lines='none'>
          <IonAvatar className='friend_img'>
            <IonImg src={require('../assets/images/profile1.jpg')} />
          </IonAvatar>
         <div className='friend_front_detail'>
         <div className='friend_text'>
            <h4>Faheem Kmboh</h4>
            <p>How are you?</p>
          </div>
          <div className='msg_time_badge'>
          <IonLabel>Just now</IonLabel>
          <IonBadge>3</IonBadge>
          </div>
         </div>
        </IonItem>
        <IonItem lines='none'>
          <IonAvatar className='friend_img'>
            <IonImg src={require('../assets/images/profile1.jpg')} />
          </IonAvatar>
         <div className='friend_front_detail'>
         <div className='friend_text'>
            <h4>Faheem Kmboh</h4>
            <p>How are you?</p>
          </div>
          <div className='msg_time_badge'>
          <IonLabel>Just now</IonLabel>
          <IonBadge>3</IonBadge>
          </div>
         </div>
        </IonItem>
        <IonItem lines='none'>
          <IonAvatar className='friend_img'>
            <IonImg src={require('../assets/images/profile1.jpg')} />
          </IonAvatar>
         <div className='friend_front_detail'>
         <div className='friend_text'>
            <h4>Faheem Kmboh</h4>
            <p>How are you?</p>
          </div>
          <div className='msg_time_badge'>
          <IonLabel>Just now</IonLabel>
          <IonBadge>3</IonBadge>
          </div>
         </div>
        </IonItem>
        <IonItem lines='none'>
          <IonAvatar className='friend_img'>
            <IonImg src={require('../assets/images/profile1.jpg')} />
          </IonAvatar>
         <div className='friend_front_detail'>
         <div className='friend_text'>
            <h4>Faheem Kmboh</h4>
            <p>How are you?</p>
          </div>
          <div className='msg_time_badge'>
          <IonLabel>Just now</IonLabel>
          <IonBadge>3</IonBadge>
          </div>
         </div>
        </IonItem>
        <IonItem lines='none'>
          <IonAvatar className='friend_img'>
            <IonImg src={require('../assets/images/profile1.jpg')} />
          </IonAvatar>
         <div className='friend_front_detail'>
         <div className='friend_text'>
            <h4>Faheem Kmboh</h4>
            <p>How are you?</p>
          </div>
          <div className='msg_time_badge'>
          <IonLabel>Just now</IonLabel>
          <IonBadge>3</IonBadge>
          </div>
         </div>
        </IonItem>
        <IonItem lines='none'>
          <IonAvatar className='friend_img'>
            <IonImg src={require('../assets/images/profile1.jpg')} />
          </IonAvatar>
         <div className='friend_front_detail'>
         <div className='friend_text'>
            <h4>Faheem Kmboh</h4>
            <p>How are you?</p>
          </div>
          <div className='msg_time_badge'>
          <IonLabel>Just now</IonLabel>
          <IonBadge>3</IonBadge>
          </div>
         </div>
        </IonItem>        <IonItem lines='none'>
          <IonAvatar className='friend_img'>
            <IonImg src={require('../assets/images/profile1.jpg')} />
          </IonAvatar>
         <div className='friend_front_detail'>
         <div className='friend_text'>
            <h4>Faheem Kmboh</h4>
            <p>How are you?</p>
          </div>
          <div className='msg_time_badge'>
          <IonLabel>Just now</IonLabel>
          <IonBadge>3</IonBadge>
          </div>
         </div>
        </IonItem>
        <IonItem lines='none'>
          <IonAvatar className='friend_img'>
            <IonImg src={require('../assets/images/profile1.jpg')} />
          </IonAvatar>
         <div className='friend_front_detail'>
         <div className='friend_text'>
            <h4>Faheem Kmboh</h4>
            <p>How are you?</p>
          </div>
          <div className='msg_time_badge'>
          <IonLabel>Just now</IonLabel>
          <IonBadge>3</IonBadge>
          </div>
         </div>
        </IonItem>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;