<template>
  <q-layout view="hHh lpR fFf">
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "Barber",
  // mounted() {
  //    this.$router.push({
  //           name: "startpage",
  //         });

  // },
  mounted() {
  //   this.$messaging
  //     .requestPermission()
  //     .then(() => {
  //       console.log("Permission granted");
  //     })
  //     .catch(() => {
  //       console.log("Error permission");
  //     });

  //   this.$messaging
  //     .getToken({ vapidKey: "BGUFPPM728Nxe5fBA5wlQbofDNrjRqCjc6FXaqsEHRNkumskO6FoBcsc1Qwnb7m28MU-1aSHo_IQQleiFqDCooQ" })
  //     .then((currentToken) => {
  //       if (currentToken) {
  //          console.log(currentToken);
  //       } else {
  //         // Show permission request.
  //         console.log(
  //           "No registration token available. Request permission to generate one."
  //         );
         
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("An error occurred while retrieving token. ", err);

  //     });

  //     this.$messaging.onMessage((payload) => {
  //         console.log("Message recieved", payload);
  //         this.alert= true;
  //     })
  },
}
</script>
