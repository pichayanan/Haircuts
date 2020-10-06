<template>
  <q-page class="bg-dark">
    <div class="row justify-center">
      <div class="headtext">Welcome to HAIRCUTS</div>
      <div class="quote">Improve your experience on your dream job</div>
    </div>
    <div class="row justify-center headbox">
      <q-item-section avatar>
        <q-avatar class="profilepic row">
          <img
            src="https://img.freepik.com/free-vector/cartoon-pug-dog-prisoner-costume-with-sign-illustration_41984-336.jpg?size=338&ext=jpg"
          />
        </q-avatar>
      </q-item-section>
    </div>
    <div class="barbername"></div>
    <div class="q-pa-sm row justify-center text-white gender">
      <div class="q-gutter-xs">
        <q-radio dark v-model="gender" val="Male" label="Male"></q-radio>
        <q-radio dark v-model="gender" val="Female" label="Female"></q-radio>
        <q-radio dark v-model="gender" val="LGBT" label="LGBT"></q-radio>

      </div>
    </div>
    <div class="textfix">Phuket, Thailand</div>

    <div class="justify-center q-gutter-md form text-white row" style="max-width: 300px">
      <q-input dark class="col-6" v-model="firstname" label="Firstname *"></q-input>
      <q-input dark class="col-6" v-model="lastname" label="Lastname *"></q-input>
    </div>

    <div class="row justify-center savebutton">
      <q-btn outline style="color: white;" label="Start" @click="saveData"></q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      barberid: "",
      gender: "",
      firstname: "",
      lastname: "",
      email: "",
      location: "",
      profilepic:
        "https://image.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg",
      registed: false
    };
  },
  methods: {
    saveData(profilepic) {
      console.log("saveData");
      // this.barberid = doc.id;
      this.$firestore
        .collection("barber")
        .add({
          gender: this.gender,
          firstname: this.firstname,
          lastname: this.lastname,
          telno: this.$firebase.auth().currentUser.phoneNumber,
          email: this.email,
          location: this.location,
          profilepic: this.profilepic,
          registed: true,
          barberid: "",
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          let registdata = {
            firstname: this.firstname,
            lastname: this.lastname,
            telno: this.$firebase.auth().currentUser.phoneNumber,
            profilepic: this.profilepic,
          }
          this.$store.commit("REGISTER", registdata )
          this.$router.push({
            name: "mainbarber",
            params: {
              pic: profilepic,
            },
          });
          
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
    check() {
      this.$firestore
        .collection("barber")
        .where("telno", "==", this.$router.currentRoute.params.telno)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
              let registdata = {
            firstname: doc.data().firstname,
            lastname: doc.data().lastname,
            telno: doc.data(),
            profilepic: doc.data().profilepic,
          }
            this.$store.commit("REGISTER", registdata )
            if (doc.data().registed == true) {
              this.$router.push({
                name: "mainbarber",
                // params: { telno: this.phoneNumber}
              });
            }
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
  },
  mounted() {
    console.log(this.$router.currentRoute.params.telno);
    this.check();
  },
};
</script>

<style>
.headtext {
  color: whitesmoke;
  margin-top: 15%;
  font-size: 150%;
}
.quote {
  color: rgba(189, 184, 184, 0.692);
  margin-top: 3%;
  font-size: 90%;
}
.profilepic {
  margin-bottom: 10px;
  width: 120px;
  height: 120px;
}
.headbox {
  padding-top: 30px;
}
.changeprofile {
  margin-left: 16%;
  color: whitesmoke;
}
.username {
  margin-top: 5%;
  color: whitesmoke;
  text-align: center;
  font-size: 150%;
}
.gender {
  margin-top: 2%;
}
.textfix {
  color: whitesmoke;
  font-size: 80%;
  text-align: center;
}
.savebutton {
  margin-top: 50px;
}
.form {
  padding-top: 20px;
  margin-left: 5%;
  color: white;
}
</style>
