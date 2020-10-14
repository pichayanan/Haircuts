<template>
  <q-page class="bg-dark">
    
    <!-- <q-img class="row justify-center logoHaircuts" :src="logo" :ratio="1"  /> -->


    <div class="q-xs">
      <q-carousel animated v-model="slide" arrows navigation infinite :autoplay="autoplay" height="250px" >
        <q-carousel-slide :name="1" img-src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" ></q-carousel-slide>
        <!-- <q-carousel-slide :name="2" img-src="../../images/118557135_352851419062852_2334318054354633568_n.jpg" ></q-carousel-slide>
        <q-carousel-slide :name="3" img-src="../../images/101680803_1187923214888786_46992950877487104_n.jpg" ></q-carousel-slide> -->
      </q-carousel>
    </div>

    <q-card class="full-width">
        <q-tabs v-model="tab" dense class="bg-black text-grey" color="black" active-color="white" indicator-color="white" align="justify" narrow-indicator>
          <q-tab name="barber" label="BARBER"></q-tab>
          <q-tab name="customer" label="CUSTOMER"></q-tab>
        </q-tabs>

        <q-separator></q-separator>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="barber">
            <div class="text-h8">Barber Request</div>
            <!-- ------------------------------------------------------------------------ -->
            


         
            <!-- ------------------------------------------------------------------------ -->
          </q-tab-panel>

          <q-tab-panel name="customer">
            <div class="text-h8">Customer Request</div>
            <!-- ------------------------------------------------------------------------- -->
        
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: "barber",
      slide: 1,
      autoplay: true,
      logo: "",
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
   
    
  },
  mounted() {
    this.getlogo();
  }
};
</script>

<style>
.logoHaircuts {
      width: 100px; 
      
}
</style>