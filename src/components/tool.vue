<template>
  <q-footer bordered class="bg-dark text-white">
    <q-tabs
      no-caps
      active-color="white"
      indicator-color="transparent"
      v-model="tab"
    >
      <q-tab name="home" icon="home" @click="home"> </q-tab>
      <q-tab name="calendar" icon="calendar_today" @click="calendar"></q-tab>
      <q-tab
        name="notification"
        icon="notifications_active"
        @click="notification"
      ></q-tab>
      <q-tab name="setting" icon="person_add" @click="edit"> </q-tab>
    </q-tabs>
  </q-footer>
</template>

<script>
export default {
  data() {
    return {
      tab: "setting"
    };
  },
  methods: {
    edit() {
      this.$router.push({
        name: "EditprofileCustomer"
      });
    },
    home() {
      this.$router.push({
        name: "Maincustomer"
      });
    },
    
  }
};
</script>

<style></style>
