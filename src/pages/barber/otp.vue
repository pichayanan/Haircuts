<template>
  <q-page class="bg-white">
    <div class="justify-center">
      <q-img class="logoHaircuts" :src="logo" :ratio="1" />

      <div class="tag">START WORKING WITH US</div>

      <q-tabs v-model="tab" no-caps class="bg-black text-white shadow-2">
        <q-tab name="number" label="MOBILE NUMBER" />
        <q-tab name="otp" label="OTP" />
      </q-tabs>
    </div>

    <div class="mobile justify-center text-center">
      <q-input
        clearable
        filled
        color="black"
        bg-color="white"
        v-model="telno"
        label="ex. 061178XXXX"
        :rules="[val => !!val || 'Please put your mobile number']"
      ></q-input>

      <!-- ----------------------------------AJ KORN-------------------------------------- -->
      <div class="confirmbutton col-4 text-center q-mt-sm">
        <q-btn
          class="full-width"
          color="black"
          @click="confirm"
          icon=""
          label="CONFIRM"
        />
      </div>
      <!-- <div class="col-4 text-center q-mt-sm">
        <div id="recaptcha-container" class="text-center"></div>
      </div> -->
      <!-- ----------------------------------AJ KORN-------------------------------------- -->


    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      logo: "",
      tab: "otp",
    };
  },
  methods: {
     confirm() {
      console.log("click");
      this.$router.push({ name: "confirm" });
    },
    getlogo() {
      console.log("logo");
      this.$firestore
        .collection("logo")
        .where("name", "==", "logoblack")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().logoblack);
            this.logo = doc.data().logo;
          });
        });
    },
  },
  mounted() {
    this.getlogo();
  },

  // ----------------------------------AJ KORN--------------------------------------

  // sendVerifyCode() {
  //     console.log("sendVerifyCode");
  //     this.submitPhoneNumberAuth();
  //   },
  //   submitPhoneNumberAuth() {
  //     var phoneNumber = "+66" + this.telno;
  //     var appVerifier = window.recaptchaVerifier;
  //     this.$firebase
  //       .auth()
  //       .signInWithPhoneNumber(phoneNumber, appVerifier)
  //       .then(confirmationResult => {
  //         this.capchaVerified = true;
  //         window.confirmationResult = confirmationResult;
  //         this.$router.push({
  //           name: "confirmcode",
  //           params: { nextUrl: this.$route.params.nextUrl }
  //         });
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   }
  // }

  // ----------------------------------AJ KORN--------------------------------------


};
</script>

<style>
.logoHaircuts {
  position: absolute;
  bottom: 550px;
  left: 110px;
  width: 270px;
}

.tag {
  padding-top: 38%;
  text-align: center;
  padding-bottom: 5%;
}

.mobile {
  font-size: 18px;
  padding-top: 10%;
}

.confirmtbutton{
  text-align: center;

}
</style>
