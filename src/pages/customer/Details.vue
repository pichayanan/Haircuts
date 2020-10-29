<template>
  <q-page class="bg-grey-2">
    <q-toolbar class="bg-grey-2 text-black">
      <q-btn flat round dense icon="keyboard_backspace" @click="back">
        <!-- <q-badge floating color="red">2</q-badge> -->
      </q-btn>
    </q-toolbar>
    <div class=" row start justifly-center">
      <div class="col-6 q-pa-lg">
        <q-img class="show" :src="photo[0]" />
      </div>

      <!-- <q-card class="text-h7 bg-grey-3 detailcard"> -->
      <div class="col-6 q-pt-xl justify-center">
        <h class="text-weight-bold">Type : </h>{{ Name }}
        <br />
        <h class="text-weight-bold ">section : </h> 60 mins
        <br />
        <h class="text-weight-bold ">Price : </h>{{ price }} Baht
      </div>

      <!-- </q-card> -->
    </div>

    <div class=" row feature justifly-center q-pa-md q-gutter-xl">
      <div class="col-2 port">
        <q-img class="sizeimg" :src="photo[1]" />
      </div>
      <div class="col-2 port ">
        <q-img class="sizeimg" :src="photo[2]" />
      </div>
      <div class="col-2 port">
        <q-img class="sizeimg" :src="photo[3]" />
      </div>
      <!-- <div>{{index}}</div> -->
    </div>
    <div class=" justify-start q-px-md">
      <h class="text-weight-bold">FACE TYPE</h>
    </div>
    <div class="row">
      <div class="col-2" v-for="(test, index) in obj" :key="index">
        <q-img
          class="test112"
          :style="`background-image: url(${test.pic});`"
        ></q-img>
        <div class="check">
          <q-radio
            disable
            dense
            v-model="test.name"
            :val="test.check"
          ></q-radio>
        </div>
      </div>
    </div>
    <q-card class="bg-grey-2 q-ma-md">
      <div class=" row start justifly-center">
        <div class="col-6 q-pa-lg">
          <q-img class="show" :src="propic" />
        </div>

        <!-- <q-card class="text-h7 bg-grey-3 detailcard"> -->

        <div class="col-6 q-pt-lg justify-center">
          <h class="text-weight-bold">Artist </h>
          <br />
          &nbsp;&nbsp;{{ Fnameb }} {{ Lnameb }}
          <br />
          <h class="text-weight-bold ">place </h>
          <br />
          &nbsp;&nbsp;{{ location }}
        </div>

        <!-- </q-card> -->
      </div>
    </q-card>

    <!-- <div class="text-h1">{{ Fnameb }}</div> -->
    <div class="row justify-center">
      <!-- <q-btn
        @click="reserve"
        color="dark"
        rounded
        text-color="white"
        label="RESERVE"
      /> -->

      <q-btn
        unelevated
        rounded
        color="dark"
        text-color="white"
        label="RESERVE"
        @click="reserve(Fnameb,Lnameb,price,location,telno,propic)"
      ></q-btn>
    </div>

    <tool />
  </q-page>
</template>

<script>
import tool from "components/tool.vue";

export default {
  components: {
    tool
  },
  data() {
    return {
      shape: "line",
      photo: "",
      price: "",
      tag: "",
      barberid: "",
      Name: "",
      Fnameb: "",
      Lnameb: "",
      location: "",
      propic: "",
      facetype: "",
      telno: "",
      obj: [
        {
          pic:
            "https://firebasestorage.googleapis.com/v0/b/haircuts-10a55.appspot.com/o/facetype%2Fdiamond.jpg?alt=media&token=0653120f-66ac-439c-bab8-2ce5c0d4d77e",
          name: "diamond",
          check: ""
        },
        {
          pic:
            "https://firebasestorage.googleapis.com/v0/b/haircuts-10a55.appspot.com/o/facetype%2Fheart.jpg?alt=media&token=2b0df55b-59a4-4382-8051-18adf2116da3",
          name: "heart",
          check: ""
        },
        {
          pic:
            "https://firebasestorage.googleapis.com/v0/b/haircuts-10a55.appspot.com/o/facetype%2Foval.jpg?alt=media&token=27f0f49a-6f91-4024-a09a-ddfe35d22822",
          name: "oval",
          check: ""
        },
        {
          pic:
            "https://firebasestorage.googleapis.com/v0/b/haircuts-10a55.appspot.com/o/facetype%2Frectangle.jpg?alt=media&token=7eb482b4-0cb3-4bf3-9d6b-54b39716c83d",
          name: "rectangle",
          check: ""
        },
        {
          pic:
            "https://firebasestorage.googleapis.com/v0/b/haircuts-10a55.appspot.com/o/facetype%2Fround.jpg?alt=media&token=a4d468b6-75e8-47fe-8584-b7ebf8ed0fbd",
          name: "round",
          check: ""
        },
        {
          pic:
            "https://firebasestorage.googleapis.com/v0/b/haircuts-10a55.appspot.com/o/facetype%2Fsquare.jpg?alt=media&token=2e5599f7-6c96-415f-b972-e6e2131a3072",
          name: "square",
          check: ""
        }
      ]
    };
  },
  methods: {
    back() {
      this.$router.push({
        name: "findHaircut"
      });
    },
    reserve(Fnameb,lnameb,price,location,telno,propic) {
      // console.log("lplpl: ", oop);
      // conlog.log(this.Fnameb);

      this.$store.commit("cdetail",{Fnameb,lnameb,price,location,telno,propic} );
    },
    getdata() {
      let type = "";
      console.log(this.$store.state.customertest.id);
      this.$firestore
        .collection("portfolio")
        .doc(this.$store.state.customertest.id)
        .get()
        .then(doc => {
          if (doc.exists) {
            this.photo = doc.data().photos;
            type = doc.data().haircuttype;
            // console.log(doc.id, " => ", doc.data().price);
            this.price = doc.data().price;
            // console.log(doc.id, " => ", doc.data().tag);
            this.tag = doc.data().tag;
            this.barberid = doc.data().barberid;
            this.facetype = doc.data().facetype;
            this.checkTrue(this.facetype);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
          // console.log(this.photo);
        })
        .then(() => {
          this.$firestore
            .collection("haircut")
            .where("haircuttype", "==", type)
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                this.Name = doc.data().haircutname;
              });
              console.log(this.Name);
            });
        })
        .then(() => {
          this.$firestore
            .collection("barber")
            .where("barberid", "==", this.barberid)
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                this.Fnameb = doc.data().firstname;
                console.log("Fnameb:", this.Fnameb);
                this.Lnameb = doc.data().lastname;
                this.location = doc.data().location;
                this.propic = doc.data().profilepic;
                this.telno = doc.data().telno;
              });
            });
        });
      // console.log(this.show);
    },
    checkTrue(name) {
      console.log(name.length);
      for (let i = 0; i < this.obj.length; i++) {
        for (let x = 0; x < name.length; x++) {
          if (this.obj[i].name == name[x]) {
            console.log("true:", name[x]);
            this.obj[i].check = name[x];
          } else {
            console.log("false");
          }
        }
      }
    }
  },
  mounted() {
    this.getdata();
  }
};
</script>

<style>
.test112 {
  height: 100px;
  width: 100px;
  background-size: contain;
  background-repeat: no-repeat;
}
.sizeimg {
  height: 210px;
  width: 110px;
  margin-left: 4px;
}
.show {
  height: 100px;
  width: 100px;
  margin-left: 5%;
}
.feature {
  padding-top: 0%;
}
.check {
  padding-left: 35%;
  padding-top: 5%;
}
</style>
