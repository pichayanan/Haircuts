<template>
  <div class="q-pa-md">
    <!-- <q-header bordered class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Quasar Framework
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->

    <q-footer bordered class="bg-white text-primary">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
        v-model="tab"
      >
        <q-tab name="main" label="Main" @click="main"/>
        <q-tab name="portfolio" label="Portfolio" @click="portfolio"/>
        <q-tab name="upcoming" label="Upcoming" @click="upcoming"/>
        <q-tab name="profile" label="Profile" @click="editprofile" />
      </q-tabs>

    </q-footer>

    <!-- <q-page-container>
      <q-page class="q-pa-md"> </q-page>
    </q-page-container> -->
  </div>
</template>

<script>
export default {
  name: "BarberNavbar",
  data() {
    return {
      tab: "main",
    };
  },
  methods: {
    main() {
      console.log("Go to edit main page");
      this.$router.push({
        name: "mainbarber",
      });
    },
    portfolio() {
      console.log("Go to portfolio page");
      this.$router.push({
        name: "portfoliobarber",
        // params: {tab: 'portfolio'}

      });
    },
    upcoming() {
      console.log("Go to upcoming page");
      this.$router.push({
        name: "upcoming",
        // params: {tab: 'upcoming'}

      });
    },
    editprofile() {
      console.log("Go to edit profile page");
      this.$router.push({
        name: "profilebarber",
        // params: {tab: 'profile'}        
      });
    },
  }
};
</script>
