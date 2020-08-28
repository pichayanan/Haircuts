<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      right: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: "login" });
    }, 6000);
  }
};
</script>
