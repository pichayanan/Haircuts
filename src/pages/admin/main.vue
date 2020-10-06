<template>
  <q-page class="bg-dark">
    
    <q-img class="fixed-center row justify-center logoHaircuts" :src="logo" :ratio="1"  />
      
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      logo: "",
      tab: "mobile",
      telno: "", 
      capchaVerified: false,
      confirmCode: "",
      phoneNumber: ""

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
   
    
  },
  mounted() {
    this.getlogo();
  }
};
</script>

<style>
.logoHaircuts {
      width: 150px; 
}
</style>