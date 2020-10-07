<template>
  <q-page class="bg-dark">
    <div class="row justify-center">
      
     
        <q-img class="logoH" :src="logo" :ratio="1" />
      
    
    </div>

    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <div class="positionsignin">
          LET'S GET YOUR NEW LOOK
        </div>
      </div>
      <div class="col-2"></div>
    </div>

    <!-- <div class="row justify-center ">
      <div class="linee">_______________________________</div>
    </div> -->

    <div class="logingg">
      <q-btn
        icon="ion-logo-google"
        color="red-9"
        size="md"
        class="q-px-md"
        rounded
        text-color="white"
        label="Sign in with Google"
        @click="btnGG"
      />
    </div>

     <div class="loginfb">
      <q-btn
        icon="ion-logo-facebook"
        color="blue-6"
        size="md"
        class="q-px-sm"
        rounded
        text-color="white"
        label="Sign in with Facebook"
        
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      logo: ""
    };
  },
  methods: {
    btnGG() {
      var provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var token = result.credential.accessToken;
        var user = result.user;
        const email = this.$firebase.auth().currentUser.email;
console.log(this.$firebase.auth().currentUser);
        this.$router.push({
          name: "registcustomer",
          params: {
            authEmail: email,
          }
        });
      })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
    },
    getlogo() {
      console.log("logo");
      this.$firestore
        .collection("logo")
        .where("name", "==", "logo-white")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().logowhite1);
            this.logo = doc.data().logo;
          });
        });
    }
  },
  mounted() {
    this.getlogo();
  }
};
</script>

<style>
.logoH {
  position: absolute;
  margin-top: 20%;
  
  width: 150px;
  height: 150px;
}
.positionsignin {
  position: absolute;
  bottom: 68%;
  left: 26%;
  width: 100%;
  color: white;
}
div.logingg {
  position: absolute;
  bottom: 50%;
  left: 18%;
}
div.loginfb {
  position: absolute;
  bottom: 36%;
  left: 18%;
  
  
}
/* .linee {
  position: absolute;
  color: white;
  
  bottom: 490px;
} */
</style>