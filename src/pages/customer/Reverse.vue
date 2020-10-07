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
    <q-item class="row header">
      <q-item-section avatar class="col-3">
        <q-avatar class="profilepicture">
          <img src="" />
        </q-avatar>
      </q-item-section>

      <q-item-section class="col-7">
        <div class="col-6 text-h6 text-weight-bold username">
          <!-- {{ firstname }} -->
        </div>
        <!-- <q-item-label class="row" caption>฿400</q-item-label> -->
      </q-item-section>
    </q-item>
    

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
    <q-btn unelevated rounded color="dark" @click="selecttime" label="Select section"></q-btn>
  </div>
  </q-page>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      model: "",
      model1: ""
    };
  },
  mounted() {
    this.lastUpdate(Date.now());
  },
  methods: {
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
    selecttime() {
      this.$router.push({
        name: "TimereserveCustomer"
      });
    }
  }
};
</script>

<style></style>