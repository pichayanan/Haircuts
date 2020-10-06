<template>
  <q-page class="bg-grey-2">
    <q-toolbar class="bg-grey-7 text-white">
      <q-btn flat round dense icon="keyboard_backspace" @click="back()">
        <!-- <q-badge floating color="red">2</q-badge> -->
      </q-btn>
      <q-toolbar-title> PORTFOLIO </q-toolbar-title>
    </q-toolbar>

    <!-- test -->
    <div class="col-12 justify-center row q-mt-md q-gutter-md">
      <div class="col-5 col-md" v-for="n in 4" :key="n">
        <image-file-picker
          :src="photoURL[0].photo"  
          :index="n"
          @imageSelected="imageSelected"
        />
      </div>
    </div>
    
    <div class="row justify-center">
      <div class="q-pa-md row">
        <q-btn-dropdown color="black" class="selecting" label="HAIRCUT TYPE">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Photos</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
      <div class="q-pa-md row">
        <q-btn-dropdown color="black" class="selecting" label="FACE TYPE">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Photos</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
    <div class="row justify-center"></div>
  </q-page>
</template>

<script>
import { uploadImage } from "../../API/api";
import firebaseUploader from "components/FirebaseUploader";
import ImageFilePicker from "components/ImageFilePicker.vue";

export default {
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
.addphoto {
  height: 160px;
  width: 120px;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
}
.coverphoto {
  height: 160px;
  width: 120px;
}
.selecting {
  margin-left: 35px;
  margin-top: 20px;
}
</style>