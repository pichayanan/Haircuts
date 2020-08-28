<template>
  <q-page class="bg-white">
    <q-img class="logoH" :src="logo" :ratio="1" />

    <div class="positionsignin">
      <h class="signin">LET'S GET YOUR NEW LOOK</h>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      logo: ""
    };
  },
  methods: {
    // login() {
    //   console.log("click");
    //   this.$router.push({ name: "login", params: { name: "palm" } });

    // }
    getlogo() {
      console.log("logo");
      this.$firestore
        .collection("logo")
        .where("name", "==", "logoblack")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().logoblack);
            this.logo = doc.data().logo;
          });
        });
    }
  },
  mounted() {
    this.getlogo();
  }
};
</script>

<style>
.logoH {
  position: absolute;
  bottom: 380px;
  left: 110px;
  width: 270px;
}
.positionsignin{
 position:absolute;
  bottom: 480px;
  left: 99px;
  width: 200px;
}
</style>
