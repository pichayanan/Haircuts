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

    <div class="row q-gutter-xl justify-center">
      <div
        class="col-4 justifly-center"
        v-for="(data, index) in this.$store.state.customertest.facetype"
        :key="index"
      >
        <q-img @click="pic(data.id)" class="sizeimg1" :src="data.photos" />
        <!-- <div>{{ id }}</div> -->
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
    tool,
  },
  computed: {
    ...mapGetters(["searchType"]),

    searchType: function () {
      console.log("searchTypeL: ", this.model);
      return this.getType(this.model);
    },
  },
  data() {
    return {
      search: "",
      photos: [],
      id: [],
      model: "",
      facetype: "",
      options: [
        "oval",
        "round",
        "diamond",
        "heart",
        "rectangle",
        "square",
        "all",
      ],
    };
  },
  mounted() {
    this.$store.commit("C_TESTtype");
    this.getdata();
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
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.facetype = doc.data().facetype;
            console.log("facetype : ", this.facetype);
          
            let rec = {
              facetype: doc.data().facetype,
              photos: doc.data().photos[0],
              id: doc.id,
            };
            this.$store.commit("TESTtype", rec);
          });
        });
      // console.log("llpplp: ", this.id);
      console.log(this.photos);
    },

    pic(id) {
      console.log(id);
      this.$store.commit("cfind", id);
    },
    back() {
      this.$router.push({
        name: "Maincustomer",
      });
    },
  },
};
</script>

<style>
.search {
  padding: 5%;
}

/* .showport {
} */

.sizeimg1 {
  width: 100%;
  height: 100%;
}

.filter {
  size: 150%;
}
</style>
