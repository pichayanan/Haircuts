<template>
  <q-page class="bg-grey-2">
    <q-toolbar class="bg-grey-2 text-black">
      <q-btn flat round dense icon="keyboard_backspace" @click="back">
        <!-- <q-badge floating color="red">2</q-badge> -->
      </q-btn>
      <q-toolbar-title>
        Haircuts
      </q-toolbar-title>
    </q-toolbar>
    <div>
      <div class="search column small-gutter">
        <q-input
          rounded
          outlined
          color="dark"
          full-width
          v-model="search"
          debounce="500"
          placeholder="Search"
          :dense="true"
        >
          <template v-slot:append>
            <q-icon @click="Search" name="search"></q-icon>
          </template>
        </q-input>
      </div>
      <div id="q-app">
        <div class="q-px-md q-gutter-md row  ">
          <q-icon
            name="ion-md-options"
            class="text-black"
            style="font-size: 2rem;"
          />
          <q-btn
            color="white"
            rounded
            text-color="black"
            label="Short"
            size="md"
            padding="xs"
          ></q-btn>
          <q-btn
            padding="xs"
            size="md"
            color="primary"
            rounded
            label="Long"
          ></q-btn>
          <q-btn
            padding="xs"
            size="md"
            color="secondary"
            rounded
            label="Undercut"
          ></q-btn>
          <q-btn
            padding="xs"
            size="md"
            color="amber"
            glossy
            label="Amber"
            rounded
          ></q-btn>
        </div>
      </div>
    </div>
    <br />

    <!-- <div
        class="q-pa-lg row justify-center items-start q-gutter-xl showport"
        v-for="(data, index) in photos"
        :key="index"
      >
        <q-img class="sizeimg" :src="data"></q-img>
      </div> -->
    <!-- <div>{{index}}</div> -->
    <div class="row q-gutter-xl justify-center  ">
      <div
        class="col-4 justifly-center"
        v-for="(data, index) in photos"
        :key="index"
      >
        <q-img @click="pic(id[index])" class="sizeimg" :src="data" />
        <!-- <div>{{ id }}</div> -->
      </div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-fab icon="fas fa-cut" direction="up" color="dark">
        <q-fab-action
          @click="onClickedit"
          color="warning"
          icon="person_add"
        ></q-fab-action>
        <q-fab-action
          @click="onClicktime"
          color="warning"
          icon="calendar_today"
        ></q-fab-action>
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      photos: [],
      id: [],
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      console.log("portfolio");
      this.$firestore
        .collection("portfolio")
        .where("haircuttype", "==", this.$router.currentRoute.params.id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // this.show.push(doc.data());
            // console.log(doc.id, " => ", doc.data().photos);
            this.photos.push(doc.data().photos[0]);
            // console.log(doc.id);
            this.id.push(doc.id);
<<<<<<< HEAD
=======

>>>>>>> customer
            // console.log(doc.data());
            // console.log(this.show);
          });
        });
      // console.log("llpplp: ", this.id);
      console.log(this.photos);
    },
    Search() {
      console.log(this.search);
    },
    onClickedit() {
      this.$router.push({
        name: "EditprofileCustomer"
      });
    },
    onClicktime() {},
    pic(id) {
      console.log(id);
      this.$router.push({
        name: "DetailsCustomer",
        params: {
          id: id
        }
      });
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
/* .showport {
} */
<<<<<<< HEAD
=======

>>>>>>> customer
.sizeimg {
  width: 100%;
  height: 100%;
}
.filter {
  size: 150%;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> customer
