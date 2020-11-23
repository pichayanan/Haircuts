<template>
  <q-page class="bg-dark row justify-center ">
    <q-img class=" row logo" :src="logo" :ratio="1" />
    <!-- Hello logo -->
    <div class="tag row justify-center">
      <h class="text">Please Wait</h>
       <h class="text">For Our Approval </h>
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
    getlogo() {
      console.log("logo");
      this.$firestore
        .collection("logo")
        .where("name", "==", "logo-white")
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
.logo {
  height: 200px;
  width: 200px;
  margin-top: 100px;
}
.absolute-bottom {
  width: 200px;
}
.text {
  color: white;
  font-size: 150%;
  /* text-align: center; */
  
}
.tag{
  position: absolute;
  bottom: 20%;
  width: 200px;
}
</style>