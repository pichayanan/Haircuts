<template>
  <q-page class="bg-dark">
    <q-toolbar class="bg-dark text-white">
      <q-btn flat round dense icon="keyboard_backspace" @click="back">
        <!-- <q-badge floating color="red">2</q-badge> -->
      </q-btn>
    </q-toolbar>
    <!-- --------------Header--------------- -->
    <q-card class="bg-white blackcard">
      <div class="row">
        <div class=" col-5  row start justify-center">
          <q-img class="show" :src="this.$store.state.customertest.bpic" />
        </div>

        <!-- <q-card class="text-h7 bg-grey-3 detailcard"> -->
        <div class="col-5  q-pt-md justify-center">
          <h class="text-weight-bold">Artist </h>
          <br />
          &nbsp;&nbsp;{{ this.$store.state.customertest.bname }}
          {{ this.$store.state.customertest.lname }}
          <br />
          <h class="text-weight-bold ">place </h>
          <br />
          &nbsp;&nbsp;{{ this.$store.state.customertest.location }}
        </div>
      </div>
      <!-- <q-card class="bg-dark"> -->

      <div class="row ">
        <q-btn color="grey-3" text-color="black" class="btn-fixed-width">{{
          this.$store.state.customertest.cselect
        }}</q-btn>
      </div>
      <div class="row">
        <div
          class="col-4 q-py-sm q-pl-sm"
          v-for="(Stime, index) in obj"
          :key="index"
        >
          <q-btn
            v-if="operationtime[index] == true"
            class="choosetime"
            @click="test(index,Stime.lable)"
          >
            {{ Stime.lable }}
          </q-btn>
          <q-btn
            v-else
            class="choosetime bg-red"
    
          >
            {{ Stime.lable }}
          </q-btn>
        </div>
      </div>
      <div class=" q-px-md q-py-md">
        <q-btn color="red" round size="xs"> </q-btn>
        <h8>&nbsp; Unavaliable time</h8>
      </div>
    </q-card>

    <!-- <div class="row justify-center">
      <div class=" q-pa-lg">
        <q-btn
          unelevated
          rounded
          color="white"
          text-color="black"
          label="confirm"
          @click="confirm(selecttime)"
        ></q-btn>
      </div>
    </div> -->
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
      date: "2020/09/04",
  
      
      timeTableid: "",
      selecttime: "",
      operationtime: [],
      complete: false,
      obj: [
        {
          lable: "9 AM",
          status: ""
        },
        {
          lable: "10 AM",
          status: ""
        },
        {
          lable: "11 AM",

          status: ""
        },
        {
          lable: "12 PM",

          status: ""
        },
        {
          lable: "1 PM",

          status: ""
        },
        {
          lable: "2 PM",

          status: ""
        },
        {
          lable: "3 PM",

          status: ""
        },
        {
          lable: "4 PM",

          status: ""
        },
        {
          lable: "5 PM",

          status: ""
        },
        {
          lable: "6 PM",

          status: ""
        },
        {
          lable: "7 PM",

          status: ""
        },
        {
          lable: "8 PM",

          status: ""
        },
        {
          lable: "9 PM",

          status: ""
        }
      ]
    };
  },
  methods: {
    test(index,lable) {
      this.selecttime = lable;
      console.log(this.selecttime);
     this.$set(this.operationtime, index, false) 
      console.log("**********",this.operationtime);
         
         this.$firestore
        .collection("Timetable")
        .doc(this.timeTableid)
        .update({
          Time: this.operationtime,
          
        }) 
        this.confirm(lable);
    },
    confirm(time) {
      this.$firestore
        .collection("reservation")
        .add({
          barberF: this.$store.state.customertest.bname,
          barberL: this.$store.state.customertest.lname,
          customerName:this.$store.state.customertest.cname,
          price: this.$store.state.customertest.price,
          location: this.$store.state.customertest.location,
          date: this.$store.state.customertest.cselect,
          time: time,
          haircutName: this.$store.state.customertest.type,
          typeId: this.$store.state.customertest.id,
          phone: this.$store.state.customertest.telno,
          complete: this.complete,
          cmail: this.$firebase.auth().currentUser.email,

        })
        .then(
          this.$store.commit("cTimereserve",time )
         
        )
        
    },
    back() {
      this.$router.push({
        name: "ReserveCustomer"
      });
    },
    getdata() {
      this.$firestore
        .collection("Timetable")
        .where("Date", "==", this.$store.state.customertest.cselect)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(async doc => {
            await this.test1(doc.data().Time);
                  this.timeTableid = doc.id;
                  console.log("/////////////",this.timeTableid);
            // this.operationtime = doc.data().operationtime;
            // this.statusC(this.operationtime);
          });
          // this.insertid(this.barberid);
          // console.log(this.operationtime);
        });
      // czjvjsodvjsdjmc;
    },
    test1(operation) {
     this.operationtime = operation;
    }
  },
  mounted() {
    this.getdata();
  }
};
</script>

<style>
.profilepicture {
  width: 70px;
  height: 70px;
}



.photos {
  margin-left: 10px;
}
.blackcard {
  margin-top: 10%;
  margin-right: 15px;
  margin-left: 15px;
  padding-top: 8%;
  padding-left: 3%;
}
.text {
  color: black;
}
.whitetext {
  color: white;
}
.choosetime {
  width: 80%;
  height: 90%;
}

.bgColor {
  /* color: aquamarine; */
  background-color: red;
}

.btn-fixed-width {
  width: 320px;
  margin-top: 6%;
  margin-bottom: 6%;
}
@media screen and (min-width: 1024px) {
  .profilepicture {
  width: 70px;
  height: 70px;
}

.blackcard {
  margin-top: 0%;
  margin-right: 15px;
  margin-left: 15px;
  
  padding-left: 3%;
}
.text {
  color: black;
}
.whitetext {
  color: white;
}
.choosetime {
  width: 80%;
  height: 90%;
}

.bgColor {
  /* color: aquamarine; */
  background-color: red;
}

.btn-fixed-width {
  width: 320px;
  margin-top: 6%;
  margin-bottom: 6%;
}
}
</style>
