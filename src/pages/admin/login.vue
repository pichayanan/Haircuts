<template>
  <q-page>
    <!-- <div class="stage"> -->
    <!-- <div class="row">
      <div class="col-4"></div>
      <div class="col-4 justify-center">
        <q-img class="firstpage" :src="logo" :ratio="1" />
      </div>
      <div class="col-4"></div>
    </div>
    <br /> -->

    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 justify-center">
        <q-card dark bordered class="bg-dark login q-pa-md">
          <q-card-section class="row justify-center">
            <div class="col-6">
              <q-img class="logo" :src="logo" :ratio="1" />
            </div>
            <div class="col-6 input ">
              <div class="row ">
                <div class="text-subtitle2">USERNAME :</div>
                <q-input
                  class="inputT"
                  dark
                  standout
                  bottom-slot
                  v-model="username"
                  label="Username"
                >
                </q-input>
              </div>
              <br />
              <br />
              <div class="row">
                <div class="text-subtitle2">PASSWORD :</div>
                <q-input
                  class="inputT"
                  dark
                  standout
                  bottom-slot
                  v-model="password"
                  label="password"
                >
                </q-input>
              </div>
              <div class="loginadmin row">
                <q-btn
                  @click="loginadmin"
                  color="white"
                  size="md"
                  class="q-px-sm"
                  rounded
                  text-color="black"
                  label="Log-in"
                />
              </div>

              <!-- <q-dialog v-model="dialog" :position="position">
                <q-card style="width: 350px">

                  <q-card-section class="row items-center no-wrap">
                    
                      <div class="text-weight-bold">Please enter correct Username and Password</div>
                  
                  </q-card-section>
                </q-card>
              </q-dialog> -->
              <br />
            </div>

            <!-- <div class="row justify-center"> -->
            <!-- <div class="loginadmin row">
                <q-btn
                  @click="loginadminbtn"
                  color="white"
                  size="md"
                  class="q-px-sm"
                  rounded
                  text-color="black"
                  label="Log-in"
                />
              </div> -->
            <!-- </div> -->
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="stage">
      <div class="layer one"></div>
      <div class="layer two"></div>
      <div class="layer three"></div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      logo: "",
      username: "",
      password: ""
    };
  },
  methods: {
    // login() {
    //   console.log("click");
    //   this.$router.push({ name: "logincustomer",  });
    // },
    getlogo() {
      console.log("logo Admin");
      this.$firestore
        .collection("logo")
        .where("name", "==", "logo-text-white")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().logo);
            this.logo = doc.data().logo;
          });
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
        });
    },
    loginadmin() {
      if (this.username == "adminza" && this.password == "658") {
        this.$router.push({
<<<<<<< HEAD
          name: "mainadmin"
        });
      } else {
        this.$q.notify({
          position: "top",
          message: "Please enter correct username or password!",
          color: "warning"
        });
      }
=======
        name: "mainadmin",
      });
>>>>>>> customer
    }
  },
  mounted() {
    this.getlogo();
  }
};
</script>

<style lang="scss">
.text-subtitle2 {
  padding-top: 5%;
  padding-right: 5%;
}
.loginadmin {
  margin-top: 10%;
  margin-left: 20%;
}
.logo {
  width: 350px;
  height: 175px;

  margin-top: 20%;
}
.login {
  height: 80%;
  width: 100%;
  margin-top: 20%;
}
.input {
  width: 50%;
  padding-left: 5%;
  padding-top: 10%;
}

.stage {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: white;
}
div.stage div.layer {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-repeat: repeat-x;
}
div.stage div.layer.one {
  background-position: 0px calc(100% - 80px);
  background-image: url("https://www.bmarshall.ca/codepen-assets/waves/sprite.svg#wave-one");
  background-size: 1000px auto;
  -webkit-animation: waveToLeft 9s infinite linear, bob1 3s infinite alternate;
  animation: waveToLeft 9s infinite linear, bob1 3s infinite alternate;
}
div.stage div.layer.two {
  background-position: 0px calc(100% - 50px);
  background-image: url("https://www.bmarshall.ca/codepen-assets/waves/sprite.svg#wave-two");
  background-size: 1000px auto;
  -webkit-animation: waveToLeft 7s -3s infinite linear,
    bob2 3s infinite alternate;
  animation: waveToLeft 7s -3s infinite linear, bob2 3s infinite alternate;
}
div.stage div.layer.three {
  background-position: 300px 100%;
  background-image: url("https://www.bmarshall.ca/codepen-assets/waves/sprite.svg#wave-three");
  background-size: 1000px auto;
  -webkit-animation: waveToLeft 4s -2s infinite linear,
    bob3 3s infinite alternate;
  animation: waveToLeft 4s -2s infinite linear, bob3 3s infinite alternate;
}

@-webkit-keyframes waveToLeft {
  from {
    background-position-x: 1000px;
  }
  to {
    background-position-x: 0px;
  }
}

@keyframes waveToLeft {
  from {
    background-position-x: 1000px;
  }
  to {
    background-position-x: 0px;
  }
}
@-webkit-keyframes bob1 {
  from {
    background-position-y: calc(20% - 70px);
  }
  to {
    background-position-y: calc(0% + 50px);
  }
}
@keyframes bob1 {
  from {
    background-position-y: calc(20% - 70px);
  }
  to {
    background-position-y: calc(0% + 50px);
  }
}
@-webkit-keyframes bob2 {
  from {
    background-position-y: calc(20% - 40px);
  }
  to {
    background-position-y: calc(0% + 50px);
  }
}
@keyframes bob2 {
  from {
    background-position-y: calc(20% - 40px);
  }
  to {
    background-position-y: calc(0% + 50px);
  }
}
@-webkit-keyframes bob3 {
  from {
    background-position-y: calc(20%);
  }
  to {
    background-position-y: calc(0% + 50px);
  }
}
@keyframes bob3 {
  from {
    background-position-y: calc(20%);
  }
  to {
    background-position-y: calc(0% + 50px);
  }
}
</style>
