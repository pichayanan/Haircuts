<template>
  <q-page class="bg-grey-3">
    <q-toolbar class="bg-grey-3 text-dark">
      <q-btn flat round dense icon="keyboard_backspace" @click="back" />
    </q-toolbar>

    <q-card class="bg-grey-2 q-pa-sm q-ma-sm row col-11 ">
      <div class=" col-5 start justifly-center">
        <q-img class="show" :src="this.$store.state.customertest.bpic" />
      </div>

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
    <div class="row q-pa-md justify-center">
      <q-date
        v-model="model"
        color="dark"
        text-color="white"
        :options="optionsFn"
        :events="eventsFn"
        :event-color="'orange'"
      ></q-date>
    </div>
    <div class=" q-px-lg q-py-md">
      <q-btn color="orange" round size="xs"> </q-btn>
      <h8>&nbsp; Closed days</h8>
    </div>

    <div class="row justify-center">
      <q-btn
        unelevated
        rounded
        color="dark"
        @click="selecttime(model)"
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
      date: "",
      model: "",
      model1: "",
      Fnameb: "",
      Lnameb: "",
      location: "",
      propic: "",
      startdate: "",
      enddate: "",
      operationday: "",
      parts: {},
      dayy: ""
    };
  },
  methods: {
    optionsFn(model) {
      return model >= this.startdate && model <= this.enddate;
    },
    async getdata() {
      let Bid = "";
      let sdate;
      let edate;
      // console.log("show :", this.$store.state.customertest.bname);
      let querySnapshot = await this.$firestore
        .collection("barber")
        .where("firstname", "==", this.$store.state.customertest.bname)
        .get();

      querySnapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
        Bid = doc.data().barberid;
        this.Fnameb = doc.data().firstname;
        this.Lnameb = doc.data().lastname;
        this.location = doc.data().location;
        this.propic = doc.data().profilepic;
        this.operationday = doc.data().dayoff;
        sdate = doc.data().operationperiod[0];
        edate = doc.data().operationperiod[1];
        this.operationtime = doc.data().operationtime;
      });
      let sdate1 = sdate.split("-");

      this.startdate = sdate1[0] + "/" + sdate1[1] + "/" + sdate1[2];
      let edate1 = edate.split("-");
      this.enddate = edate1[0] + "/" + edate1[1] + "/" + edate1[2];
      console.log("++++++++", sdate1[2]);
      console.log("++++++++", edate1[2]);
      // console.log("++++++++", this.enddate);
    //  -------------------------------------------------------
    //  let x = 0;

    //   for (let i = sdate1[2]; i < edate1[2]; i++) {
    //     x++;

    //     let now = moment(this.startdate)
    //       .add(x, "day")
    //       .format("YYYY/MM/DD");
    //     console.log("-------------", now);
    //     this.operationtime 
    //     console.log(this.operationtime);
    //      this.$firestore
    //     .collection("Timetable")
    //     .add({
    //       barberF: this.$store.state.customertest.bname,
    //       Date:now,
    //       Time:this.operationtime,
    //     })
    //   }
      // ------------------------------------------------------
    },
    lastUpdate(data) {
      moment.locale("en");
      this.model = moment(data).format("YYYY,MM,DD");

      this.model1 = this.model;

      let tt1 = moment(this.model).format("LLLL");

      let test = this.model.split(",");
      console.log("testtt: ", test); // wednesday
      this.dayy = test[0] + "/" + test[1] + "/" + test[2];
    },
    eventsFn(model) {
      for (let i = 0; i < this.operationday.length; i++) {
        if (model === this.operationday[i]) {
          return true;
        }
      }
    },
    back() {
      this.$router.push({
        name: "DetailsCustomer"
      });
    },

    selecttime(date) {
      let check = this.test(date);
      if (check === true) {
        this.$q.notify({
          position: "top",
          message: "Our barber is not available. Please select another!",
          color: "warning"
        });
      } else {
        this.$store.commit("creserve", date);
      }
    },
    test(date) {
      for (let i = 0; i < this.operationday.length; i++) {
        if (date == this.operationday[i]) {
          let check = true;
          return check;
        } else {
          let check = false;
        }
      }
    }
  },
  mounted() {
    this.lastUpdate(Date.now());
    this.getdata();
    this.gendate();
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