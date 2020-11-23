<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  mounted() {
    this.$messaging
      .requestPermission()
      .then(() => {
        console.log("Permission granted");
      })
      .catch(() => {
        console.log("Error permission");
      });

    this.$messaging
      .getToken({
        vapidKey:
          "BGUFPPM728Nxe5fBA5wlQbofDNrjRqCjc6FXaqsEHRNkumskO6FoBcsc1Qwnb7m28MU-1aSHo_IQQleiFqDCooQ"
      })
      .then(currentToken => {
        if (currentToken) {
          console.log(currentToken);
        } else {
          // Show permission request.
          console.log(
            "No registration token available. Request permission to generate one."
          );
          // Show permission UI.
        }
      })
      .catch(err => {
        console.log("An error occurred while retrieving token. ", err);
      });
    this.$messaging.onMessage(payload => {
      console.log("Message received. ", payload);
      // [START_EXCLUDE]
      // Update the UI to include the received message.

      // [END_EXCLUDE]
    });

    // setTimeout(() => {
    //   this.$router.push({ name: "logincustomer" });
    // }, 5000);
  }
};
</script>

<style>
.sizeimg {
  width: 100%;
  height: 163px;
}
</style>
