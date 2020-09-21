<template>
  <q-page class="bg-dark">
    <!-- --------------Header--------------- -->

    <q-item class="row header">
      <q-item-section avatar class="col-3">
        <q-avatar class="profilepicture">
          <img :src="profilepic" />
        </q-avatar>
      </q-item-section>

      <q-item-section class="col-7">
        <div class="col-6 text-h6 text-weight-bold username">{{ firstname}}</div>
        <!-- <q-item-label class="row" caption>฿400</q-item-label> -->
      </q-item-section>

      <div class="col-2 text-grey q-gutter-md edit" style="font-size: 2em">
        <q-icon @click="editprofile" name="create" />
      </div>
    </q-item>

    <q-card class="bg-white blackcard">
      <div class="reservehead justify-center row">
        <div class="text-h6 col-5 text-center">
          <br />RESERVATION
        </div>
        <div class="q-pa-md col-7" style="max-width: 300px">
          <q-input v-model="date" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
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
      <!-- <q-card class="bg-dark"> -->
      <div class="reserve row justify-center">
        <div class="q-pa-md q-gutter-sm">
          <u class="text">MORNING</u>
          <!-- <br /> -->
          <br />
          <div class="row">
            <q-btn class="reserve" outline style="color: black;" label="  9 AM" />
            <q-btn class="reserve" outline style="color: black;" label="10 AM" />
            <q-btn class="reserve" outline style="color: black;" label="11 AM" />
            <q-btn class="reserve" outline style="color: black;" label="12 PM" />
          </div>
          <br />
          <u class="text">AFTERNOON</u>
          <br />
          <br />
          <div class="row">
            <q-btn class="reserve" outline style="color: black;" label="  1 PM" />
            <q-btn class="reserve" outline style="color: black;" label="  2 PM" />
            <q-btn class="reserve" outline style="color: black;" label="  3 PM" />
            <q-btn class="reserve" outline style="color: black;" label="  4 PM" />
          </div>
          <div class="row">
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
      <div class="photos col-3 addbutton">
        <q-icon size="80px" name="add_circle_outline" />
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
  margin-right: 5px;
}
.reservehead {
  margin-top: 10px;
  margin-left: 20px;
  color: black;
}
.edit {
  /* margin-right: 5px; */
  margin-top: 15px;
}
.portfolio {
  margin-top: 5px;
}
.photos {
  margin-left: 10px;
}
.addbutton {
  text-align: right;
  margin-top: 40px;
}
.header {
  padding-top: 30px;
  margin-left: 5px;
}
.blackcard {
  margin-top: 30px;
  margin-right: 15px;
  margin-left: 15px;
}
.text {
  color: black;
}
.whitetext {
  color: white;
}
.username {
  /* margin-top: 5%; */
  color: whitesmoke;
  /* text-align: center; */
  font-size: 150%;
}
</style>