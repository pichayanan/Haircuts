<template>
  <q-page class="bg-grey-2">
    <div>
      <div class="search row">
        <div class="q-gutter-md">
          <q-input
            rounded
            outlined
            color="dark"
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
      <div class="row q-gutter-md justify-center q-pt-xl">
        <div
          class="col-5 showport"
          v-for="(data, index) in photos"
          :key="index"
        >
          <q-img class="sizeimg" :src="data"></q-img>
          <!-- <div>{{index}}</div> -->
        </div>
      </div>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab icon="add" direction="up" color="dark">
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
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      photos: []
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
            // console.log(doc.data());
            // console.log(this.show);
          });
        });
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
    onClicktime() {}
  }
};
</script>

<style>
.search {
  position: absolute;
  padding-top: 5%;
  left: 20%;
}
.showport {
  /* padding-top: 15%; */
}
.sizeimg {
  width: 100%;
  height: 100%;
}
</style>
