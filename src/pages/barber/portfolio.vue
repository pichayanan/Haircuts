<template>
  <q-page class="bg-grey-2">
    <!-- <q-toolbar class="bg-grey-7 text-white">
      <q-btn flat round dense icon="keyboard_backspace" @click="back()">
      </q-btn>
      <q-toolbar-title> PORTFOLIO </q-toolbar-title>
    </q-toolbar> -->

    <!-- test -->
    <div class="col-12 justify-center row q-pt-md q-gutter-md">
      <div class="col-5 col-md" v-for="n in 4" :key="n">
        <image-file-picker
          :src="photoURL[0].photo"
          :index="n"
          @imageSelected="imageSelected"
        />
      </div>
    </div>


    <div class="justify-start q-px-md text-h6 spacing">Face Type</div>
    <div class="row">
      <div class="col-2" v-for="(test, index) in obj" :key="index">
        <q-img
          class="facetyperow"
          :style="`background-image: url(${test.pic});`"
        ></q-img>
        <div class="check">
          <q-radio dense v-model="test.name" :val="test.check"></q-radio>
        </div>
      </div>
    </div>

    <div class="row justify-center spacing">
      <div class="col-5 text-subsitle2 justify-start q-px-md text-h6 spacing">
        Haircut Type
      </div>
      <div class="col-7">
        <q-select standout="bg-teal text-white" v-model="haircutype" :options="hairoptions" label="" />
      </div>

      <div class="col-5 text-subsitle2 justify-start q-px-md text-h6 spacing">
        Price
      </div>
      <div class="col-7">
        <q-input standout="bg-teal text-white" v-model="price" label="" />
      </div>

      <div class="col-5 text-subsitle2 justify-start q-px-md text-h6 spacing">
        Tag
      </div>
      <div class="col-7">
        <q-input standout="bg-teal text-white" v-model="tag" label="" />
      </div>
    </div>
  <BarberNavbar/>
  </q-page>
</template>

<script>
import BarberNavbar from "components/BarberNavbar.vue";
import { uploadImage } from "../../API/api";
import firebaseUploader from "components/FirebaseUploader";
import ImageFilePicker from "components/ImageFilePicker.vue";


export default {
  components: {
    BarberNavbar,
  },
  data() {
    return {
      photoURL: [
        {
          photo:
            "https://icon-library.com/images/add-picture-icon/add-picture-icon-16.jpg",
          text: "Front",
        },
        {
          photo:
            "https://icon-library.com/images/add-picture-icon/add-picture-icon-16.jpg",
          text: "RIGHT",
        },
        {
          photo:
            "https://icon-library.com/images/add-picture-icon/add-picture-icon-16.jpg",
          text: "BACK",
        },
        {
          photo:
            "https://icon-library.com/images/add-picture-icon/add-picture-icon-16.jpg",
          text: "LEFT",
        },
      ],
      obj: [
        {
          pic:
            "https://firebasestorage.googleapis.com/v0/b/haircuts-10a55.appspot.com/o/facetype%2Fdiamond.jpg?alt=media&token=0653120f-66ac-439c-bab8-2ce5c0d4d77e",
          name: "diamond",
          check: "",
        },
        {
          pic:
            "https://firebasestorage.googleapis.com/v0/b/haircuts-10a55.appspot.com/o/facetype%2Fheart.jpg?alt=media&token=2b0df55b-59a4-4382-8051-18adf2116da3",
          name: "heart",
          check: "",
        },
        {
          pic:
            "https://firebasestorage.googleapis.com/v0/b/haircuts-10a55.appspot.com/o/facetype%2Foval.jpg?alt=media&token=27f0f49a-6f91-4024-a09a-ddfe35d22822",
          name: "oval",
          check: "",
        },
        {
          pic:
            "https://firebasestorage.googleapis.com/v0/b/haircuts-10a55.appspot.com/o/facetype%2Frectangle.jpg?alt=media&token=7eb482b4-0cb3-4bf3-9d6b-54b39716c83d",
          name: "rectangle",
          check: "",
        },
        {
          pic:
            "https://firebasestorage.googleapis.com/v0/b/haircuts-10a55.appspot.com/o/facetype%2Fround.jpg?alt=media&token=a4d468b6-75e8-47fe-8584-b7ebf8ed0fbd",
          name: "round",
          check: "",
        },
        {
          pic:
            "https://firebasestorage.googleapis.com/v0/b/haircuts-10a55.appspot.com/o/facetype%2Fsquare.jpg?alt=media&token=2e5599f7-6c96-415f-b972-e6e2131a3072",
          name: "square",
          check: "",
        },
      ],
      price: "",
      tag: "",
      facetype: "",
      haircutype:"",
      hairoptions: [
        '001 BUZZ CUT', '002 FRINGE CUT', '003 CREW CUT', '004 POMPADOUR', '005 SIDE PARTED', '006 UNDERCUT', '007 FAUX HAWK', '008 QUIFF CUT', 
        '009 SHAVED CUT', '010 BUN', '011 UNDERCUT', '012 BANGS', '013 LAYER', '014 MEDIUM', '015 BOB', '016 LONG'
      ],
    };
  },
  methods: {
    imageSelected(base64) {
      this.photoURL = base64;
    },
    back() {
      console.log("back");
      this.$router.push({
        name: "mainbarber",
      });
    },
  },
  components: {
    firebaseUploader,
    ImageFilePicker,
  },
};
</script>

<style>
.facetyperow {
  height: 100px;
  width: 100px;
  background-size: contain;
  background-repeat: no-repeat;
}
.addphoto {
  height: 160px;
  width: 120px;
  /* margin-top: 20px; */
  margin-left: 15px;
  margin-right: 15px;
}
.spacing {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
}
</style>