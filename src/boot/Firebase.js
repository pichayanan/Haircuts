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
};
