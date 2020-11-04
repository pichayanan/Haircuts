<template>
  <q-page class="bg-dark">
    <q-toolbar class="bg-dark text-white">
      <q-btn flat round dense icon="keyboard_backspace" @click="back">
        <!-- <q-badge floating color="red">2</q-badge> -->
      </q-btn>
      
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
          <!-- <br /> -->
          <br />
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
    <tool />
  </q-page>
</template>

<script>
import tool from "components/tool.vue";
export default {
  components: {
    tool
  },
  data() {
    return {
      date: "2020/09/04",
     
       dialog: false,
      times: [],
      status: [],
    
    };
  },
  computed: {
    btnColour() {
      console.log("color  = "+this.status[0])
      if (this.status[0] == true) {
        return "red";

      } else {
        return "white";
      }
    },
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
    gettimetable() {
      console.log("getting timetable");
      this.$firestore
        .collection("timetable")
        .where("telno", "==", "+66123456789")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.times = doc.data().info;
          });
          
          
        });
    },
    getdata() {
      console.log("getting timetable");
      this.$firestore
        .collection("timetable")
        .where("telno", "==", this.$firebase.auth().currentUser.phoneNumber)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            
            this.times = doc.data().info;
            console.log(this.times);
            
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