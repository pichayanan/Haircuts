<template>
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
</template>

<script>
export default {
  name: "tool",
  methods: {
    onClickedit() {
      this.$router.push({
        name: "EditprofileCustomer"
      });
    },
    onClicktime() {}
  }
};
</script>

<style></style>
