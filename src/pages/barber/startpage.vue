<template>
  <q-page class="bg-dark">
    <q-img class="fixed-center" :src="logo" :ratio="1" />
    <!-- Hello logo -->
    <div class="login">
      <q-btn
        class="absolute-bottom"
        rounded
        color="white"
        text-color="dark"
        label="Log-in"
        @click="login"
      />
    </div>
    <div class="tag">
      <h class="text">Start working with us</h>
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
    login() {
      console.log("click");
      this.$router.push({ name: "loginbarber" });
    },
    getlogo() {
      console.log("logo");
      this.$firestore
        .collection("logo")
        .where("name", "==", "logo")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().logo);
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
.login {
  position: absolute;
  bottom: 30%;
  left: 20%;
  width: 100px;
}
.absolute-bottom {
  width: 200px;
}
.text {
  color: white;
  font-size: 100%;
  text-align: center;
  
}
.tag{
 position:absolute;
  bottom: 20%;
  left: 30%;
  width: 200px;
}
</style>