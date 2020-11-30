<template>
  <q-page class="bg-white">
    <q-card class="bg-grey-2 row header bg-white q-mt-md">
      <div avatar class="col-3 q-mt-md q-mb-md q-mr-md q-ml-md">
        <q-avatar class="profilepicture">
          <img :src="profilepic" />
        </q-avatar>
      </div>

      <div class="col-6 q-mt-md q-mr-md q-ml-md">
        <div class="row text-weight-bold username" style="font-size: 1rem">
          {{ firstname }} {{ lastname }} 
        </div><br>
        <div class="row text-caption text-weight-thin">
          <q-icon name="location_on" />{{ location }}
          
        </div>
      </div>
    </q-card>
    <q-card class="bg-grey-2 reservecard q-mt-md">
      <div class="text row">Select Your Operation Day</div>
      <q-input v-model="startdate" filled type="date" hint="Start date" />
      <q-input v-model="enddate" filled type="date" hint="End date" />
      <div class="row justify-center q-pa-md">
        <q-date v-model="dayoff" multiple></q-date>
      </div>

      <div class="text row">Select Your Operation Time</div>
      <q-card>
        <q-card-section class="row items-center">
          <q-checkbox v-model="AM9" label="9AM" />
          <q-checkbox v-model="AM10" label="10AM" />
          <q-checkbox v-model="AM11" label="11AM" />
          <q-checkbox v-model="PM12" label="12PM" />
          <q-checkbox v-model="PM1" label="1PM" />
          <q-checkbox v-model="PM2" label="2PM" />
          <q-checkbox v-model="PM3" label="3PM" />
          <q-checkbox v-model="PM4" label="4PM" />
          <q-checkbox v-model="PM5" label="5PM" />
          <q-checkbox v-model="PM6" label="6PM" />
          <q-checkbox v-model="PM7" label="7PM" />
          <q-checkbox v-model="PM8" label="8PM" />
          <q-checkbox v-model="PM9" label="9PM" />
        </q-card-section>
      </q-card>
      <div class="row justify-center">
        <q-btn
          flat
          label="Save"
          color="primary"
          v-close-popup
          @click="saveoperation"
        />
      </div>
    </q-card>
    <BarberNavbar />
  </q-page>
</template>

<script>
import moment from "moment";
import BarberNavbar from "components/BarberNavbar.vue";
export default {
  components: {
    BarberNavbar,
  },
  data() {
    return {
      startdate: "",
      enddate: "",
      firstname: "",
      lastname: "",
      profilepic: "",
      telno: "",
      barberid: "",
      location: "",
      dayoff: null,
      AM9: false,
      AM10: false,
      AM11: false,
      PM12: false,
      PM1: false,
      PM2: false,
      PM3: false,
      PM4: false,
      PM5: false,
      PM6: false,
      PM7: false,
      PM8: false,
      PM9: false,
      operationperiod: [],
      operationtime: [],
    };
  },
  computed: {},
  methods: {
    optionFn(dayoff) {
      return dayoff >= this.startdate && dayoff <= this.enddate;
    },
    editprofile() {
      console.log("Go to edit profile page");
      this.$router.push({
        name: "profilebarber",
      });
    },
    getdata() {
      console.log(
        "Current user is : ",
        this.$firebase.auth().currentUser.phoneNumber
      );
      this.$firestore
        .collection("barber")
        .where("telno", "==", this.$firebase.auth().currentUser.phoneNumber)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.$store.commit("MAIN", doc.id);
            this.$store.commit("MAIN",doc.data().firstname);
            this.firstname = doc.data().firstname;
            this.lastname = doc.data().lastname;
            this.profilepic = doc.data().profilepic;
            this.location = doc.data().location;
            this.barberid = doc.id;
            this.dayoff = doc.data().dayoff;
            this.AM9 = doc.data().operationtime[0];
            this.AM10 = doc.data().operationtime[1];
            this.AM11 = doc.data().operationtime[2];
            this.AM12 = doc.data().operationtime[3];
            this.PM1 = doc.data().operationtime[4];
            this.PM2 = doc.data().operationtime[5];
            this.PM3 = doc.data().operationtime[6];
            this.PM4 = doc.data().operationtime[7];
            this.PM5 = doc.data().operationtime[8];
            this.PM6 = doc.data().operationtime[9];
            this.PM7 = doc.data().operationtime[10];
            this.PM8 = doc.data().operationtime[11];
            this.PM9 = doc.data().operationtime[12];
            this.startdate = doc.data().operationperiod[0];
            this.enddate = doc.data().operationperiod[1];
          });
          // this.insertid(this.barberid);
        });
    },
    // insertid(barberid) {
    //   console.log("INSERT BARBER ID : " + barberid + " TO FIREBASE");
    //   this.$firestore
    //     .collection("barber")
    //     .doc(this.barberid)
    //     .update({
    //       barberid: this.barberid,
    //     })
    //     .then((docRef) => {})
    //     .catch((error) => {
    //       console.error("Error adding document: ", error);
    //     });
    // },
    getportfolio() {},
    addportfolio() {
      console.log("Add portfolio page page");
      this.$router.push({
        name: "addportfoliobarber",
      });
    },
    saveoperation() {
      console.log("save day off");
      console.log(this.dayoff);
      console.log("save operation time");
      console.log(
        this.AM9,
        this.AM10,
        this.AM11,
        this.AM12,
        this.PM1,
        this.PM2,
        this.PM3,
        this.PM4,
        this.PM5,
        this.PM6,
        this.PM7,
        this.PM8,
        this.PM9
      );
      console.log("Operation period:", this.startdate, "until", this.enddate);
      this.operationtime = [];
      this.operationtime.push(
        this.AM9,
        this.AM10,
        this.AM11,
        this.PM12,
        this.PM1,
        this.PM2,
        this.PM3,
        this.PM4,
        this.PM5,
        this.PM6,
        this.PM7,
        this.PM8,
        this.PM9
      );
      this.operationperiod = [];
      this.operationperiod.push(this.startdate, this.enddate);
      this.$firestore
      .collection("barber")
      .doc(this.barberid)
      .update({
        dayoff: this.dayoff,
        operationtime: this.operationtime,
        operationperiod: this.operationperiod,
      });
      
      let splitstartdate = this.startdate.split("/");
      let splitenddate = this.enddate.split("/");
      let splitstartdate2 = splitstartdate[0].split("-");
      let splitenddate2 = splitenddate[0].split("-");
      
      console.log("Split start date", splitstartdate2);
      console.log("Split end date", splitenddate2);
      let x = 0;
      for (let i = splitstartdate2[2]; i< splitenddate2[2]; i++){
        x++
        
        let now  = moment(this.startdate)
         .add(x, "day")
         .format("YYYY/MM/DD")
         console.log("Now", now);
         this.$firestore
         .collection("Timetable")
         .add({
           barberF: this.firstname,
           Date: now,
           Time: this.operationtime,
         })
      }
    },
  },
  mounted() {
    this.getdata();
    this.getportfolio();
    this.profilepic = this.$firebase.auth().currentUser.profilepic;
    this.firstname = this.$firebase.auth().currentUser.firstname;
    this.telno = this.$store.state.example.telno;
  },
};
</script>

<style>
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
  padding-left: 15px;
  padding-bottom: 5px;
}
.whitetext {
  color: black;
}
.bluetext {
  color: blue;
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