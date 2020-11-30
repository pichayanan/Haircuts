import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

import firebaseConfig from "../../Firebase.conf";


export default ({ Vue }) => {
  Firebase.initializeApp(firebaseConfig);
  console.log("Firebase");
  Vue.prototype.$firebase = Firebase;
  Vue.prototype.$firestore = Firebase.firestore();
  Vue.prototype.$storage = Firebase.storage();


  // const messaging = Firebase.messaging();


  // function requestPermission() {
  //   console.log('Requesting permission...');
  //   // [START request_permission]
  //   Notification.requestPermission().then((permission) => {
  //     if (permission === 'granted') {
  //       console.log('Notification permission granted.');
       
  //     } else {
  //       console.log('Unable to get permission to notify.');
  //     }
  //   });
  //   // [END request_permission]
  // }
};
