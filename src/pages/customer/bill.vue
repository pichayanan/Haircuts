<template>
  <q-page class="bg-dark">
    <q-toolbar class="bg-dark text-white justify-center text q-pt-md">
      RESERVATION DETAILS
    </q-toolbar>

    <q-card class="bg-white billcard">
      <q-icon
        class="absolute all-pointer-events"
        size="34px"
        name="cancel"
        color="warning"
        style="top: -8px; right: -6px"
        @click="billBack"
      >
      </q-icon>
      <div class="row justify-center ">
        <q-img class="billpic" :src="logo" :ratio="1" />
      </div>
      <div class="row  q-pt-lg justify-center">
        <div>
          <h
            >Date and time :&nbsp;
            {{ this.$store.state.customertest.cselect }} &nbsp;
            {{ this.$store.state.customertest.selectT }}
          </h>
        </div>
      </div>
      <div class="row justify-center">
        ------------------------------------------------------------------
      </div>
      <div class="row justify-center">
        <h>BARBER INFO</h>
      </div>
      <div class="q-py-sm btext ">
        <div class="row">
          <h
            >Barber name :&nbsp;
            {{ this.$store.state.customertest.bname }} &nbsp;
            {{ this.$store.state.customertest.lname }}</h
          >
        </div>
        <div class="row">
          <h>Location :&nbsp; {{ this.$store.state.customertest.location }} </h>
        </div>
        <br>
        <div class="row">
          <h>Contact :&nbsp; {{ this.$store.state.customertest.telno }} </h>
        </div>
      </div>
      <div class="row justify-center q-py-sm">
        <h>CUSTOMER INFO</h>
      </div>
      <div class="row q-py-sm ctext ">
        <div class="row">
          <h
            >Customer name :&nbsp; {{ this.$store.state.customertest.cname }}</h
          >
        </div>
        <div class="row">
          <h>Haircut type :&nbsp; {{ this.$store.state.customertest.type }}</h>
        </div>
      </div>
      <div class="row justify-center">
        ------------------------------------------------------------------
      </div>
      <div class="row justify-end q-pt-lg q-pr-md">
        <div class="row">
          <h
            >Price :&nbsp; {{ this.$store.state.customertest.price }} &nbsp;
            Baht</h
          >
        </div>
      </div>
    </q-card>

    <tool />
  </q-page>
</template>

<script>
import tool from "components/tool.vue";
export default {
  components: {
    tool
  },
  data() {
    return {
      logo: ""
    };
  },
  methods: {
    billBack() {
      this.$router.push({
        name: "Maincustomer"
      });
    },
    getdata() {
      this.$firestore
        .collection("logo")
        .where("name", "==", "logo-text-black")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().logo);
            this.logo = doc.data().logo;
          });
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
        });
    }
  },
  mounted() {
    this.getdata();
  }
};
</script>

<style>
@media screen and (min-width: 768px) {
.billcard {
  margin-top: 10%;
  margin-right: 20px;
  margin-left: 20px;
  padding-top: 8%;
  padding-left: 3%;
  padding-bottom: 20%;
}
.text {
  font-size: 20px;
}
.billpic {
  width: 150px;
  height: 80px;
}

}
.billcard {
  margin-top: 10%;
  margin-right: 20px;
  margin-left: 20px;
  padding-top: 8%;
  padding-left: 3%;
  padding-bottom: 20%;
}
.text {
  font-size: 20px;
}
.billpic {
  width: 150px;
  height: 80px;
}
</style>
