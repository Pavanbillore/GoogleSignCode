import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFCMToken()
  }
}

async function getFCMToken(){
  let fcmToken =await AsyncStorage.getItem('fcmToken');
  console.log(fcmToken,'old token')
  if(!fcmToken) {
  try {
    let fcmToken = await messaging().getToken();
  if(fcmToken){
       console.log(fcmToken,'new token')
       await AsyncStorage.setItem('fcmToken', fcmToken);
    }
  } catch (error) {
    console.log(error,'error in fcmtoken');
  }
  }
};

export const NotificationListner=async()=>{
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    
  });
  messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
  });
  messaging().onMessage(async remoteMessage => {
    console.log(
      'Notification on fronground state:',remoteMessage);

  })
}






// console.log(fcmToken, 'the old token');

 
    
    
//       console.log(fcmToken, 'the new generated token');
//       await 
//     }
//   } catch (error) {}
//     console.log(error, 'error raise in fcm token');
//     showError(error.message)

// }