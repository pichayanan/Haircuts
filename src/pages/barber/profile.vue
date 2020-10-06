<template>
  <q-page class="bg-grey-2">

     <q-toolbar class="bg-grey-7 text-white">
      <q-btn flat round dense icon="keyboard_backspace" @click="back">
        <!-- <q-badge floating color="red">2</q-badge> -->
      </q-btn>
      <q-toolbar-title style="">
        PROFILE
      </q-toolbar-title>

    </q-toolbar>



    <div class="row justify-center headbox">
      <q-item-section avatar class>
        <q-avatar class="profilepic row text-center">
          <img :src="profilepic" />
        </q-avatar>
        <u class="row changeprofile" caption>Change Picture</u>
      </q-item-section>
    </div>

    <div class="justify-center q-gutter-md form text-black" style="max-width: 300px">
      <q-input  v-model="firstname" label="Firstname *"></q-input>
      <q-input  v-model="lastname" label="Lastname *"></q-input>
      <q-input  :readonly="readonly" :disable="disable" v-model="telno" label="Mobile"></q-input>
      <q-input  v-model="email" label="Email (optional)"></q-input>
      <q-input  v-model="location" label="Location"></q-input>
    </div>

    <div class="row justify-center savebutton">
      <q-btn color="black" text-color="white" class @click="editprofile" label="SAVE" />

      <!-- -------------popup------------ -->
      <!-- <q-dialog v-model="editprofile">
      <q-card>
        <q-card-section class="row items-center q-gutter-sm">
          <q-btn no-caps label="FINSIH!" color="primary" v-close-popup></q-btn>
        </q-card-section>
      </q-card>
      </q-dialog> -->


    </div>
    <div class="row justify-center logout">
      <q-btn color="red" text-color="white" class @click="logoutbutton" label="LOGOUT" />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      profilepic:"",
      firstname: "",
      lastname: "",
      telno: "",
      email: "",
      location: "",
      readonly: true,
      disable: true,
      id:"",
      // editprofile: false, //popup
    };
  },
  methods: {
     getdata() {
      console.log(this.$firebase.auth().currentUser.phoneNumber);
      this.$firestore
        .collection("barber")
        .where("telno", "==", this.$firebase.auth().currentUser.phoneNumber)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data().firstname);
            // console.log(doc.id, " => ", doc.data().lastname);
            // console.log(doc.id, " => ", doc.data().email);
            // console.log(doc.id, " => ", doc.data().location);  
            // console.log(doc.id)          
            this.firstname = doc.data().firstname;        
            this.profilepic = doc.data().profilepic;
            this.lastname = doc.data().lastname;
            this.telno = doc.data().telno;
            this.email = doc.data().email;
            this.location = doc.data().location;
            this.id = doc.id;
          });
        });
     
    },
    editprofile() {
      console.log("updateData");
      console.log(this.firstname);
      this.$firestore
        .collection("barber")
        .doc(this.id)
        .update({
          firstname: this.firstname,
          lastname: this.lastname,
          telno: this.$firebase.auth().currentUser.phoneNumber,
          email: this.email,
          location: this.location,
          profilepic: this.profilepic,
        })
        .then((docRef) => {
          // console.log("Document written with ID: ", docRef.id);
          // this.$router.push({
          //   name: "profilebarber",
           
          // });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
    logoutbutton() {
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


    },
    back(){
      this.$router.push({
            name: "mainbarber",
           
          });
    },

    
  },
  mounted() {
    console.log(this.$firebase.auth().currentUser.telno)
    this.getdata();
    this.profilepic = this.$firebase.auth().currentUser.profilepic;
    this.firstname = this.$firebase.auth().currentUser.firstname;
    this.lastname = this.$firebase.auth().currentUser.lastname;
    this.telno = this.$firebase.auth().currentUser.telno;
    this.email = this.$firebase.auth().currentUser.email;
    this.location = this.$firebase.auth().currentUser.location;
  },
};
</script>

<style>
.profilepic {
  margin-bottom: 10px;
  width: 130px;
  height: 130px;
}
.headbox {
  padding-top: 50px;
}
.changeprofile {
  margin-left: 10%;
  font-size: 15px;
  color: black;
}
.form {
  padding-top: 20px;
  margin-left: 5%;
  color: black;
}
.savebutton {
  margin-top: 50px;
  margin-bottom: 50px;
}

/* .logoutbutton {
} */
</style>
