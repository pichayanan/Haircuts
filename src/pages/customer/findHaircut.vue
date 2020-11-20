<template>
  <q-page class="bg-grey-2">
    <q-toolbar class="bg-grey-2 text-black">
      <q-btn flat round dense icon="keyboard_backspace" @click="back">
        <!-- <q-badge floating color="red">2</q-badge> -->
      </q-btn>
    </q-toolbar>

    <div class="q-pa-md">
      <q-select
        rounded
        outlined
        v-model="model"
        :searchType="searchType"
        :options="options"
        label="Sort by facetype"
      >
        <template v-if="model" v-slot:append>
          <q-icon
            name="cancel"
            @click.stop="model = null"
            class="cursor-pointer"
          />
        </template>
      </q-select>
    </div>

    <br />

    <!-- <div v-for="(data, index) in " :key="index">
      {{ data.facetype }} <br />
      {{ data.photos }} <br />
      {{ data.id }} <br />
    </div> -->

    <div class="q-px-xs row justify-center q-gutter-xl ">
      <div
        class="col-4"
        v-for="(data, index) in this.$store.state.customertest.facetype"
        :key="index"
      >
        <q-card class="cardfav bg-white ">
          <q-img
            @click="pic(data.id)"
            class="sizeimg1 justify-center row"
            :src="data.photos"
          />
          <q-card-actions align="left">
            <h>Price : {{price[index]}} ฿</h>
             &nbsp;
            <q-btn
              v-if="hasfav(data.id) == true"
              align="right"
              flat
              round
              icon="favorite"
              color="red"
              size="md"
              @click="hasfav(data.id)"
            ></q-btn>
             <q-btn
              v-else
              align="right"
              flat
              round
              icon="favorite"
              size="md"
              @click="hasfav(data.id)"
            ></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <!-- <div class="row q-gutter-xl justify-center">
      <div
        class="col-4 justifly-center"
        v-for="(data, index) in this.$store.state.customertest.facetype"
        :key="index"
      >
     <q-card>
       <q-img @click="pic(data.id)" class="sizeimg1" :src="data.photos" />
     <q-card-section>
        <q-skeleton type="text" class="text-subtitle2">{{this.$store.state.customertest.type}}</q-skeleton>
         <div class="row items-center justify-end">
              <q-icon name="favorite_border" color="grey-4" class="q-mr-sm" size="18px"></q-icon>
         </div>
      </q-card-section>
      </q-card>
      </div> -->

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
  computed: {
    ...mapGetters(["searchType"]),

    searchType: function() {
      console.log("searchTypeL: ", this.model);
      return this.getType(this.model);
    }
  },
  data() {
    return {
      cusid: "",
      fav: [],
      ratingModel: [],
      search: "",
      photos: [],
      id: [],
      price: [],
      model: "",
      facetype: "",
      customerid: "",
      favoritelist: "",
      options: [
        "oval",
        "round",
        "diamond",
        "heart",
        "rectangle",
        "square",
        "all"
      ]
    };
  },
  mounted() {
    this.$store.commit("C_TESTtype");
    this.getdata();
    // this.getlist();
  },

  methods: {
    ...mapActions(["getType"]),
    getdata() {
      let id = this.$store.state.customertest.cid;
      console.log(this.$store.state.customertest.cid);
      console.log("portfolio");
      this.$firestore
        .collection("portfolio")
        .where("haircuttype", "==", id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.facetype = doc.data().facetype;
            console.log("facetype : ", this.facetype);
            this.id.push(doc.id);
            this.price.push(doc.data().price);
            console.log("price is : ", this.price);

            let rec = {
              facetype: doc.data().facetype,
              photos: doc.data().photos[0],
              id: doc.id
            };
            this.$store.commit("TESTtype", rec);
          });
        })
        .then(() => {
          this.$firestore
            .collection("customer")
            .where("CMail", "==", this.$firebase.auth().currentUser.email)
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                this.customerid = doc.id;
                this.fav.push(doc.data().favorite);
              });
              // this.getlist();
            });
        });

      // console.log("llpplp: ", this.id);
      console.log(this.photos);
    },
    //     getlist(){
    //       console.log("cus id ",this.customerid);
    //           this.$firestore
    //             .collection("favorite")
    //             .where("customerid", "==", this.customerid)
    //             .get()
    //             .then(querySnapshot => {
    //               querySnapshot.forEach(doc => {
    //                  this.list(doc.data().haircutid);

    //               });
    //             });

    //     },
    //     list(listid){
    // this.favoritelist = listid;
    // console.log("list : ", this.favoritelist);
    //     },
    //     favbtn(index) {
    //        this.fav.push(this.id[index]);
    //        console.log("fav : ",this.fav);
    //       console.log("+++++id+++++", this.id[index]);
    //       console.log("+++++id+++++", this.favoritelist[index]);
    //       // this.$set(this.id, index, "");
    //       console.log("++++++++++", this.customerid);

    //       this.$firestore
    //         .collection("favorite")
    //         .get()
    //         .then(querySnapshot => {
    //           querySnapshot.forEach(doc => {
    //             if (doc.data().customerid == this.customerid) {

    //               this.updatefire(doc.data(), doc.id, this.id[index]);
    //             } else {
    //               this.addfire(this.customerid, this.id[index]);
    //             }
    //           });
    //         })
    //         .then(this.$set(this.id, index, ""));

    //     },
    //     updatefire(data, id, ind) {
    //       console.log(id,"............");
    //        this.$firestore
    //         .collection("favorite")
    //         .doc(id)
    //         .update({
    //           haircutid: this.fav,

    //         })

    //     },
    //     addfire(cusid, id) {
    //       this.$firestore
    //         .collection("favorite")
    //         .add({
    //           customerid: cusid,
    //           haircutid: [id],

    //         })

    //     },
    hasfav(id) {
      console.log("id", id);
      console.log("this fav ", this.fav);
      
      for(let i=0;i<=this.fav.length;i++){
        console.log("if ",this.fav[i]);
        if(this.fav[i] == id){
          
     return true
        }

      }
      return false
    },
    pic(id) {
      console.log(id);
      this.$store.commit("cfind", id);
    },
    back() {
      this.$router.push({
        name: "Maincustomer"
      });
    }
  }
};
</script>

<style>
.search {
  padding: 5%;
}
.cardfav {
  width: 100%;
}

.sizeimg1 {
  width: 100%;
  height: 200px;
}

.filter {
  size: 150%;
}
</style>
