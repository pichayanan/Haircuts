<template>
  <q-page class="bg-dark row justify-center ">
    <q-img class=" row logo" :src="logo" :ratio="1" />
    <!-- Hello logo -->
    <div class="tag row justify-center">
       <h class="text full-width">Please Wait For Our Approval</h>
       <h7 class="text full-width">Status : {{registed}}</h7> 
       <q-btn rounded class="full-width" color="white text-black" @click="signout" label="LOGIN AGAIN" />
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      logo: "",
      id: "",
      registed: "",
      approve: ""
    };
  },
  methods: {
    getlogo() {
      console.log("logo");
      this.$firestore
        .collection("logo")
        .where("name", "==", "logo-white")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().logo);
            this.logo = doc.data().logo;
          });
        });
    },
    getdata() {
      console.log(this.$firebase.auth().currentUser.phoneNumber);
      this.$firestore
        .collection("barber")
        .where("telno", "==", this.$firebase.auth().currentUser.phoneNumber)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {

            this.registed = doc.data().registed;
            console.log("Registed : ", this.registed);       
            this.id = doc.id;

          });
          // if(this.registed == "true"){
          //   this.approve = "approve";
          //   console.log("Status : ", this.approve);

          // }else if(this.registed == "false"){
          //   this.approve == "Waiting";
          //   console.log("Status : ", this.approve);
          // }
          
        });
      
      
     
    },
    signout(){
      this.$firebase
        .auth()
        .signOut()
        .then(function () {
          // Sign-out successful.
          console.log("Sign-out successful");
          this.$router.push({
            name: "loginbarber",
           
          });
        })
        .catch(function (error) {
          // An error happened.
          console.log("Error");
        });

      this.$router.push({
            name: "loginbarber",
           
          });
    }
  },
  mounted() {
    this.getlogo();
    this.getdata();
  }
};
</script>
<style>
.logo {
  height: 200px;
  width: 200px;
  margin-top: 100px;
}
.absolute-bottom {
  width: 200px;
}
.text {
  color: white;
  font-size: 100%;
  margin-bottom: 10%;
  /* text-align: center; */
  
}
.tag{
  position: absolute;
  bottom: 30%;
  width: 200px;
}
</style>