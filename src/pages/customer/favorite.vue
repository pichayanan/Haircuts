<template>
  <q-page class="bg-grey-3 ">
    <q-toolbar class="bg-dark justify-center  bar q-pa-md text-white">
        <div>Favorite Haircuts</div>
    </q-toolbar>
    <br />
    <div class="q-px-xs row justify-center q-gutter-xl ">
      <div
        class="col-4"
        v-for="(data, index) in listF" :key="index"
      >
    <q-card class="cardfav bg-dark"  >
    <!-- <q-card class="q-px-xs row justify-center q-gutter-xl " v-for="(data, index) in photos" :key="index" > -->

    <q-img class="sizeimg1 justify-center row" :src="photos[index]" @click="detailfav(id[index])" />
    <q-card-actions align="left">
            <h class="pricetext" >Price : {{ price[index] }} ฿</h>
            &nbsp;
            <q-btn
              v-if="hasfav(id[index]) == true"
              align="right"
              flat
              round
              icon="favorite"
              color="red"
              size="md"
            ></q-btn>
            <q-btn
              v-else
              align="right"
              flat
              round
              icon="favorite"
              size="md"
            ></q-btn>
            
          </q-card-actions>
        </q-card>
      </div>
    </div>


  <tool />
  </q-page>
</template>

<script>
 import tool from "components/tool.vue";
import { mapActions, mapGetters } from "vuex";

export default {
   
  components: {
    tool
  },
  data() {
      return {
          listF: [],
          cusid: "",
          photos: [],
          price: [],
          customerid: "",
          favoritelist: "",
          fav: null,
          id: [],
          
      }
  },
  methods: {
      getdata(){
        this.$firestore
        .collection("customer")
        .where("CMail", "==", this.$firebase.auth().currentUser.email)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(async doc => {
                  this.listF = doc.data().favorite; 
                  this.customerid = doc.id;            
          });

          this.getfav();
          
        });
       
        

      },
       getfav(){
        console.log("getting fav :",this.listF);
        this.$firestore
        .collection("portfolio")
        .where("portfolioid","in",this.listF)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(async doc => {

                  this.photos.push(doc.data().photos[0]);
                  console.log("Photos  = ",this.photos);
                  this.price.push(doc.data().price);
                  this.id.push(doc.id);
                  console.log("Doc id  = ",this.id);
            
          });
          
        })
      },
  
    hasfav(id) {
      console.log("id", id);
      console.log("this fav ", this.listF);

      for (let i = 0; i <= this.listF.length; i++) {
        // console.log("if ", this.fav[i]);
        if (this.listF[i] == id) {
          return true;
        }
      }
      return false;
    },
   detailfav(id) {
      console.log(id);
       this.$store.commit("cfind", id);
    },

  },
  mounted() {
      this.getdata();
      
  },

}
</script>

<style>
.cardfav {
  width: 100%;
}

.sizeimg1 {
  width: 100%;
  height: 200px;
}
.pricetext{
  color: aliceblue;
}
@media screen and (min-width: 1024px) {
.cardfav {
  width: 100%;
}

.sizeimg1 {
  width: 100%;
  height: 200px;
}
.pricetext{
  color: aliceblue;
}
}
</style>