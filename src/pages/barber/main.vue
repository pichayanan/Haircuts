<template>
  <q-page class="bg-white">
    <div class="row header bg-white q-mt-md">
      <div avatar class="col-3">
        <q-avatar class="profilepicture">
          <img :src="profilepic" />
        </q-avatar>
      </div>

      <div class="col-8">
        <div class="row text-weight-bold username" style="font-size: 1.5rem">
          {{ firstname }} {{ lastname }} &nbsp;
        </div>
        <div class="row text-caption text-weight-thin">
          <q-icon name="location_on" />
          {{ location }}
        </div>
      </div>
      <div class="col-1">
        <q-icon @click="editprofile" name="create" size="sm" />
      </div>
    </div>
    <div class="reservehead justify-center row">
      <div class="text-h6 col-5 text-center"><br />RESERVATION</div>
      <div class="q-pa-md col-7" style="max-width: 400px">
        <q-input v-model="date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="" color="blue">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date" class="bg-grey-10 text-white">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>

    <q-card class="bg-grey-2 reservecard">
      <div class="reserve row justify-center">
        <div class="q-pa-md q-gutter-sm">
          <h6 class="text text-weight-bold">SELECT TIME</h6>

          <div class="row justify-center">
            <q-btn class="timebtn"
              v-for="(data, index) in times"
              :key="index"
              :color="btnColour"
              text-color="black"
              :label="data.time"
              @click="dialog = true"
            />
          </div>
          <q-dialog v-model="dialog">
            <q-card>
              <div class="col-5 justify-start q-px-md text-h6 spacing">
                <!-- {{time}} -->
              </div>
              <q-card-section class="row items-center q-gutter-sm">
                <q-btn no-caps label="Open menu" color="primary"> </q-btn>
                <q-btn
                  no-caps
                  label="Close"
                  color="primary"
                  v-close-popup
                ></q-btn>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
        <br />
        <!-- <h6 class="text text-weight-bold">AFTERNOON</h6>
        <div class="row">
          <q-btn
            v-for="(time, index) in afternoon"
            :key="index"
            class="reserve"
            color="white"
            text-color="black"
            :label="time"
          />
          <br />
        </div> -->
      </div>
    </q-card>

    <div class="haircut row">
      <div class="text-h6 col-5 text-center">
        <h5 class="whitetext">HAIRCUTS</h5>
      </div>
    </div>
    <!-- {{ status }} -->
    <div class="row portfolio">
      <q-card class="photos my-card col-4">
        <q-img src="https://cdn.quasar.dev/img/avatar2.jpg" basic>
          <div class="absolute-bottom text-subtitle2 text-center">Undercut</div>
        </q-img>
      </q-card>
      <div class="photos col-3 addbutton">
        <q-icon
          size="80px"
          name="add_circle_outline"
          color="black"
          @click="addportfolio"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      date: "",
      firstname: "",
      lastname: "",
      profilepic: "",
      telno: "",
      barberid: "",
      location: "",
      photos: [],
      // morning: ["9 AM", "10 AM", "11 AM", "12 PM"],
      // afternoon: [
      //   "1 PM",
      //   "2 PM",
      //   "3 PM",
      //   "4 PM",
      //   "5 PM",
      //   "6 PM",
      //   "7 PM",
      //   "8 PM",
      // ],
      dialog: false,
<<<<<<< HEAD
      times: []
=======
      times: [],
      status: [],
      // status1: true,
      // index: "",
>>>>>>> b82ea050b653f7cf48a2681437d09d1e11d65dc6
    };
  },
  computed: {
    btnColour() {
<<<<<<< HEAD
      if (this.status === true) {
        return "red";
=======
      console.log("color  = "+this.status[0])
      if (this.status[0] == true) {
        return "red";

>>>>>>> b82ea050b653f7cf48a2681437d09d1e11d65dc6
      } else {
        return "white";
      }
    },
  },
  methods: {
    lastUpdate(data) {
      console.log(data);
      moment.locale("en");
      this.model = moment(data).format("LL");
      this.date = moment(data).format("dddd, MMM D, YYYY");
      console.log(this.date);
    },
    editprofile() {
      console.log("Go to edit profile page");
      this.$router.push({
        name: "profilebarber"
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
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            // console.log(doc.id, " => ", doc.data().firstname);
            this.$store.commit("MAIN", doc.id);
            this.firstname = doc.data().firstname;
            this.lastname = doc.data().lastname;
            this.profilepic = doc.data().profilepic;
            this.location = doc.data().location;
            this.barberid = doc.id;
          });
          this.insertid(this.barberid);
        });
    },

    gettimetable() {
      console.log("getting timetable");
      this.$firestore
        .collection("timetable")
        .where("telno", "==", this.$firebase.auth().currentUser.phoneNumber)
        .get()
<<<<<<< HEAD
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.times = doc.data().info;
            console.log("This is info: ", this.times);
          });

=======
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.times = doc.data().info;
          });
          // console.log("This is info: ", this.times);
          // console.log("This is info: ", this.times.length);
          for (let i = 0; i < this.times.length; i++) {
            this.status.push(this.times[i].status);
          }
          console.log("status is: " + this.status);
>>>>>>> b82ea050b653f7cf48a2681437d09d1e11d65dc6
          // this.insertid(this.barberid);
        });
    },
    insertid(id) {
      console.log("INSERT BARBER ID : " + id + " TO FIREBASE");
      this.$firestore
        .collection("barber")
        .doc(this.barberid)
        .update({
          barberid: this.barberid
        })
        .then(docRef => {})
        .catch(error => {
          console.error("Error adding document: ", error);
        });
    },
    getportfolio() {
      console.log("portfolio");
      this.$firestore
        .collection("portfolio")
        .where("barberid", "==", this.barberid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.photos.push(doc.data().photos[0]);

            this.id.push(doc.id);
          });
        });
      console.log(this.photos);
    },
    addportfolio() {
      console.log("Add portfolio page page");
      this.$router.push({
        name: "portfoliobarber"
      });
    }
  },

  mounted() {
    this.getdata();
    this.getportfolio();
    this.profilepic = this.$firebase.auth().currentUser.profilepic;
    this.firstname = this.$firebase.auth().currentUser.firstname;
    this.telno = this.$store.state.example.telno;
    this.lastUpdate(Date.now());
    this.gettimetable();
<<<<<<< HEAD
  }
=======
    // this.btnColour();
  },
>>>>>>> b82ea050b653f7cf48a2681437d09d1e11d65dc6
};
</script>

<style>
.timebtn{
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px; 
}
.testColor1 {
  background-color: blue;
}
.testColor2 {
  background-color: white;
}
.profilepicture {
  width: 80px;
  height: 80px;
}
.reserve {
  margin-right: 5px;
}
.reservehead {
  padding-top: 10px;
  margin-left: 20px;
  color: black;
}
.edit {
  padding-top: 15px;
}
.portfolio {
  padding-top: 5px;
}
.photos {
  margin-left: 10px;
}
.addbutton {
  text-align: right;
  margin-top: 40px;
}
.header {
  /* padding-top: 30px;
  margin-left: 10px; */
  margin-top: 30px;
  margin-right: 15px;
  margin-left: 15px;
}
.reservecard {
  /* margin-top: 20px; */
  padding-top: 10px;
  margin-right: 15px;
  margin-left: 15px;
}
.text {
  color: black;
}
.whitetext {
  color: black;
}
.username {
  color: black;
  font-size: 100%;
  /* padding-top: 10px; */
}
.textfix {
  color: black;
  font-size: 80%;
  text-align: center;
}
.text-caption {
  color: grey;
}
</style>
