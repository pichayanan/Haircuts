<template>
  <q-page>
    <div class="q-xs">
      <q-carousel
      class="caro"
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        :autoplay="autoplay"
        
      >
        <q-carousel-slide
          :name="1"
          img-src="../../images/118306479_1181270908940903_6131537224577925165_n.jpg"
        ></q-carousel-slide>
        <q-carousel-slide
          :name="2"
          img-src="../../images/118557135_352851419062852_2334318054354633568_n.jpg"
        ></q-carousel-slide>
        <q-carousel-slide
          :name="3"
          img-src="../../images/101680803_1187923214888786_46992950877487104_n.jpg"
        ></q-carousel-slide>
      </q-carousel>
    </div>

    <q-card>
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
        <q-tab name="Male" label="MEN'S HAIRCUTS" @click="m('<=')"></q-tab>
        <q-tab name="Female" label="WOMEN'S HAIRCUTS" @click="f('>')"></q-tab>
      </q-tabs>
      <q-separator></q-separator>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="Male">
          <!-- ----------------------------------men haircuts-------------------------------------- -->
          <div class="q-pa-lg row items-start q-gutter-xl">
            <q-card class="my-card" v-for="(men, index) in show" :key="index"  @click="Mainbtn(men.haircutname, men.haircuttype,Name)"
                  >
              
                <q-img class="sizeimg" :src="men.photo"></q-img>
              

              <q-card-actions class="row justify-center">
                <q-btn
                  class="text-white"
                  flat
                 >{{ men.haircutname }}</q-btn
                >
              </q-card-actions>
            </q-card>
          </div>

          <!-- ------------------------------------------------------------------------------------ -->
        </q-tab-panel>
        <q-tab-panel name="Female">
          <!-- ----------------------------------female haircuts-------------------------------------- -->
          <div class="q-pa-lg row items-start q-gutter-xl">
            <!-- <q-card class="my-card" v-for="(women, index) in picW" :key="index"> -->
            <q-card class="my-card" v-for="(women, index) in show" :key="index" @click="Mainbtn(women.haircutname, women.haircuttype,Name)">
              <!-- <q-img class="sizeimg" :src="picW[index]"> </q-img> -->
              <q-img class="sizeimg" :src="women.photo"> </q-img>

              <q-card-actions class="row justify-center">
                <q-btn
                  class="text-white"
                  flat
                  
                  >{{ women.haircutname }}</q-btn
                >
                <!-- <q-btn
                  class="text-white"
                  flat
                  @click="Mainbtn(titleW[index])"
                  >{{ titleW[index] }}</q-btn
                > -->
              </q-card-actions>
            </q-card>
          </div>

          <!-- ----------------------------------input OTP-------------------------------------- -->
        </q-tab-panel>
      </q-tab-panels>
    </q-card>

    <!-- <div class="q-xs">
    <q-btn-group spread style="width:100%">
    
      <q-btn color="dark" label="First" icon="timeline"></q-btn>
      <q-btn color="dark" label="Second" icon="visibility"></q-btn>
    </q-btn-group>
  </div> -->
    <tool />
  </q-page>
</template>

<script>
import tool from "components/tool.vue";
export default {
  
  components: {
    tool
  },
  data() {
    return {
      slide: 1,
      autoplay: true,
      tab: "Male",
      show: [],
      Name: ""
    };
  },
  methods: {
    m(test) {
      this.show = [];
      console.log(test);
      this.getdata(test);
    },
    f(test) {
      this.show = [];
      console.log(test);
      this.getdata(test);
    },
    getdata(test) {
      console.log("haircut");
      this.$firestore
        .collection("haircut")
        .where("haircuttype", test, "010")
        .orderBy("haircuttype", "asc")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.show.push(doc.data());
            console.log(this.show);
          });
        })
        .then(() => {
          this.$firestore
            .collection("customer")
            .where("CMail", "==",this.$firebase.auth().currentUser.email )
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                this.Name = doc.data().CName;
              });
            });
        })
    },
  
    Mainbtn(haircutname, haircuttype ,Name) {
      // console.log(haircutname, haircuttype, this.Name);
      this.$store.commit("cmain", { haircutname, haircuttype ,Name });
    }
  },
  mounted() {
    this.m("<=");
  }
};
</script>

<style>
.caro{
height: 200px
}

.my-card {
  margin-left: 10%;
  width: 40%;
  background-color: black;
}
@media screen and (max-width: 320px) {
  .caro{
height: 100px
}
.my-card {
  margin-left: 10%;
  width: 40%;
  background-color: black;
}
}
@media screen and (max-width: 375px) {
  .caro{
height: 100px
}
.my-card {
  margin-left: 10%;
  width: 40%;
  background-color: black;
}
}
@media screen and (min-width: 768px) {
  .caro{
height: 300px
}
.my-card {
  margin-left: 10%;
  width: 40%;
  background-color: black;
}
}
@media screen and (min-width: 1024px) {
  .caro{
height: 300px
}
.my-card {
  margin-left: 10%;
  width: 40%;
  
  background-color: black;
}
}
</style>
