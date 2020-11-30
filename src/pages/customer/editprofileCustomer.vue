<template>
  <q-page class="bg-dark">
    <div></div>
    <div class="row justify-center template">
      <q-avatar class="changepic">
        <image-file-picker
          class="profilepic"
          :src="url"
          @imageSelected="imageSelected"
        />
        <q-icon
          class="absolute all-pointer-events"
          size="32px"
          name="camera_alt"
          color="grey-2"
          style="bottom: 6px; right: 9px"
        >
          <q-tooltip>
            Tab profile picture to change
          </q-tooltip>
        </q-icon>
      </q-avatar>
    </div>

    <div class="justify-center q-gutter-md form text-white row q-pa-lg">
      <q-input
        class="col-12 col-md-5 col-sm-5"
        dark
        v-model="CName"
        label="Firstname Lastname *"
      ></q-input>
      <q-input
        class="col-12 col-md-5  col-sm-5"
        dark
        :readonly="readonly"
        :disable="disable"
        v-model="CMail"
        label="Email"
      ></q-input>
    </div>
    <div class="justify-center q-gutter-md form text-white row q-pa-lg">
      <q-input
        class="col-12 col-md-5  col-sm-5"
        dark
        :readonly="readonly"
        :disable="disable"
        v-model="CBirthday"
        label="Birthday"
      ></q-input>
      <q-input
        class="col-12 col-md-5  col-sm-5"
        dark
        :readonly="readonly"
        :disable="disable"
        v-model="gender"
        label="Gender"
      ></q-input>
    </div>

    <div class="row justify-center savebutton">
      <q-btn
        outline
        color="white"
        class
        @click="editprofile(CName)"
        label="SAVE"
      />
    </div>
    <div class="row justify-center logout">
      <q-btn outline color="red" class @click="logoutbutton" label="LOGOUT" />
    </div>
    <tool />
  </q-page>
</template>

<script>
import tool from "components/tool.vue";
import { uploadProfile } from "../../API/api";
import firebaseUploader from "components/FirebaseUploader.vue";
import ImageFilePicker from "components/ImageFilePickerC.vue";
export default {
  components: {
    tool
  },
  data() {
    return {
      model: null,
      CName: "",
      url: "",
      urlTest: "",
      CMail: "",
      CBirthday: "",
      gender: "",
      readonly: true,
      disable: true,
      getID: ""
    };
  },
  methods: {
    imageSelected(base64) {
      console.log("aaaa" + base64);
      this.url = base64;
    },
    // changepic() {
    //   console.log("hjujgjft");
    //   try {
    //     this.$q.loading.show();
    //     const image = this.url;
    //     if (image === this.url) {
    //       console.log("ใส่มาทำไหมน่ะ");
    //     } else if (typeof image === "string") {
    //       this.url = image;
    //     } else {
    //       this.url = uploadProfile(image);
    //       console.log("ได้แล้วนะ :", this.url);
    //     }
    //     this.$q.loading.hide();
    //   } catch (error) {
    //     console.log("catch");
    //   }
    // },
    async getdata() {
      await this.$firestore
        .collection("customer")
        .where("CMail", "==", this.$firebase.auth().currentUser.email)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(doc.id);
            this.getID = doc.id;
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().CName);
            this.CName = doc.data().CName;
            console.log(doc.id, " => ", doc.data().URL);
            this.url = doc.data().URL;
            // test
            this.urlTest = this.url;
            this.CMail = doc.data().CMail;
            this.CBirthday = doc.data().CBirthday;
            this.gender = doc.data().gender;
            console.log(this.CName);
          });
        });
    },
    async editprofile(CName) {
      this.$q.loading.show();
      const image = this.url;
      this.url = await uploadProfile(image);
      console.log("ได้แล้วนะ :", this.url);
      this.$firestore
        .collection("customer")
        .doc(this.getID)
        .update({
          CName: this.CName,
          URL: this.url
        })
        .then(docRef => {
          this.$q.loading.hide();
          this.$router.push({
            name: "Maincustomer"
          });
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });
    },
    logoutbutton() {
      this.$firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          console.log("Sign-out successful");
          this.$router.push({
            name: "logincustomer"
          });
        })
        .catch(error => {
          // An error happened.
          console.log("Error");
        });
    },
    back() {
      this.$router.back();
    }
  },
  components: {
    firebaseUploader,
    ImageFilePicker,
    tool
  },
  async mounted() {
    await this.getdata();
    console.log("finised getdata");
    // this.URL = this.URL;
    // this.CName = this.CName;
    // this.CMail = this.CMail;
    // this.CBirthday = this.CBirthday;
    // this.gender = this.gender;
    // console.log(this.$router.currentRoute.params.email);
    // this.check();
  }
};
</script>

<style>
/* .bgimg{
  background-image: url(../../images/edit.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 200%;
} */
.template {
  padding-top: 9%;
}
.headbox {
  padding-top: 5%;
}
.changepic {
  width: 130px;
  height: 130px;
}
.profilepic {
  /* margin-bottom: 10px; */
  width: 130px;
  height: 130px;
}
.changeprofile {
  margin-left: 10%;
  font-size: 15px;
  color: white;
}
.form {
  padding-top: 20px;
  /* margin-left: 5%; */
  color: white;
}
.savebutton {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>