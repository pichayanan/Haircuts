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
    <!-- --------------Header--------------- -->
    <q-card class="bg-white blackcard">
      <div class="row">
      <div class=" col-5 start justifly-center">
        
          <q-img class="show" :src="this.$store.state.customertest.bpic" />
        </div>

        <!-- <q-card class="text-h7 bg-grey-3 detailcard"> -->

        <div class="col-5 q-pt-md justify-center">
          <h class="text-weight-bold">Artist </h>
          <br />
          &nbsp;&nbsp;{{ this.$store.state.customertest.bname }} {{ this.$store.state.customertest.lname }}
          <br />
          <h class="text-weight-bold ">place </h>
          <br />
          &nbsp;&nbsp;{{ this.$store.state.customertest.location }}
        </div>
        </div>
      <!-- <q-card class="bg-dark"> -->
      <div class="reserve row justify-start">
        <div class="q-pa-md q-gutter-sm">
          <u class="text">MORNING</u>
          <!-- <br /> -->
          <br />
          <div class="row">
            <q-btn
              v-for="(data, index) in times"
              :key="index"
              color="white"
              text-color="black"
              :label="data.time"
              @click="dialog = true"
            />
          </div>
          <br />
          <br />
        </div>
      </div>
    </q-card>
    <div class="haircut row">
      <div class="text-h6 col-5 text-center"><h5 class="whitetext">HAIRCUTS</h5>
        <!-- <br />HAIRCUTS -->
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      date: "2020/09/04",
      times: [],
    
    };
  },
  methods: {
    editprofile(){
      console.log("Edit profile")
       this.$router.push({
            name: "profilebarber",
          });
    },
    back(){
      this.$router.push({
            name: "ReserveCustomer"
          });
    },
    getdata() {
      console.log("getting timetable");
      this.$firestore
        .collection("timetable")
        .where("telno", "==", this.$firebase.auth().currentUser.phoneNumber)
        .get()
<<<<<<< HEAD
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().firstname);
            this.firstname = doc.data().firstname;
            console.log(doc.id, " => ", doc.data().profilepic);
            this.profilepic = doc.data().profilepic;
            // this.lastname = doc.data().lastname;
=======
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            
            this.times = doc.data().info;
            console.log(this.times);
            
>>>>>>> customer
          });
          // this.insertid(this.barberid);
        });

        // this.$firestore
        // .collection("timetable")
        // .where("info", test, "010")
        // .orderBy("info", "asc")
        // .get()
        // .then((querySnapshot) => {
        //   querySnapshot.forEach((doc) => {
            
        //     this.times = doc.data().info;
          
        //   });
        // });


    },
  },
  mounted() {
     this.getdata();
<<<<<<< HEAD
     this.firstname = this.$firebase.auth().currentUser.firstname;
     this.profilepic = this.$firebase.auth().currentUser.profilepic;
=======

>>>>>>> customer
  },
};
</script>

<style>
.profilepicture {
  width: 70px;
  height: 70px;
}
.reserve {
  /* padding-left: 20px; */
  padding-right: 5px;
}
.reservehead {
  padding-top: 10px;
  padding-left: 20px;
  color: black;
}
.portfolio {
  padding-top: 5px;
}
.photos {
  margin-left: 10px;
}
.blackcard {
  margin-top: 10%;
  margin-right: 15px;
  margin-left: 15px;
  padding-top: 8%;
  padding-left: 3%;
}
.text {
  color: black;
}
.whitetext {
  color: white;
}
</style>