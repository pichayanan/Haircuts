<template>
  <q-page class="bg-grey-2">
    <q-toolbar class="bg-white justify-center text-black bar q-pa-md q-mb-md ">
      <div>Upcoming Event</div>
    </q-toolbar>
    <q-card
      class="bg-white q-mb-md q-mr-md q-ml-md barbercard col-5"
      v-for="(data, index) in reservationid"
      :key="index"
    >
      <div class="row start justifly-center">

        <div class="col-8 q-pa-md ">
          <div>
            <h class="text-weight-bold">Customer :</h>&nbsp;&nbsp;{{
              customername[index]
            }}<br />
          </div>
          <div>
            <h class="text-weight-bold">Haircut type :</h>&nbsp;&nbsp;{{
              haircuttype[index]
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
              <q-btn rounded color="primary" label="Complete"  class="q-mt-md completebtn" @click="complete(data)"/>
              <q-btn rounded color="red" label="Cancel" class="q-mt-md cancelbtn" @click="cancelcustomerbtn(data)" />
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
    <BarberNavbar />
  </q-page>
</template>

<script>
import BarberNavbar from "components/BarberNavbar.vue";
export default {
  components: {
    BarberNavbar,
  },
  data() {
    return {
      barberid: "",
      customername: [],
      haircuttype: [],
      price: [],
      date: [],
      time: [],
      customerprofilepic: [],
      reservationid: [],
      selectedreservation: "",
      cancelcustomer: false,
    };
  },
  methods: {
    getdata() {
      this.reservationid = [];
      this.customername= [];
      this.haircuttype= [];
      this.price= [];
      this.date= [];
      this.time= [];
      this.customerprofilepic= [];
      this.reservationid= [];
      // console.log("This is : ", this.$firebase.auth().currentUser.phoneNumber, " using");
      this.$firestore
        .collection("reservation")
        .where("phone", "==", this.$firebase.auth().currentUser.phoneNumber )
        .where("complete","==", false)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.reservationid.push(doc.id);
            this.customername.push(doc.data().customerName);
            this.haircuttype.push(doc.data().haircutName);
            this.price.push(doc.data().price);
            this.date.push(doc.data().date);
            this.time.push(doc.data().time);
          // console.log(doc.data().customerName);
          });
          // console.log(this.reservationid);
          
        })

    },
    getbarber() {
      this.$firestore
        .collection("reservation")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.barberid = doc.id;
          });
          // console.log("This is : ", this.barberid, " using");
        });
    },
    getcustomer() {
      this.$firestore
        .collection("customer")
        .where("CName", "==", this.customername)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.customerprofilepic.push(doc.data().URL)
          });
        });
    },
    complete(selecedid){
      console.log(selecedid)
       this.$firestore.collection("reservation")
        .doc(selecedid)
        .update({
        complete: true,
        })
        .then(()=> {
             console.log("Update completed");
             this.getdata();
        });
        
        
    },
     cancelcustomerbtn(selecedid){
      console.log(selecedid);
      this.cancelcustomer = true;
      this.selectedreservation = selecedid;
      // console.log(this.selectedcustomer, "HAHAHA");
    },
    confirmcancel(){
      console.log("You want to cancel ",this.selectedreservation)
       this.$firestore.collection("reservation")
        .doc(this.selectedreservation)
        .delete()
        .then(()=> {
            console.log("Document successfully deleted!");
            this.getdata();
          }).catch(function(error) {
            console.error("Error removing document: ", error);
          });          
        
    }
  },
    mounted() {
    this.getbarber();
    this.getdata();
     }
}
  
</script>

<style>
.cancelbtn{
  width: 90%;
}
.completebtn{
  width: 90%;
}
</style>