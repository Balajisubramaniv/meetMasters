import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }
  
  export function getUrlParams(
    url = window.location.href
  ) {
    let urlStr = url.split('?')[1];
    return new URLSearchParams(urlStr);
  }



  export const InitiateCall = () => {
    
    const roomID = getUrlParams().get('roomId') || randomID(5);
    const userID = getUrlParams().get('userId') || randomID(5);   
    const userName = getUrlParams().get('userName') || randomID(5); 
    debugger
    let myMeeting = async (element) => {
   // generate Kit Token
    const appID = 460868068;
    const serverSecret = "04ee93015657cf7c70fc3e3c17fbf619";
    
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, "04ee93015657cf7c70fc3e3c17fbf619", roomID,  userID, userName );

  
        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
        container: element,
        sharedLinks: [
            {
            name: 'Personal link',
            url:
            window.location.protocol + '//' + 
            window.location.host + window.location.pathname +
                '?roomId=' +
                roomID,
            },
        ],
        scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
        });


    }
return (
    <div className="myCallContainer" ref={myMeeting} style={{ width: '100vw', height: '100vh' }}> </div>
  )
}

export default InitiateCall;