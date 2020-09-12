<template>
  <q-page class="bg-white">
    <div class="row justify-center">
      <q-img class="logoHaircuts" :src="logo" :ratio="1" />

      <div class="tag">START WORKING WITH US</div>

      <q-card class="full-width" >
        <q-tabs
          v-model="tab"
          dense
          class="bg-black text-grey"
          color="black"
          active-color="white"
          indicator-color="white"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mobile" label="MOBILE NUMBER"></q-tab>
          <q-tab name="otp" label="OTP"></q-tab>
        </q-tabs>

        <q-separator></q-separator>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mobile">
            <div class="text-h8">Please put your phone number</div>
            <!-- ----------------------------------input phone number-------------------------------------- -->
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

              <div class="requestoptbutton col-4 text-center q-mt-sm">
                <q-btn
                  flat
                  rounded
                  style="color:#bda13c"
                  @click="sendVerifyCode"
                  label="Resquest OTP"
                ></q-btn>
              </div>
              <div class="col-4 text-center q-mt-sm">
                <div id="recaptcha-container" class="text-center"></div>
              </div>
            </div>
            <!-- ----------------------------------input phone number-------------------------------------- -->
          </q-tab-panel>

          <q-tab-panel name="otp">
            <div class="text-h8">Please put your OTP</div>
            <!-- ----------------------------------input OTP-------------------------------------- -->
            <div class="mobile text-center">
              <q-input
                clearable
                filled
                color="black"
                bg-color="white"
                label="ex. xxx-xxx"
                :rules="[val => !!val || 'Please put your OTP']"
                class="row"
              ></q-input>

              <div class="row justify-center text-center q-mt-sm confirmbutton">
                <q-btn
                  rounded
                  class="full-width"
                  color="black"
                  @click="signInWithAuthCode"
                  icon
                  label="CONFIRM"
                />
              </div>
              
            </div>
            <!-- ----------------------------------input OTP-------------------------------------- -->
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      logo: "",
      tab: "mobile",
      telno: "",
    };
  },
  methods: {
    confirm() {
      // this.tab = "otp";
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
    // -----------------------------Recapt-----------------------------
    sendVerifyCode() {
      console.log("sendVerifyCode");
      // this.$firebase.auth().useDeviceLanguage();
      this.submitPhoneNumberAuth();
      this.tab = "otp";
    },
    submitPhoneNumberAuth() {
      this.$firebase.auth().useDeviceLanguage();

      window.recaptchaVerifier = new this.$firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("submitPhoneNumberAuth");
          },
        }
      );

      var phoneNumber = "+66" + this.telno;
      console.log();
      var appVerifier = window.recaptchaVerifier;
      this.$firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          this.capchaVerified = true;
          window.confirmationResult = confirmationResult;
          this.$router.push({
            name: "confirmcode",
            params: { nextUrl: this.$route.params.nextUrl },
          });
          //console.log(hello);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signInWithAuthCode() {
      var code = this.confirmCode;
      window.confirmationResult
        .confirm(code)
        .then((result) => {
          let user = result.user;
          this.$router.push({ path: this.$route.params.nextUrl });
        })
        .catch((error) => {
          let errorMessage = error.message;
          if (error.code == "auth/invalid-verification-code") {
            this.confirmCode = "";
            this.$refs.code.focus();
            errorMessage = "รหัสผ่านจาก SMS ไม่ถูกต้องกรุณาลองใหม่อีกครั้ง";
          }
          this.$q.notify({
            color: "warning",
            position: "bottom",
            message: errorMessage,
            icon: "fas fa-check-circle",
          });
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
  position: absolute;
  bottom: 530px;
  left: 100px;
  width: 325px;
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

.requestoptbutton {
  text-align: center;
}
.confirmbutton{
  text-align: center;
}
</style>
