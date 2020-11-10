<template>
  <div>
    <div class="row justify-center q-pa-sm">
      <q-img class="logoHaircuts" :src="logo" />
      <div class="logout fixed-right q-pr-xl" @click="logout">LOGOUT</div>
    </div>

    <!-- <div class="q-xs">
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        :autoplay="autoplay"
        height="250px"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ></q-carousel-slide>
      </q-carousel>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "AdminHeader",
  data() {
    return {
      show: [],
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
    logout() {
      console.log("Logout");
      this.$router.push({
        name: "loginadmin",
      });
    },
  },
  mounted() {
    this.getlogo();
  },
};
</script>

<style>
.logoHaircuts {
  width: 150px;
}
.logout {
  color: white;
  padding-top: 33px;
  text-decoration: underline;
}
</style>