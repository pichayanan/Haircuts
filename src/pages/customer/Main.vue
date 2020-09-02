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
          <div class="row items-center" v-for="n in 3" :key="n">
            <div class="col"  > 
              
              <q-card class="my-card">
                <q-img src="../../images/buzzcut.jpg"> </q-img>

                <q-card-actions class="row justify-center">
                  <q-btn flat>BUZZ</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col">
              <q-card class="my-card">
                <q-img src="../../images/undercut.jpg"> </q-img>

                <q-card-actions class="row justify-center">
                  <q-btn flat>UNDERCUT</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col">
              <q-card class="my-card">
                <q-img src="../../images/buzzcut.jpg"> </q-img>

                <q-card-actions class="row justify-center">
                  <q-btn flat>Action 1</q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </div>

          <!-- ------------------------------------------------------------------------------------ -->
        </q-tab-panel>
        <q-tab-panel name="Female">
          <!-- ----------------------------------female haircuts-------------------------------------- -->
 <div class="row items-center" v-for="n in 2" :key="n">
            <div class="col"  > 
              
              <q-card class="my-card">
                <q-img src="../../images/buzzcut.jpg"> </q-img>

                <q-card-actions class="row justify-center">
                  <q-btn flat>BUZZ</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col">
              <q-card class="my-card">
                <q-img src="../../images/undercut.jpg"> </q-img>

                <q-card-actions class="row justify-center">
                  <q-btn flat>UNDERCUT</q-btn>
                </q-card-actions>
              </q-card>
            </div>
            <div class="col">
              <q-card class="my-card">
                <q-img src="../../images/buzzcut.jpg"> </q-img>

                <q-card-actions class="row justify-center">
                  <q-btn flat>Action 1</q-btn>
                </q-card-actions>
              </q-card>
            </div>
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
      tab: "Male"
    };
  }
};
</script>

<style>
.my-card{
  margin:5%
}</style>
