<template>
  <q-page class="bg-white">
    <div class="justify-center">
      <q-img class="logoHaircuts" :src="logo" :ratio="1" />

      <div class="tag">START WORKING WITH US</div>

      <q-card>
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
                flat rounded 
                style="color:#bda13c" 
                @click="requestotp"
                label="Resquest OTP">
                </q-btn>
              </div>
              <!-- <div class="col-4 text-center q-mt-sm">
              <div id="recaptcha-container" class="text-center"></div>
              </div>-->
            </div>
            <!-- ----------------------------------input phone number-------------------------------------- -->
          </q-tab-panel>

          <q-tab-panel name="otp">
            <div class="text-h8">Please put your OTP</div>
            <!-- ----------------------------------input OTP-------------------------------------- -->
            <div class="mobile justify-center text-center">
              <q-input
                clearable
                filled
                color="black"
                bg-color="white"
                label="ex. xxx-xxx"
                :rules="[val => !!val || 'Please put your OTP']"
              ></q-input>

              <div class="confirmbutton col-4 text-center q-mt-sm">
                <q-btn 
                    rounded 
                    class="full-width" 
                    color="black" 
                    @click="confirm" 
                    icon label="CONFIRM" 
                />
              </div>
              <!-- <div class="col-4 text-center q-mt-sm">
              <div id="recaptcha-container" class="text-center"></div>
              </div>-->
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
    requestotp() {
      this.tab = "otp";
    },
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
</style>
