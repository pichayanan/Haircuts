
 importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js');
 
 firebase.initializeApp({
    apiKey: "AIzaSyAd64tl3omHKL3FLfFIgh42jzTVRaGz5TE",
  authDomain: "haircuts-10a55.firebaseapp.com",
  databaseURL: "https://haircuts-10a55.firebaseio.com",
  projectId: "haircuts-10a55",
  storageBucket: "haircuts-10a55.appspot.com",
  messagingSenderId: "653952880006",
  appId: "1:653952880006:web:d781217e20974ced1a3007",
  measurementId: "G-4765VLGNCF"
 });
 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 // [END initialize_firebase_in_sw]


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START on_background_message]
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
