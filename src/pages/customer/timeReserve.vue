<template>
  <q-page class="bg-dark">
    <q-toolbar class="bg-dark text-white">
      <q-btn flat round dense icon="keyboard_backspace" @click="back">
        <!-- <q-badge floating color="red">2</q-badge> -->
      </q-btn>
      <q-toolbar-title>
        BACK
      </q-toolbar-title>
    </q-toolbar>
    <!-- --------------Header--------------- -->
    <q-card class="bg-white blackcard">
      <!-- <q-card class="bg-dark"> -->
      <div class="reserve row justify-center">
        <div class="q-pa-md q-gutter-sm">
          <u class="text">MORNING</u>
          <!-- <br /> -->
          <br />
          <div class="row q-gutter-md  q-pt-md q-px-md justify-start">
            <q-btn class="reserve" outline style="color: black;" label="  9 AM" />
            <q-btn class="reserve" outline style="color: black;" label="10 AM" />
            <q-btn class="reserve" outline style="color: black;" label="11 AM" />
            <q-btn class="reserve" outline style="color: black;" label="12 PM" />
          </div>
          <br />
          <br />
          <u class="text">AFTERNOON</u>
          <br />
          
          <div class="row q-gutter-md  q-pt-md q-pr-xs q-pl-md justify-start">
            <q-btn class="reserve" outline style="color: black;" label="  1 PM" />
            <q-btn class="reserve" outline style="color: black;" label="  2 PM" />
            <q-btn class="reserve" outline style="color: black;" label="  3 PM" />
            <q-btn class="reserve" outline style="color: black;" label="  4 PM" />
            <q-btn class="reserve" outline style="color: black;" label="  5 PM" />
            <q-btn class="reserve" outline style="color: black;" label="  6 PM" />
            <q-btn class="reserve" outline style="color: black;" label="  7 PM" />
            <q-btn class="reserve" outline style="color: black;" label="  8 PM" />
          </div>
          <br />
        </div>
      </div>
    </q-card>
    <div class="haircut row">
      <div class="text-h6 col-5 text-center"><h5 class="whitetext">HAIRCUTS</h5>
        <!-- <br />HAIRCUTS -->
      </div>
    </div>
    <div class="row portfolio">
      <q-card class="photos my-card col-4">
        <q-img src="https://cdn.quasar.dev/img/avatar2.jpg" basic>
          <div class="absolute-bottom text-subtitle2 text-center">Undercut</div>
        </q-img>
      </q-card>
      <q-card class="photos my-card col-4">
        <q-img src="https://cdn.quasar.dev/img/avatar2.jpg" basic>
          <div class="absolute-bottom text-subtitle2 text-center">Undercut</div>
        </q-img>
      </q-card>
      
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      date: "2020/09/04",
      firstname: "",
      lastname: "",
      profilepic:"",
    };
  },
  methods: {
    editprofile(){
      console.log("Edit profile")
       this.$router.push({
            name: "profilebarber",
          });
    },
    back(){
      this.$router.push({
            name: "ReserveCustomer"
          });
    },
    getdata() {
      this.$firestore
        .collection("barber")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().firstname);
            this.firstname = doc.data().firstname;
            console.log(doc.id, " => ", doc.data().profilepic);
            this.profilepic = doc.data().profilepic;
            // this.lastname = doc.data().lastname;

          });
        });
     
    },
  },

  mounted() {
     this.getdata();
     this.firstname = this.$firebase.auth().currentUser.firstname;
     this.profilepic = this.$firebase.auth().currentUser.profilepic;

  },
};
</script>

<style>
.profilepicture {
  width: 70px;
  height: 70px;
}
.reserve {
  /* padding-left: 20px; */
  padding-right: 5px;
}
.reservehead {
  padding-top: 10px;
  padding-left: 20px;
  color: black;
}

.portfolio {
  padding-top: 5px;
}
.photos {
  margin-left: 10px;
}


.blackcard {
  margin-top: 10%;
  margin-right: 15px;
  margin-left: 15px;
  padding-top: 8%;
  padding-left: 3%;
}
.text {
  color: black;
}
.whitetext {
  color: white;
}

</style>