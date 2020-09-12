import Firebase from "firebase/app";
import "firebase/auth";

export default ({ app, router, Vue, store}) => {
   Vue.prototype.$auth = Firebase.auth();

   

   

};