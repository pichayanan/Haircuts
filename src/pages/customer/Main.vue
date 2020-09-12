<template>
  <q-page>
    <div class="q-xs">
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        :autoplay="autoplay"
        height="200px"
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
        <q-tab name="Male" label="MEN'S HAIRCUTS"></q-tab>
        <q-tab name="Female" label="WOMEN'S HAIRCUTS"></q-tab>
      </q-tabs>
      <q-separator></q-separator>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="Male">
          <!-- ----------------------------------men haircuts-------------------------------------- -->
          <div class="q-pa-lg row items-start q-gutter-xl">
            <q-card class="my-card" v-for="(men, index) in testM" :key="index">
              <q-img class="sizeimg" :src="men.picM"></q-img>

              <q-card-actions class="row justify-center">
                <q-btn
                  class="text-white"
                  flat
                  @click="Mainbtn(men.titleM, men.id)"
                  >{{ men.titleM }}</q-btn
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
            <q-card class="my-card" v-for="(women, index) in testW" :key="index">
              <!-- <q-img class="sizeimg" :src="picW[index]"> </q-img> -->
              <q-img class="sizeimg" :src="women.picW"> </q-img>

              <q-card-actions class="row justify-center">
                <q-btn
                  class="text-white"
                  flat
                  @click="Mainbtn(women.titleW, women.id)"
                  >{{ women.titleW }}</q-btn
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
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      autoplay: true,
      tab: "Male",
      testW: [],
      testM: []
    };
  },
  methods: {
    getmen() {
      console.log("Menstyle");
      this.$firestore
        .collection("Menstyle")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            // this.picM.push(doc.data().url);
            // this.titleM.push(doc.data().name);
            let objMen = {
              picM: doc.data().url,
              titleM: doc.data().name,
              id: doc.id
            };
            this.testM.push(objMen);
            // console.log(this.pic)
            // console.log(doc.id, " => ", doc.data().name);
          });
        });
    },
    getwomen() {
      console.log("Womenstyle");
      this.$firestore
        .collection("Womenstyle")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            // this.picW.push(doc.data().url);
            // this.titleW.push(doc.data().name);

            let objWomen = {
              picW: doc.data().url,
              titleW: doc.data().name,
              id: doc.id
            };
            this.testW.push(objWomen);
            // console.log(this.testW);

            // console.log(this.pic)
            // console.log(doc.id, " => ", doc.data().name);
          });
        });
    },
    Mainbtn(title, id) {
      console.log(title, id);
      this.$router.push({
        name: "findHaircut",
        params: {
          title: title
        }
      });
    }
  },
  mounted() {
    this.getmen();
    this.getwomen();
  }
};
</script>

<style>
.my-card {
  margin-left: 9%;
  width: 40%;
  background-color: black;
}
.sizeimg {
  width: 137px;
  height: 163px;
}
</style>
