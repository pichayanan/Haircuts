<template>
  <q-page class="bg-grey-2">
    {{ model }}
    <q-toolbar class="bg-grey-2 text-dark">
      <q-btn flat round dense icon="keyboard_backspace" @click="back" />
     
    </q-toolbar>

    <q-card class="bg-grey-2 q-pa-sm q-ma-sm row col-11 ">
      <div class=" col-5 start justifly-center">
        <q-img class="show" :src="this.$store.state.customertest.bpic" />
      </div>

      <!-- <q-card class="text-h7 bg-grey-3 detailcard"> -->

      <div class="col-5 q-pt-md justify-center">
        <h class="text-weight-bold">Artist </h>
        <br />
        &nbsp;&nbsp;{{ this.$store.state.customertest.bname }}
        {{ this.$store.state.customertest.lname }}
        <br />
        <h class="text-weight-bold ">place </h>
        <br />
        &nbsp;&nbsp;{{ this.$store.state.customertest.location }}
      </div>

      <!-- </q-card> -->
    </q-card>

    <!-- test -->
    <div class="q-pa-xl justify-center">
      <!-- <div class="q-pa-xl justify-center">
        <q-badge color="teal"> Model: {{ model1 }} </q-badge> 
      </div> 
     <div class="q-pb-sm">
        <q-badge color="purple" text-color="white">
          Mask: dddd, MMM D, YYYY
        </q-badge>
       </div>  -->

      <q-date
        color="dark"
        text-color="white"
        v-model="parts"
        :events="testoper"
        mask="dddd, MMM D, YYYY"
        @click="lastUpdate(model1)"
      ></q-date>
    </div>
    <div class="row justify-center">
      <q-btn
        unelevated
        rounded
        color="dark"
        @click="selecttime(model1)"
        label="Select section"
      ></q-btn>
    </div>
    <tool />
  </q-page>
</template>

<script>
import tool from "components/tool.vue";
import moment from "moment";
export default {
  components: {
    tool
  },
  data() {
    return {
      model: "",
      model1: "",
      Fnameb: "",
      Lnameb: "",
      location: "",
      propic: "",
      // options: ["sunday"],
      operationday: "",
      parts: [
        "2020/10/01",
        "2020/10/05",
        "2020/10/06",
        "2020/10/09",
        "2020/10/23"
      ]
    };
  },
  methods: {
    getdata() {
      let Bid = "";
      console.log("show :", this.$store.state.customertest.bname);
      this.$firestore
        .collection("barber")
        .where("firstname", "==", this.$store.state.customertest.bname)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            Bid = doc.data().barberid;
            this.Fnameb = doc.data().firstname;
            console.log(this.Fnameb);
            this.Lnameb = doc.data().lastname;
            console.log(this.Lnameb);
            this.location = doc.data().location;
            this.propic = doc.data().profilepic;
            this.operationday = doc.data().operationday;
            console.log(this.operationday);
            // this.testoper();
          });
        });
    },
    testoper(date) {
      let day = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
      ];
      for (let i = 0; i < this.operationday.length; i++) {
        // console.log("pppp: ", this.model1);
        if (this.operationday[i] === true) {
          // console.log("ooop");
        } else {
          let parts = "";
          for (let x = 1; x <= 31; x++) {
            // console.log(x);
            if (x < 10) {
              parts += `2020/01/0${x}_`;
            } else {
              parts += `2020/01/${x}_`;
            }
          }
          let test1 = parts.split("_");
          // console.log(test1.length);
          for (let x = 0; x < test1.length; x++) {
            let test2 = test1[x].split("/");
            // console.log(test2);
          }
          return day[2] != "20";
          // this.parts = this.model1.split("/");
          // console.log(this.parts[0]);
          // return this.parts;
          // return this.parts === day[i];
          // console.log("pppppp");
        }
      }
    },
    lastUpdate(data) {
      console.log(data);
      moment.locale("en");
      // this.model = moment(data).format("LL");
      this.model1 = moment(data).format("LLLL");
      console.log(this.model1);
      let test = this.model1.split(",");
      console.log("testtt: ", test[0]);
    },
    back() {
      this.$router.push({
        name: "DetailsCustomer"
      });
    },
    selecttime(model1) {
      this.$store.commit("creserve", model1);
    }
  },
  mounted() {
    this.lastUpdate(Date.now());
    this.getdata();
  }
};
</script>

<style>
.show {
  height: 100px;
  width: 100px;
  margin-left: 5%;
}
</style>