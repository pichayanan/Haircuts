<template>
  <q-page class="bg-dark">
    <div class="row justify-center q-px-xl col-12 col-md-12 col-sm-12">
      <q-img class="logoH" :src="logo" :ratio="1" />
    </div>
    <br />

    <div class="row positionsignin justify-center q-px-sm col-12 col-md-12 col-sm-12">
   
          LET'S GET YOUR NEW LOOK
        
    </div>
   

    <!-- <div class="row justify-center ">
      <div class="linee">_______________________________</div>
    </div> -->

    <div class="row logingg justify-center q-px-md">
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
    <div class="row justify-center">
      <div class="linee">______________________________</div>
    </div> 
    
    <div class="row justify-center q-pt-xl">
      <q-btn
        @click="barber"
        color="white"
        size="md"
        class="q-px-lg"
        rounded
        text-color="black"
        label="Sign in as a barber"
      />
    </div>
    <div class="row work justify-center text-white q-pt-md">
      <div>WORK WITH US</div>
    </div> 
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      logo: "",
    };
  },
  methods: {
    barber(){
      this.$router.push({
      name: "loginbarber"
  });
    },
    
    btnGG() {
      var provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          var token = result.credential.accessToken;
          var user = result.user;
          const email = this.$firebase.auth().currentUser.email;
          console.log(this.$firebase.auth().currentUser);
          this.$store.commit("clogin", email);
        })
        .catch(error => {
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
  margin-top: 50%;
  width: 170px;
  height: 170px;
}
.positionsignin {
  color: rgb(253, 253, 253);
}
div.logingg {
  margin-top: 30%;
 
}

.work{
  font-size:60%;
}
/* .background-image {
  /* background-image: url(../../images/login.png); 
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 200%;
} */

.linee {
  padding-top: 5%;
  color: white;
}
@media screen and (min-width: 768px) {
  .logoH {
  margin-top: 20%;
  width: 170px;
  height: 170px;
}

div.logingg {
  margin-top: 10%;
 
}
div.loginfb {
  margin-top: 10%;
  
}
.work{
  font-size:60%;
}

.linee {
  padding-top: 5%;
  color: white;
}
}
@media screen and (min-width: 414px) {
  .logoH {
  margin-top: 30%;
  width: 170px;
  height: 170px;
}

div.logingg {
  margin-top: 10%;
 
}
div.loginfb {
  margin-top: 10%;
  
}
.work{
  font-size:60%;
}

.linee {
  padding-top: 5%;
  color: white;
}
}
@media screen and (min-width: 1024px) {
  .logoH {
  margin-top: 15%;
  width: 170px;
  height: 170px;
}

div.logingg {
  margin-top: 10%;
 
}
div.loginfb {
  margin-top: 10%;
  
}
.work{
  font-size:60%;
}

.linee {
  padding-top: 5%;
  color: white;
}
}
</style>
