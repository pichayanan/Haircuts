<template>
  <q-page class="bg-dark">
    <q-toolbar class="bg-dark text-white">
      <q-btn flat round dense icon="keyboard_backspace" @click="back">
        <!-- <q-badge floating color="red">2</q-badge> -->
      </q-btn>
      <q-toolbar-title>
        BACK
      </q-toolbar-title>
    </q-toolbar>
    <div class="row justify-center headbox">
      <q-item-section avatar class>
        <q-avatar class="profilepic row text-center">
          <img :src="URL" />
        </q-avatar>
        <u class="row changeprofile" caption>Change Picture</u>
      </q-item-section>
    </div>

    <div
      class="justify-center q-gutter-md form text-white"
      style="max-width: 300px"
    >
      <q-input dark v-model="CName" label="Firstname Lastname *"></q-input>
      <q-input
        dark
        :readonly="readonly"
        :disable="disable"
        v-model="CMail"
        label="Email"
      ></q-input>
    </div>
    <div
      class="justify-center q-gutter-md form text-white"
      style="max-width: 300px"
    >
      <q-input
        dark
        :readonly="readonly"
        :disable="disable"
        v-model="CBirthday"
        label="Birthday"
      ></q-input>
    </div>
    <div
      class="justify-center q-gutter-md form text-white"
      style="max-width: 300px"
    >
      <q-input
        dark
        :readonly="readonly"
        :disable="disable"
        v-model="gender"
        label="Gender"
      ></q-input>
    </div>

    <div class="row justify-center savebutton">
      <q-btn outline color="white" class @click="editprofile" label="SAVE" />
    </div>
    <div class="row justify-center logout">
      <q-btn outline color="red" class @click="logoutbutton" label="LOGOUT" />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      CName: "",
      URL: "",
      CMail: "",
      CBirthday: "",
      gender:"",
      readonly: true,
      disable: true,
      getID: "",
    };
  },
  methods: {
     getdata() {
      this.$firestore
        .collection("customer")
        .where("CMail", "==", this.$firebase.auth().currentUser.email)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(doc.id)
            this.getID = doc.id;
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().CName);
            this.CName = doc.data().CName;
            console.log(doc.id, " => ", doc.data().URL);
            this.URL = doc.data().URL;
            this.CMail = doc.data().CMail;
            this.CBirthday = doc.data().CBirthday;
            this.gender = doc.data().gender;
            console.log(this.CName);



          });
        });
    },
     editprofile() {
     console.log("updateData");
     this.$firestore
        .collection("customer")
        .doc(this.getID)
        .update({
          CName: this.CName,
          URL:this.URL,

        })
        .then((docRef) => {

          this.$router.push({
            name: "Maincustomer",
          });
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
    },
    back(){
      this.$router.push({
            name: "Maincustomer",
          });
    }
   },

  mounted() {
    this.getdata();
    this.URL = this.URL;
    this.CName = this.CName;
    this.CMail = this.CMail;
    this.CBirthday = this.CBirthday;
    this.gender = this.gender;
    console.log(this.$router.currentRoute.params.email);
    // this.check();

  },
};
</script>

<style>
.headbox {
  padding-top: 5%;
}
.profilepic {
  margin-bottom: 10px;
  width: 130px;
  height: 130px;
}
.changeprofile {
  margin-left: 10%;
  font-size: 15px;
  color: white;
}
.form {
  padding-top: 20px;
  margin-left: 5%;
  color: white;
}
.savebutton {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
