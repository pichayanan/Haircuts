<template>
  <q-page class="bg-grey-2">
    <q-card
      class="bg-white q-mb-md q-mr-md q-ml-md barbercard col-5"
      v-for="(data, index) in customername"
      :key="index"
    >
      <div class="row start justifly-center">

        <div class="col-9 q-pa-md ">
          <div>
            <h class="text-weight-bold">Customer :</h>&nbsp;&nbsp;{{
              data
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
        <div class="col-3 q-pt-xl">
              <q-btn rounded color="primary" label="Confirm" />
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
    };
  },
  methods: {
    getdata() {
      this.$firestore
        .collection("reservation")
        .where("telno", "==", this.$firebase.auth().currentUser.phoneNumber)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.barberid = doc.id;
            this.customername.push(doc.data().customerName);
            this.haircuttype.push(doc.data().haircutName);
            this.price.push(doc.data().price);
            this.date.push(doc.data().date);
            this.time.push(doc.data().time);
          });
          console.log("This is : ", this.barberid, " using");
        })
    }
  },
    mounted() {
    this.getdata();
     }

}
  
</script>

<style>
</style>