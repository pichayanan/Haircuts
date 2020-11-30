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

        <div class="col-7 q-pa-md ">
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
        <div class="col-4 q-py-md">
              <q-btn rounded color="red" label="Cancel" class="q-mt-md cancelbtn" @click="cancelcustomerbtn(index)" />
              <q-dialog v-model="cancelcustomer" persistent>
                      <q-card>
                        <q-card-section class="row items-center">
                          <q-avatar
                            icon="warning"
                            color="red"
                            text-color="white"
                          />
                          <span class="q-ml-sm"
                            >You are cancelling this reservation</span
                          >
                        </q-card-section>

                        <q-card-actions align="right">
                          <q-btn
                            flat
                            label="Cancel"
                            color="black"
                            v-close-popup
                          />
                          <q-btn
                            flat
                            label="Confirm"
                            color="red"
                            v-close-popup
                            @click="confirmcancel"
                          />
                        </q-card-actions>
                      </q-card>
              </q-dialog>
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
      reservationid: [],
      BarberFname: [],
      BarberLname: [],
      haircuttype: [],
      price: [],
      date: [],
      time: [],
      location: [],
      selectedreservation: "",
      cancelcustomer: false,

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
            this.reservationid.push(doc.id);
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
    cancelcustomerbtn(index){
      console.log(index);
      this.cancelcustomer = true;
      this.selectedreservation = this.reservationid[index]
      // console.log(this.selectedcustomer, "HAHAHA");



    },
    confirmcancel(){
      console.log("You want to cancel ",this.selectedreservation)
       this.$firestore.collection("reservation")
        .doc(this.selectedreservation)
        .delete()
        .then(function() {
            console.log("Document successfully deleted!");
          }).catch(function(error) {
            console.error("Error removing document: ", error);
          });

          
        
    }
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