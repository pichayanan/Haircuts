<template>
  <q-page class="bg-black">
    <AdminHeader />

    <q-card class="bg-white card q-ma-xl">
      <div class="row justify-center">
        <div class="col-4">
          <div class="row">
            <q-item-section avatar class>
              <q-avatar class="profilepic row text-center">
                <img :src="customerprofilepic" />
              </q-avatar>
              <div class="description row justify-center">
                <!-- <u class="row justify-center" caption>Customer</u> -->
                <br />
                <h6>{{ customeremail }}</h6>
              </div>
            </q-item-section>
          </div>
        </div>
        <div class="col-8">
          <div class="row justify-center q-gutter-xl form" style="full-width">
            <q-input v-model="customername" label="Name *"></q-input>
            <q-input v-model="customerbirthday" label="Birthday *"></q-input>
            <!-- <q-input  v-model="customeremail" label="Email"></q-input> -->
            <q-input v-model="customergender" disable label="Gender"></q-input>
          </div>
        </div>
      </div>
    </q-card>
    <div class="row justify-center q-mt-md q-gutter-md">
      <q-btn color="red" label="Back" @click="cancel" />
      <q-btn color="primary" label="Save" @click="editcustomer" />
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
      customername: "",
      customerbirthday: "",
      customerprofilepic: "",
      customergender: "",
      customeremail: "",
      customerid: "",
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
    getcustomer() {
      this.$firestore
        .collection("customer")
        .where("CMail", "==", this.$store.state.example.emailA)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.customername = doc.data().CName;
            this.customerbirthday = doc.data().CBirthday;
            this.customerprofilepic = doc.data().URL;
            this.customergender = doc.data().gender;
            this.customeremail = doc.data().CMail;
            this.customerid = doc.id;
          });
        });
    },
    cancel() {
      console.log("Cancel");
      this.$router.push({
        name: "mainadmin",
      });
    },
    editcustomer() {
      this.$firestore
        .collection("customer")
        .doc(this.customerid)
        .update({
          CName: this.customername,
          CBirthday: this.customerbirthday,
        })
        .then((docRef) => {
          console.log("Data save");
          this.$router.push({
            name: "mainadmin",
          });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      console.log("Data save");
    },
  },
  mounted() {
    this.getlogo();
    this.getcustomer();
  },
};
</script>

<style>
.profilepic {
  margin-top: 80px;
  margin-left: 120px;
  width: 200px;
  height: 200px;
}
.description {
  margin-left: 110px;
  margin-bottom: 50px;
}
.form {
  margin-top: 150px;
  margin-bottom: 30px;
}
</style>