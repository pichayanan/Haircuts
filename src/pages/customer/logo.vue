<template>
  <q-page class="bg-dark">
    
    <div class=" justify-center">
      <q-img class="firstpage" :src="logo" :ratio="1" />
    </div>
    
    <!-- Hello logo -->
    <!-- <div class="login">
      <q-btn
        class="absolute-bottom"
        rounded
        color="white"
        text-color="dark"
        label="Log-in"
        @click="login"
      />
    </div> -->
    <!-- <div class="positionsignin">
      <h class="signin">Don't have an account ? Sign-up</h>
    </div> -->
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
    //   this.$router.push({ name: "logincustomer",  });
    // },
    getlogo() {
      console.log("logo");
      this.$firestore
        .collection("logo")
        .where("name", "==", "logo-text-white")
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
    this.getlogo();
  }
};
</script>

<style>
/* div.login {
  position: absolute;
  width: 350px;
  left: 150px;
  
} */
/* .absolute-bottom {
  width: 200px;
}

.bg {
  color: white;
  font-size: 100%;
}*/
.firstpage {
  position: absolute;
  margin-left: 15%;
  margin-top: 75%;
  width: 250px;
  height: 150px;
}
</style>
