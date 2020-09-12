<template>
  <q-page class="bg-dark">
    <div class="row justify-center headbox">
      <q-item-section avatar class>
        <q-avatar class="profilepic row text-center">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
        </q-avatar>
        <u class="row changeprofile" caption>Change Picture</u>
      </q-item-section>
    </div>

    <div class="justify-center q-gutter-md form text-white" style="max-width: 300px">
      <q-input dark v-model="Firstname" label="Firstname *"></q-input>
      <q-input dark v-model="Lastname" label="Lastname *"></q-input>
      <q-input dark :readonly="readonly" :disable="disable" v-model="Mobile" label="Mobile"></q-input>
      <q-input dark v-model="Email" label="Email (optional)"></q-input>
      <q-input dark v-model="Location" label="Location"></q-input>
    </div>

    <div class="row justify-center savebutton">
      <q-btn outline color="white" class @click="savebutton" label="SAVE" />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      Firstname: "",
      Lastname: "",
      Mobile: "",
      Email: "",
      Location: "",
      readonly: true,
      disable: true,
    };
  },
  methods: {
    savebutton() {
      //helloworld
    },
  },
};
</script>

<style>
.profilepic {
  margin-bottom: 10px;
  width: 130px;
  height: 130px;
}
.headbox {
  padding-top: 50px;
}
.changeprofile {
  margin-left: 10%;
  font-size: 15px;
  color: white;
}
.form {
  padding-top: 20px;
  margin-left: 5%;
  color: white;
}
.savebutton {
  margin-top: 50px;
}
</style>