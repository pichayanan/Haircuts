<template>
  <q-page class="bg-dark">
    <div class="row justify-center">
      <div class="textFrist">
        Welcome to HAIRCUTS
      </div>
      <div class="textSec">
        Improve your style to get more attention
      </div>
    </div>
    <div class="row justify-center headbox">
      <q-item-section avatar>
        <q-avatar class="profilepic row">
          <img :src="URL" />
        </q-avatar>
      </q-item-section>
    </div>
    <div class="username">{{ fullName }}</div>
    <div class="q-pa-sm row justify-center text-white gender">
      <div class="q-gutter-xs ">
        <q-radio dark v-model="shape" val="Male" label="Male"></q-radio>
        <q-radio dark v-model="shape" val="Female" label="Female"></q-radio>
        <q-radio dark v-model="shape" val="LGBT" label="LGBT"></q-radio>
      </div>
    </div>
    <div class="textfix">
      Phuket, Thailand
    </div>

    <div class="q-pa-md row justify-center birthday" style="max-width: 300px ">
      <q-input dark v-model="date" mask="date" :rules="['date']">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="date">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="white" flat></q-btn>
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <div class="row justify-center text-white Bday">
        Birthday
      </div>
    </div>

    <div class="row justify-center">
      <q-btn
        outline
        style="color: white;"
        label="Start"
        @click="saveData"
      ></q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      shape: "",
      date: "2019/02/01",
      fullName: "",
      URL: "",
      registed: false,
    };
  },
  methods: {
    saveData() {
      console.log("saveData");
      console.log(this.shape);
      this.$firestore
        .collection("customer")
        .add({
          registed: true,
          gender: this.shape,
          CName: this.fullName,
          URL: this.$firebase.auth().currentUser.photoURL,
          CBirthday: this.date,
          CMail: this.$firebase.auth().currentUser.email,
          registed: true,
        })
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
          this.$router.push({
            name: "Maincustomer"
          });
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });
    },
   check() {
      this.$firestore
        .collection("customer")
        .where("CMail", "==", this.$firebase.auth().currentUser.email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
              let registdata = {
                URL: doc.data().this.$firebase.auth().currentUser.photoURL,
                CName:  doc.data().fullName,
                CMail: doc.data().this.$firebase.auth().currentUser.email,
                CBirthday: doc.data().date,
                gender: doc.data().shape,
                

          }
              this.$store.commit("registdata", registdata)
              if (doc.data().registed == true ){
                this.$router.push({
                      name: "Maincustomer",
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
    check();
    this.fullName = this.$firebase.auth().currentUser.displayName;
    this.URL = this.$firebase.auth().currentUser.photoURL;
  }
};
</script>

<style>
.textFrist {
  color: whitesmoke;
  margin-top: 15%;
  font-size: 150%;
}
.textSec {
  color: rgba(189, 184, 184, 0.692);
  margin-top: 3%;
  font-size: 110%;
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
.birthday {
  margin-left: 9%;
}
.Bday {
  margin-top: 9%;
  margin-left: 6%;
}
</style>
