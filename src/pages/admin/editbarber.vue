<template>
  <q-page class="bg-black">
    <AdminHeader />

    <q-card class="bg-white card q-ma-xl">
      <div class="row justify-center">
        <div class="col-4">
          <div class="row">
            <q-item-section avatar class>
              <q-avatar class="profilepic row text-center">
                <img :src="barberprofilepic" />
              </q-avatar>
              <u class="row description" caption>Barber</u>
            </q-item-section>
          </div>
        </div>
        <div class="col-8">
            <div class="row justify-center q-gutter-xl form" style="full-width">
            <q-input  v-model="barberfirstname" label="Firstname *"></q-input>
            <q-input  v-model="barberlastname" label="Lastname *"></q-input>
            <q-input  v-model="barbertelno" disable label="Mobile"></q-input>
            <q-input  v-model="location" label="Location"></q-input>
            </div>
            <div class="row justify-center q-pt-xl">
              <q-toggle v-model="registed" label="Approve" />
            </div>
            

        </div>
      </div>
    </q-card>
    <div class="row justify-center q-mt-md q-gutter-md">
                <q-btn color="red" label="Back" @click="cancel" />
                <q-btn color="primary" label="Save" @click="editbarber" />
            </div>
    </q-page>
</template>

<script>
import AdminHeader from "components/AdminHeader.vue";

export default {
  components: {
    AdminHeader,
  },
  data() {
    return {
      //   show: [],
      //   tab: "barber",
      //   slide: 1,
      //   autoplay: true,
      //   logo: "",
      barberfirstname: "",
      barberlastname: "",
      barbertelno: "",
      barberprofilepic: "",
      barberid: "",
      location: "",
      registed: false,
    };
  },
  methods: {
    getlogo() {
      console.log("logo");
      this.$firestore
        .collection("logo")
        .where("name", "==", "logo-text-white")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().logoblack);
            this.logo = doc.data().logo;
          });
        });
    },
    getbarber() {
      this.$firestore
        .collection("barber")
        .where("telno", "==", this.$store.state.example.telnoA)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.barberprofilepic = doc.data().profilepic;
            this.barberfirstname = doc.data().firstname;
            this.barberlastname = doc.data().lastname;
            this.barbertelno = doc.data().telno;
            this.location = doc.data().location;
            this.barberid = doc.id;
            this.registed = doc.data().registed;
          });
        });
    },
    cancel() {
      console.log("Cancel");
      this.$router.push({
        name: "mainadmin",
      });
    },
    editbarber(){
        this.$firestore.collection("barber")
        .doc(this.barberid)
        .update({
        firstname: this.barberfirstname,
        lastname: this.barberlastname,
        telno: this.barbertelno,
        location: this.location,
        registed: this.registed,
      });
        console.log("Data save");
    }
  },
  mounted() {
    this.getlogo();
    this.getbarber();
  },
};
</script>

<style>
.profilepic {
  margin-top: 80px;
  margin-left: 120px;
  /* margin-bottom: 10px; */
  width: 200px;
  height: 200px;
}
.description{
    margin-top: 20px;
    margin-left: 190px;
    margin-bottom: 100px;
}
.form{
    margin-top: 150px;
    /* margin-bottom: 30px; */
}
</style>