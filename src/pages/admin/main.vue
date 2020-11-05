<template>
  <q-page class="bg-dark">
    <div class="row justify-center q-pa-sm">
      
        <q-img class="logoHaircuts" :src="logo" />
        <div class="logout fixed-right q-pr-xl" @click="logout">LOGOUT</div>

        
      
    </div>

    <div class="q-xs">
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        :autoplay="autoplay"
        height="250px"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ></q-carousel-slide>
        <!-- <q-carousel-slide :name="2" img-src="../../images/118557135_352851419062852_2334318054354633568_n.jpg" ></q-carousel-slide>
        <q-carousel-slide :name="3" img-src="../../images/101680803_1187923214888786_46992950877487104_n.jpg" ></q-carousel-slide> -->
      </q-carousel>
    </div>

    <q-card class="full-width">
      <q-tabs
        v-model="tab"
        dense
        class="bg-black text-grey"
        color="black"
        active-color="white"
        indicator-color="white"
        align="justify"
        narrow-indicator
      >
        <q-tab name="barber" label="BARBER"></q-tab>
        <q-tab name="customer" label="CUSTOMER"></q-tab>
      </q-tabs>

      <q-separator></q-separator>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="barber">
          <div class="text-h8">Barber Request</div>
          <!-- ------------------------------------------------------------------------ -->
          <q-card class="bg-grey-2 q-ma-md barbercard">
            <!-- v-for="(barber, index) in show" :key="index" -->
            <div class="row start justifly-center">
              <div class="col-6 q-pa-lg">
                <q-img class="show" :src="barberprofilepic" />
              </div>

              <!-- <q-card class="text-h7 bg-grey-3 detailcard"> -->

              <div class="col-6 q-pt-lg justify-center">
                <!-- <div class="row"> -->
                <div>
                  <h class="text-weight-bold">Name :</h>&nbsp;&nbsp;{{ barberfirstname }} {{ barberlastname }} <br />
                </div>
                <div>
                  <h class="text-weight-bold">Number :</h>&nbsp;&nbsp;{{ barbertelno }}
                </div>
                <div>
                  <q-btn rounded class="approvebtn" color="black" label="Edit" />
                </div>
                 <div>
                  <q-btn rounded class="approvebtn" color="red" label="Delete" />
                </div>
                

                <!-- </div> -->
              </div>

              <!-- </q-card> -->
            </div>
          </q-card>
          <!-- ------------------------------------------------------------------------ -->
        </q-tab-panel>

        <q-tab-panel name="customer">
          <div class="text-h8">Customer Request</div>
          <!-- ------------------------------------------------------------------------- -->
          <q-card class="bg-grey-2 q-ma-md barbercard">
            <div class="row start justifly-center">
              <div class="col-6 q-pa-lg">
                <q-img class="show" :src="customerprofilepic" />
              </div>

              <div class="col-6 q-pt-lg justify-center">
                <h class="text-weight-bold">Name </h>
                <br />
                &nbsp;&nbsp;{{ customername }}
                <br />
                <h class="text-weight-bold">Email </h>
                <br />
                &nbsp;&nbsp;{{ customeremail }}
                <div>
                  <q-btn rounded class="approvebtn" color="black" label="Edit" />
                </div>
                 <div>
                  <q-btn rounded class="approvebtn" color="red" label="Delete" />
                </div>
              </div>
              

              <!-- </q-card> -->
            </div>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      show: [],
      tab: "barber",
      slide: 1,
      autoplay: true,
      logo: "",
      barberfirstname: "",
      barberlastname: "",
      barbertelno: "",
      barberprofilepic: "",
      barberid: "",
      customerprofilepic: "",
      customername: "",
      customeremail: "",
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
    getbarber() {
      this.$firestore
        .collection("barber")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.barberfirstname = doc.data().firstname;
            this.barberlastname = doc.data().lastname;
            this.barberprofilepic = doc.data().profilepic;
            this.barbertelno = doc.data().telno;
            this.barberid = doc.id;
          });
        });
    },
    getcustomer() {
      this.$firestore
        .collection("customer")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.customername = doc.data().CName;
            // this.barberlastname = doc.data().lastname;
            this.customerprofilepic = doc.data().URL;
            this.customeremail = doc.data().CMail;
            // this.barberid = doc.id;
          });
        });
    },
    logout(){
      console.log("Logout");
      this.$router.push({
        name: "loginadmin",
      });
    }
  },
  mounted() {
    this.getlogo();
    this.getbarber();
    this.getcustomer();
  },
};
</script>

<style>
.logoHaircuts {
  width: 150px;
}
.barbercard {
  width: 40%;
}
.approvebtn {
  margin-top: 10%;
  width: 40%;
}
.logout{
  color: white;
  padding-top: 33px;
  text-decoration: underline;

}
</style>