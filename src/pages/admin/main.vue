<template>
  <q-page class="bg-dark">
    <AdminHeader/>

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
          <div class="row justify-center">
            <!-- ------------------------------------------------------------------------ -->
            <q-card
              class="bg-grey-2 q-ma-md barbercard col-5"
              v-for="(data, index) in barberprofilepic"
              :key="index"
            >
              <div class="row start justifly-center">
                <div class="col-6 q-pa-lg">
                  <q-img class="show" :src="data" />
                </div>

                <div class="col-6 q-pt-lg justify-center">
                  <div>
                    <h class="text-weight-bold">Name :</h>&nbsp;&nbsp;{{
                      barberfirstname[index]
                    }}
                    {{ barberlastname[index] }} <br />
                  </div>
                  <div>
                    <h class="text-weight-bold">Number :</h>&nbsp;&nbsp;{{
                      barbertelno[index]
                    }}
                  </div>
                   <div>
                    <h class="text-weight-bold">ID :</h>&nbsp;&nbsp;{{
                      barberid[index]
                    }}
                  </div>
                  <div>
                    <q-btn
                      rounded
                      class="approvebtn"
                      color="black"
                      label="Edit"
                      @click="editbarber(barbertelno[index])"
                    />
                  </div>
                  <div>
                    <q-btn
                      rounded
                      class="approvebtn"
                      color="red"
                      label="Delete"
                      @click="deletebarberbtn(index)"
                    />
                    <q-dialog v-model="deletebarber" persistent>
                      <q-card>
                        <q-card-section class="row items-center">
                          <q-avatar
                            icon="warning"
                            color="red"
                            text-color="white"
                          />
                          <span class="q-ml-sm"
                            >You are deleting this barber</span
                          >
                        </q-card-section>

                        <q-card-actions align="right">
                          <q-btn
                            flat
                            label="Cancel"
                            color="black"
                            v-close-popup
                          />
                          <q-btn
                            flat
                            label="Confirm"
                            color="red"
                            v-close-popup
                            @click="confirmbarber()"
                          />
                        </q-card-actions>
                      </q-card>
                    </q-dialog>
                  </div>
                </div>
              </div>
            </q-card>
            <!-- ------------------------------------------------------------------------ -->
          </div>
        </q-tab-panel>

        <q-tab-panel name="customer">
          <div class="text-h8">Customer Request</div>
          <div class="row  justify-center">
            <q-card
              class="bg-grey-2 q-ma-md barbercard col-5"
              v-for="(data, index) in customerprofilepic"
              :key="index"
            >
              <div class="row start justifly-center">
                <div class="col-6 q-pa-lg">
                  <q-img class="show" :src="data" />
                </div>

                <div class="col-6 q-pt-lg justify-center">
                  <h class="text-weight-bold">Name </h>
                  <!-- <br /> -->
                  &nbsp;&nbsp;{{ customername[index] }}
                  <br />
                  <h class="text-weight-bold">Email </h>
                  <!-- <br /> -->
                  &nbsp;&nbsp;{{ customeremail[index] }}
                  <br />
                  <h class="text-weight-bold">ID </h>
                  &nbsp;&nbsp;{{ customerid[index] }}
                  <br />
                  <div>
                    <q-btn
                      rounded
                      class="approvebtn"
                      color="black"
                      label="Edit"
                      @click="editcustomer(customeremail[index])"
                    />
                  </div>
                  <div>
                    <q-btn
                      rounded
                      class="approvebtn"
                      color="red"
                      label="Delete"
                      @click="deletecustomerbtn(index)"
                    />
                    <q-dialog v-model="deletecustomer" persistent>
                      <q-card>
                        <q-card-section class="row items-center">
                          <q-avatar
                            icon="warning"
                            color="red"
                            text-color="white"
                          />
                          <span class="q-ml-sm"
                            >You are deleting this customer</span
                          >
                        </q-card-section>

                        <q-card-actions align="right">
                          <q-btn
                            flat
                            label="Cancel"
                            color="black"
                            v-close-popup
                          />
                          <q-btn
                            flat
                            label="Confirm"
                            color="red"
                            v-close-popup
                            @click="confirmcustomer"
                          />
                        </q-card-actions>
                      </q-card>
                    </q-dialog>

                  </div>
                </div>
              </div>
            </q-card>
          </div>
          <!-- ------------------------------------------------------------------------- -->
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import AdminHeader from "components/AdminHeader.vue"; 
export default {
  components: {
    AdminHeader
  },
  data() {
    return {
      show: [],
      tab: "barber",
      slide: 1,
      autoplay: true,
      logo: "",
      barberfirstname: [],
      barberlastname: [],
      barbertelno: [],
      barberprofilepic: [],
      barberid: [],
      customerid: [],
      customerprofilepic: [],
      customername: [],
      customeremail: [],
      deletebarber: false,
      deletecustomer: false,
      selectedbarber: "",
      selectedcustomer: "",
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
            this.barberprofilepic.push(doc.data().profilepic);
            this.barberfirstname.push(doc.data().firstname);
            this.barberlastname.push(doc.data().lastname);
            this.barbertelno.push(doc.data().telno);
            this.barberid.push(doc.id);
            // console.log("All barber id : ",this.barberid);
          });
        });
    },
    getcustomer() {
      this.$firestore
        .collection("customer")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.customername.push(doc.data().CName);
            this.customerprofilepic.push(doc.data().URL);
            this.customeremail.push(doc.data().CMail);
            this.customerid.push(doc.id);
            // console.log(customerid);
          });
            // console.log(customerid);

        });
    },
    // logout() {
    //   console.log("Logout");
    //   this.$router.push({
    //     name: "loginadmin",
    //   });
    // },
    editbarber(barbertelno){
      console.log("Go to edit barber page");
      this.$store.commit("EDITBARBER", barbertelno)
    },
    deletebarberbtn(index){
      console.log(index);
      this.deletebarber = true;
      this.selectedbarber = this.barberid[index]


    },
    deletecustomerbtn(index){
      console.log(index);
      this.deletecustomer = true;
      this.selectedcustomer = this.customerid[index]
      // console.log(this.selectedcustomer, "HAHAHA");



    },
    editcustomer(customeremail){
       console.log("Go to edit customer page");
       this.$store.commit("EDITCUSTOMER", customeremail)

    },
    confirmbarber(){
      console.log("Deleting", this.selectedbarber);
        this.$firestore
        .collection("barber")
        .doc(this.selectedbarber)
        .delete()
        .then(function() {
            console.log("Document successfully deleted!");
          }).catch(function(error) {
            console.error("Error removing document: ", error);
          });
    },
    confirmcustomer(){
        console.log("Deleting", this.selectedcustomer);
        this.$firestore
        .collection("customer")
        .doc(this.selectedcustomer)
        .delete()
        .then(function() {
            console.log("Document successfully deleted!");
          }).catch(function(error) {
            console.error("Error removing document: ", error);
          });

    }

  },
  mounted() {
    // this.getlogo();
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
.logout {
  color: white;
  padding-top: 33px;
  text-decoration: underline;
}
</style>