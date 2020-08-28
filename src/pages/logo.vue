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
    <div class="positionsignin">
      <h class="signin">Don't have an account ? Sign-in</h>
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

div.login {
  position: absolute;
  bottom: 190px;
  left: 90px;
  width: 100px;
}
.absolute-bottom {
  width: 200px;
}

.signin {
  color: white;
  font-size: 100%;
}

.positionsignin{
 position:absolute;
  bottom: 155px;
  left: 95px;
  width: 200px;
}
</style>
