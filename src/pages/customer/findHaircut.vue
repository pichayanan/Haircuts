<template>
  <q-page class="bg-grey-2">
    <div class="search">
      <div class="q-gutter-md">
        <q-input 
          rounded
          outlined color="dark"
          v-model="search"
          debounce="500"
          placeholder="Search"
          :dense="true"
        >
          <template v-slot:append >
            <q-icon @click="Search" name="search"></q-icon>
          </template>
        </q-input>
      </div>
    </div>

     <!-- <div class="q-pa-lg row items-start q-gutter-xl">
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
          </div> -->
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    Search(){
      console.log(this.search);
    }
  }
};
</script>

<style>
.search {
  position: absolute;
  padding-top: 5%;
  left: 20%;
  
}




</style>
