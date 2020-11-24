<template>
  <q-page class="bg-dark">
    <q-toolbar class="bg-dark justify-center text-white bar q-pa-md ">
      <div>Upcoming Event</div>
    </q-toolbar>
      <q-card
      class="bg-white  q-mx-md  barbercard col-5 q-ma-md"
      v-for="(data, index) in BarberFname"
      :key="index"
    >
      <div class="row start justifly-center">

        <div class="col-12 q-pa-md ">
          <div>
            <h class="text-weight-bold">Barber :</h>&nbsp;{{data }} &nbsp;{{ BarberLname[index]}} <br />
          </div>
          <div>
            <h class="text-weight-bold">Location :</h>&nbsp;&nbsp;{{
              location[index]
            }}<br />
          </div>
          <div>
            <h class="text-weight-bold">Price :</h>&nbsp;&nbsp;{{ price[index]
            }}<br />
          </div>
          <div>
            <h class="text-weight-bold">time :</h>&nbsp;&nbsp;{{ time[index]}}, {{ date[index]}}<br />
          </div>
        </div>
        
      </div>
    </q-card>
    
  <tool/>
  </q-page>
</template>

<script>
import tool from "components/tool.vue";
export default {
     components: {
    tool
  },data (){
    return {
      
      BarberFname: [],
      BarberLname: [],
      haircuttype: [],
      price: [],
      date: [],
      time: [],
      location: [],

    };
  },
  methods: {
      getdata() {
    // console.log("this is", this.$firebase.auth().currentUser.email);
      this.$firestore
        .collection("reservation")
        .where("cmail", "==", this.$firebase.auth().currentUser.email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            
            this.BarberFname.push(doc.data().barberF);
            this.BarberLname.push(doc.data().barberL);
            this.haircuttype.push(doc.data().haircutName);
            this.price.push(doc.data().price);
            this.date.push(doc.data().date);
            this.time.push(doc.data().time);
            this.location.push(doc.data().location);
          });
        
        })
    },
    
  },
  mounted() {
   this.getdata();
  }
}
</script>

<style>
.bar{
  font-size: 18px;
}
</style>