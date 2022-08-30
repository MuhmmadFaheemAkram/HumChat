import { IonAvatar, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonPopover, IonSearchbar, IonSlide, IonSlides, IonTextarea, IonTitle, IonToolbar, } from '@ionic/react';
import { add, headsetOutline, imageOutline, chevronBackOutline, ellipsisVertical, happy, mic, send, cameraReverseOutline, documentOutline, locationOutline, person } from 'ionicons/icons';
import { useState } from 'react';
import data from '@emoji-mart/data'
// import { Picker } from 'emoji-mart'
import Picker from 'emoji-picker-react';
import { Link } from 'react-router-dom';
import './Inbox.scss';

const Inbox: React.FC = () => {
  const [write, setWrite] = useState<any>(" ");
  const [text, setText] = useState<any>();
  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined })
  const [openEmoji, setOpenEmoji] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState<any>("");

  const onEmojiClick = (event: any, emojiObject: any) => {
    setChosenEmoji(emojiObject);
    let message = write;
    message += emojiObject.emoji;
    setWrite(message);

  };
  const showText = () => {
    setText(write);
    setChosenEmoji("");
    setWrite("");
  }
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <div className='inbox_header'>
            <div className='inbox_inner_item'>
              <Link to="/Home">
                <IonIcon className='inbox_icon' icon={chevronBackOutline} />
              </Link>
            </div>
            <div className='last_scene'>
              <IonAvatar>
                <IonImg src={require('../assets/images/profile1.jpg')} />
              </IonAvatar>
              <h4>Faheem Kamboh</h4>
              <p>Last scene today at 11:45pm</p>
            </div>
            <div className='inbox_inner_item'>
              <IonIcon className='inbox_icon' icon={ellipsisVertical} />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='msg_wrapper'>
          <div className='recieved_msg'>
            <p>I am fine, what about you? </p>
          </div>
          {text ?
            <div className='sent_msg'>
              <p>{text}</p>
            </div>
            : ""}
        </div>
        <div className='msg_keybord'>
          <IonItem lines='none' className='write_msg'>
            <div className=' mt_15 extra_access_features' onClick={
              (e: any) => {
                e.persist();
                setShowPopover({ showPopover: true, event: e })
              }}>
              <IonIcon className='add_icon' icon={add} /></div>
            <IonTextarea inputMode='text' spellcheck={true} auto-grow={true} className='p_none mt_15 ion_text_area' placeholder='Write message' value={write} onIonChange={(e:any)=>{
              setWrite(e.detail.value);
            }}>
            </IonTextarea>
            <IonIcon className='mr_10 mt_22' icon={send} onClick={showText} />
            <IonIcon className='mr_10 mt_22 mic' icon={mic} />
            <IonIcon className='mt_22' icon={happy} onClick={()=> setOpenEmoji(!openEmoji)} />
          </IonItem>
          {openEmoji ?
            <div>

              <Picker onEmojiClick={onEmojiClick} />
            </div>
            : ""
          }
          {/* {chosenEmoji ? (
            <span>You chose: {chosenEmoji.emoji}</span>
          ) : (
            <span>No emoji Chosen</span>
          )} */}
        </div>
        <IonPopover
          arrow={false}
          event={popoverState.event}
          isOpen={popoverState.showPopover}
          onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
        >
          <IonList>
            <div className='row'>
              <div className='col_4'>
                <div className='extra_add_features'>
                  <IonIcon icon={imageOutline} />
                </div>
                <IonLabel>Gallery</IonLabel>
              </div>
              <div className='col_4'>
                <div className='extra_add_features'>
                  <IonIcon icon={cameraReverseOutline} />
                </div>
                <IonLabel>Camera</IonLabel>
              </div>
              <div className='col_4'>
                <div className='extra_add_features'>
                  <IonIcon icon={documentOutline} />
                </div>
                <IonLabel>Document</IonLabel>
              </div>
              <div className='col_4'>
                <div className='extra_add_features'>
                  <IonIcon icon={headsetOutline} />
                </div>
                <IonLabel>Audio</IonLabel>
              </div>
              <div className='col_4'>
                <div className='extra_add_features'>
                  <IonIcon icon={locationOutline} />
                </div>
                <IonLabel>Location</IonLabel>
              </div>
              <div className='col_4'>
                <div className='extra_add_features'>
                  <IonIcon icon={person} />
                </div>
                <IonLabel>Contact</IonLabel>
              </div>
            </div>
          </IonList>
        </IonPopover>
      </IonContent>
    </IonPage>
  );
};

export default Inbox;