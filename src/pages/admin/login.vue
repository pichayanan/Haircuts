<template>
  <q-page class="bg-dark">

    <div class="row ">
    <div class="col-4"></div>
    <div class="col-4 justify-center">
      <q-img class="firstpage" :src="logo" :ratio="1" />
    </div>
    <div class="col-4"></div>
    </div>
    <br>

    <div class="row">
    <div class="col-3"></div>
    <div class="col-6 justify-center">
       <q-card dark bordered class="bg-dark login q-pa-md ">
        <q-card-section>
          <div class="row">
          <div class="text-subtitle2">USERNAME :</div>
          <q-input class="inputT" dark standout bottom-slot  v-model="text" label="Username">
        
      </q-input>
             </div>
          <br>
          <br>
          <div class="row">
          <div class="text-subtitle2">PASSWORD :</div>
          <q-input class="inputT" dark standout bottom-slot v-model="text" label="password">
             </q-input>
            </div>
            <br>
             <div class="col-3"></div>
    <div class="justify-center">
     <div class="loginadmin">
      <q-btn
        @click="loginadminbtn"
        color="white"
        size="md"
        class="q-px-sm"
        rounded
        text-color="black"
        label="Log-in"
        
      />
    </div>
    </div>
        </q-card-section>
      </q-card>
    </div>
   
    </div>

    
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      logo: "",
      text: "",
    };
  },
  methods: {
    // login() {
    //   console.log("click");
    //   this.$router.push({ name: "logincustomer",  });
    // },
    getlogo() {
      console.log("logo Admin");
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
    },
    loginadminbtn() {
        this.$router.push({
        name: "findHaircut",
      });
    }
  },
<<<<<<< HEAD
=======

>>>>>>> customer
  mounted() {
    this.getlogo();
  }
};
</script>

<style>
.firstpage {
  width: 400px;
  height:200px;
  
  padding-top: 5%;
}
.login {
  height: 100%;
  width: 100%;
 
  padding-left:20%;
  
}
.inputT{
  width: 50%;
  padding-left: 5%;
  
}
.text-subtitle2{
  padding-top: 3%;
}
.loginadmin{
  padding-left: 22%;
  padding-top: 8%;
}
<<<<<<< HEAD
</style>
=======

</style>
>>>>>>> customer
