<template>
  <q-page class="bg-white">

    <div class="row header bg-white q-mt-md">

      <div avatar class="col-3">
        <q-avatar class="profilepicture">
          <img :src="profilepic" />
        </q-avatar>
      </div>

      <div class="col-8 ">
        <div class="row text-weight-bold username" style="font-size:1.5rem">
           {{ firstname }} {{ lastname }} &nbsp; 
        </div>
        <div class="row text-caption text-weight-thin ">
          <q-icon name="location_on" />
          {{ location }}
        </div>
      </div>
      <div class="col-1">
          <q-icon @click="editprofile" name="create" size="sm" /> 
      </div>

    </div>
    

    <div class="reservehead justify-center row">
        <div class="text-h6 col-5 text-center"><br />RESERVATION</div>
        <div class="q-pa-md col-7" style="max-width: 300px">
          <q-input v-model="date" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="" color="blue">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="date" class="bg-grey-10 text-white">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>


    <q-card class="bg-grey-2 reservecard">

      <div class="reserve row justify-center">
        <div class="q-pa-md q-gutter-sm">
          <h7 class="text text-weight-bold">MORNING</h7>
          <br />
          <div class="row">
            <q-btn class="reserve" color="white" text-color="black" label="  9 AM" />
            <q-btn class="reserve" color="red" text-color="white" label="10 AM" />
            <q-btn class="reserve" color="red" text-color="white" label="11 AM" />
            <q-btn class="reserve" color="white" text-color="black" label="12 PM" />
          </div>
          <br />
          <h7 class="text text-weight-bold">AFTERNOON</h7>
          <br />
          <div class="row">
            <q-btn class="reserve" color="white" text-color="black" label="  1 PM" />
            <q-btn class="reserve" color="white" text-color="black" label="  2 PM" />
            <q-btn class="reserve" color="red" text-color="white" label="  3 PM" />
            <q-btn class="reserve" color="white" text-color="black" label="  4 PM" />
          </div>
          <div class="row">
            <q-btn class="reserve" color="white" text-color="black" label="  5 PM"/>
            <q-btn class="reserve" color="white" text-color="black" label="  6 PM" />
            <q-btn class="reserve" color="red" text-color="white" label="  7 PM" />
            <q-btn class="reserve" color="white" text-color="black" label="  8 PM" />
          </div>
          <br />
        </div>
      </div>
    </q-card>


    <div class="haircut row">
      <div class="text-h6 col-5 text-center">
        <h5 class="whitetext">HAIRCUTS</h5>
        <!-- <br />HAIRCUTS -->
      </div>
    </div>

    <div class="row portfolio">
      <q-card class="photos my-card col-4">
        <q-img src="https://cdn.quasar.dev/img/avatar2.jpg" basic>
          <div class="absolute-bottom text-subtitle2 text-center">Undercut</div>
        </q-img>
      </q-card>
      <div class="photos col-3 addbutton">
        <q-icon
          size="80px"
          name="add_circle_outline"
          color="black"
          @click="addportfolio"
        />
      </div>
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
      profilepic: "",
      telno: "",
      barberid: "",
      location:"",
    };
  },
  methods: {
    editprofile() {
      console.log("Go to edit profile page");
      this.$router.push({
        name: "profilebarber",
      });
    },
    getdata() {
      console.log(this.$firebase.auth().currentUser.phoneNumber);
      this.$firestore
        .collection("barber")
        .where("telno", "==", this.$firebase.auth().currentUser.phoneNumber)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            // console.log(doc.id, " => ", doc.data().firstname);
            this.$store.commit("MAIN", doc.id);
            this.firstname = doc.data().firstname;
            this.lastname = doc.data().lastname;
            this.profilepic = doc.data().profilepic;
            this.location = doc.data().location;
            this.barberid = doc.id;

          });
          this.insertid(this.barberid);
        });
    },
    insertid(id) {
      console.log("INSERT BARBER ID : "+ id + " TO FIREBASE");
      this.$firestore
      .collection("barber")
      .doc(this.barberid)
      .update({
        barberid: this.barberid,
      })
      .then((docRef) => {

      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    },
    addportfolio() {
      console.log("Add portfolio page page");
      this.$router.push({
        name: "portfoliobarber",
      });
    },
  },

  mounted() {
    this.getdata();
    this.profilepic = this.$firebase.auth().currentUser.profilepic;
    this.firstname = this.$firebase.auth().currentUser.firstname;
    this.telno = this.$store.state.example.telno;
  },
};
</script>

<style>
.profilepicture {
  width: 80px;
  height: 80px;
}
.reserve {
  margin-right: 5px;
}
.reservehead {
  padding-top: 10px;
  margin-left: 20px;
  color: black;
}
.edit {
  padding-top: 15px;
}
.portfolio {
  padding-top: 5px;
}
.photos {
  margin-left: 10px;
}
.addbutton {
  text-align: right;
  margin-top: 40px;
}
.header {
  /* padding-top: 30px;
  margin-left: 10px; */
  /* margin-top: 20px; */
  margin-right: 15px;
  margin-left: 15px;
}
.reservecard {
  /* margin-top: 20px; */
  padding-top:10px;
  margin-right: 15px;
  margin-left: 15px;
}
.text {
  color: black;
}
.whitetext {
  color: black;
}
.username {
  color: black;
  font-size: 100%;
  /* padding-top: 10px; */
}
.textfix {
  color: black;
  font-size: 80%;
  text-align: center;
}
.text-caption{
  color: grey;
}
</style>