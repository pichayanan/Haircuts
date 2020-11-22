<template>
  <q-page class="bg-grey-2">
    <q-toolbar class="bg-white text-black">
      <q-btn flat round dense icon="keyboard_backspace" @click="back()">
      </q-btn>
      <q-toolbar-title> PORTFOLIO </q-toolbar-title>
    </q-toolbar>

    <div class="justify-center row q-pt-md q-gutter-md">
      <div class="col-5 col-md" v-for="(photo, index) in photoURL" :key="index">
        <image-file-picker
          :src="photo"
          @imageSelected="imageSelected"
        />
      </div>
      <!-- <div class="col-5 col-md">
        <image-file-picker
          :src="photoURL[0]"
          @imageSelected="imageSelected"
        />
      </div>
      <div class="col-5 col-md">
        <image-file-picker
          :src="photoURL[1]"
          @imageSelected="imageSelected"
        />
      </div>
      <div class="col-5 col-md">
        <image-file-picker
          :src="photoURL[2]"
          @imageSelected="imageSelected"
        />
      </div>
      <div class="col-5 col-md">
        <image-file-picker
          :src="photoURL[3]"
          @imageSelected="imageSelected"
        />
      </div> -->

    </div>


    <div class="justify-start q-px-md text-h6 spacing">Face Type</div>
    <div class="row">
      <div class="col-2" v-for="(data, index) in obj" :key="index">
        <q-img
          class="facetyperow"
          :style="`background-image: url(${data.pic});`"
        ></q-img>
        <div class="check">
          <q-radio dense v-model="data.name" :val="data.check"></q-radio>
        </div>
      </div>
    </div>

    <div class="row justify-center spacing">
      <div class="col-5 text-subsitle2 justify-start q-px-md text-h6 spacing">
        Haircut Type
      </div>
      <div class="col-7">
        <q-select standout="bg-grey-6 text-white" v-model="haircuttype" :options="hairoptions" label="" />
      </div>

      <div class="col-5 text-subsitle2 justify-start q-px-md text-h6 spacing">
        Price
      </div>
      <div class="col-7">
        <q-input standout="bg-grey-6 text-white" v-model="price" label="" />
      </div>

      <!-- <div class="col-5 text-subsitle2 justify-start q-px-md text-h6 spacing">
        Tag
      </div> -->
      <!-- <div class="col-7">
        <q-input standout="bg-grey-6 text-white" v-model="tag" label="" />
      </div> -->
    </div>
    <div class="row justify-center">
      <q-btn class="text-black addbtn" rounded color="white" label="ADD" @click="addportfolio" />
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
    firebaseUploader,
    ImageFilePicker,
  },
  data() {
    return {
      geturl: [],
      text: ["Front","RIGHT","BACK","LEFT"],
      photoURL: [
        "https://icon-library.com/images/add-picture-icon/add-picture-icon-16.jpg",
        "https://icon-library.com/images/add-picture-icon/add-picture-icon-16.jpg",
        "https://icon-library.com/images/add-picture-icon/add-picture-icon-16.jpg",
        "https://icon-library.com/images/add-picture-icon/add-picture-icon-16.jpg",
        ],
      // photoURL: [],
      // URL1: "https://icon-library.com/images/add-picture-icon/add-picture-icon-16.jpg",
      // URL2: "https://icon-library.com/images/add-picture-icon/add-picture-icon-16.jpg",
      // URL3: "https://icon-library.com/images/add-picture-icon/add-picture-icon-16.jpg",
      // URL4: "https://icon-library.com/images/add-picture-icon/add-picture-icon-16.jpg",
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
      // tag: "",
      facetype: "",
      haircuttype:"",
      hairoptions: [ 
        '001 BUZZ CUT', '002 FRINGE CUT', '003 CREW CUT', '004 POMPADOUR', '005 SIDE PARTED', '006 UNDERCUT (MEN)', '007 FAUX HAWK', '008 QUIFF CUT', 
        '009 SHAVED CUT', '010 BUN', '011 UNDERCUT (WOMEN)', '012 BANGS', '013 LAYER', '014 MEDIUM', '015 BOB', '016 LONG'
      ],
    };
  },
  methods: {
    getdata() {
      this.$firestore
        .collection("barber")
        .where("telno", "==", this.$firebase.auth().currentUser.phoneNumber)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.barberid = doc.data().barberid;
            console.log(this.barberid);
          });
        });
    },
    imageSelected(base64, index) {
      this.photoURL[index] = base64;
    // this.URL1 = base64;
    // this.URL2 = base64;
    // this.URL3 = base64;
    // this.URL4 = base64;
 
    },
    async addportfolio(){
       
      const image1 = this.photoURL[0];
      const image2 = this.photoURL[1];
      const image3 = this.photoURL[2];
      const image4 = this.photoURL[3];

      this.photoURL = await uploadImage(image1, image2, image3, image4);
      // this.URL1 = await uploadImage(image);
      // this.URL2 = await uploadImage(image);
      // this.URL3 = await uploadImage(image);
      // this.URL4 = await uploadImage(image);

      // this.photoURL.push(this.URL1,this.URL2,this.URL3,this.URL4);
      console.log("OK CAN! :", this.photoURL);

       let splitoptions = this.haircuttype.split(" ");
       console.log("adding", splitoptions[0]);
       console.log(this.facetype);
       console.log(photoUrl)
      this.$firestore
        .collection("portfolio")
        .add({
          photos : photoUrl,
          // facetype : this.obj.name,
          haircuttype: splitoptions[0],
          barberid : this.barberid,
          price: this.price,
          // tag: this.tag
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
           console.log("Go to portfolio page");
           this.$router.push({
                  name: "portfoliobarber",
             });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
    back() {
      console.log("back");
      this.$router.push({
        name: "portfoliobarber",
      });
    },
  },
  mounted() {
    this.getdata();
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
.addbtn {
  width: 50%;
}
</style>