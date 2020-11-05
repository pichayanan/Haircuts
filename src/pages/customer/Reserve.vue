<template>
  <q-page class="bg-grey-2">
    {{ model }}
    <q-toolbar class="bg-grey-2 text-dark">
      <q-btn flat round dense icon="keyboard_backspace" @click="back">
        <!-- <q-badge floating color="red">2</q-badge> -->
      </q-btn>
      <q-toolbar-title>
        BACK
      </q-toolbar-title>
    </q-toolbar>
    
     <q-card class="bg-grey-2 q-pa-sm q-ma-sm row col-11 ">
      <div class=" col-5 start justifly-center">
        
          <q-img class="show" :src="propic" />
        </div>

        <!-- <q-card class="text-h7 bg-grey-3 detailcard"> -->

        <div class="col-5 q-pt-md justify-center">
          <h class="text-weight-bold">Artist </h>
          <br />
          &nbsp;&nbsp;{{ Fnameb }} {{ Lnameb }}
          <br />
          <h class="text-weight-bold ">place </h>
          <br />
          &nbsp;&nbsp;{{ location }}
        </div>

        <!-- </q-card> -->
      
    </q-card>
      

    

    <!-- test -->
    <div class="q-pa-xl justify-center" >
      <!-- <div class="q-pa-xl justify-center">
        <q-badge color="teal"> Model: {{ model1 }} </q-badge> 
      </div> 
     <div class="q-pb-sm">
        <q-badge color="purple" text-color="white">
          Mask: dddd, MMM D, YYYY
        </q-badge>
       </div>  -->

      <q-date color="dark" text-color="white" v-model="model1" mask="dddd, MMM D, YYYY"></q-date>
    </div>
    <div class="row justify-center">
    <q-btn unelevated rounded color="dark" @click="selecttime(model1)" label="Select section"></q-btn>
  </div>
  </q-page>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      model: "",
      model1: "",
      Name: "",
      Fnameb: "",
      Lnameb: "",
      location: "",
      propic: "",
      
    };
  },
 
  methods: {
    getdata(){
      let Bid = "";
      console.log("show :",this.$store.state.customertest.bname)
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
              });
            })
            .then(() => {
              this.$firestore
              .collection("portfolio")
              .where("barberid", "==", Bid)
              .get()
              .then(querySnapshot => {
                console.log(doc.id, " => ", doc.data());
                this.Name = doc.data().haircutname;
              })
            });
    },
    lastUpdate(data) {
      console.log(data);
      moment.locale("en");
      // this.model = moment(data).format("LL");
      this.model1 = moment(data).format("dddd, MMM D, YYYY");
      console.log(this.model1);
    },
    back(){
      this.$router.push({
            name: "DetailsCustomer",
          });
    },
    selecttime(model1) {
      this.$store.commit("creserve", model1);
    }
  },
   mounted() {
    this.lastUpdate(Date.now());
    this.getdata();
  },
};
</script>

<style>
.show {
  height: 100px;
  width: 100px;
  margin-left: 5%;
}</style>