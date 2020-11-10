<template>
  <q-page class="bg-grey-2">
    <q-card
              class="bg-white q-mb-md q-mr-md q-ml-md barbercard col-5"
              v-for="(data, index) in photos"
              :key="index"
            >
              <div class="row start justifly-center">
                <div class="col-6 q-pa-lg">
                  <q-img class="show" :src="data" />
                </div>

                <div class="col-6 q-pt-lg justify-center">
                  <div>
                    <h class="text-weight-bold">Haircut type :</h>&nbsp;&nbsp;{{ haircuttype[index] }}<br />
                  </div>
                  <div>
                    <h class="text-weight-bold">Face type :</h>&nbsp;&nbsp;{{facetype[index]}}<br />
                  </div>
                  <div>
                    <h class="text-weight-bold">Price :</h>&nbsp;&nbsp;{{price[index]}}<br />
                  </div>
                  <div>
                    <h class="text-weight-bold">Tag :</h>&nbsp;&nbsp;{{tag[index]}}<br />
                  </div>
                </div>
              </div>
            </q-card>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="add" color="black" @click="add" />
          </q-page-sticky>
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
      photos: [],
      haircuttype: [],
      facetype: [],
      price: [],
      tag: [],
    };
  },
  methods: {
    getdata() {
      this.$firestore
        .collection("barber")
        .where("telno", "==", this.$firebase.auth().currentUser.phoneNumber)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.barberid = doc.id;
            // this.telno = doc.data().telno;
          });
          console.log("This is : ", this.barberid, " using");
        })
        .then(() => {
          console.log(
            "Current user is : ",
            this.$firebase.auth().currentUser.phoneNumber
          );
          console.log("Getting portfolio");
          this.$firestore
            .collection("portfolio")
            .where("barberid", "==", this.barberid)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                // console.log("=>>>>", doc.data());
                this.photos.push(doc.data().photos[0]);
                this.haircuttype.push(doc.data().haircuttype);
                this.facetype.push(doc.data().facetype);
                this.price.push(doc.data().price);
                this.tag.push(doc.data().tag);
              });
            });
          console.log("Photo url : ", this.photos);
          console.log("Haircut type : ", this.haircuttype);
        });
    },
    add(){
      console.log("Add portfolio");
      this.$router.push({
        name: "addportfoliobarber",
      });
    }
  },
  mounted() {
    this.getdata();
  },
};
</script>

<style>
</style>