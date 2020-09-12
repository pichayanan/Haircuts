<template>
  <q-page>
    <!-- --------------Header--------------- -->

    <q-item class="row header">
      <q-item-section avatar class="col-3">
        <q-avatar class="profilepic">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
        </q-avatar>
      </q-item-section>

      <q-item-section class="col-7">
        <q-item-label class="row text-h6 text-weight-bold">Somsak Tatphom</q-item-label>
        <q-item-label class="row" caption>฿400</q-item-label>
      </q-item-section>

      <div class="col-2 text-grey q-gutter-md edit" style="font-size: 2em">
        <q-icon name="create" />
      </div>
    </q-item>

    <q-card class="bg-dark blackcard">
      <div class="reservehead justify-center row">
        <div class="text-h6 col-5 text-center">
          <br />RESERVATION
        </div>
        <div class="q-pa-md col-7" style="max-width: 300px">
          <q-input dark v-model="date" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="date" class="bg-grey-10 text-white">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <!-- <q-card class="bg-dark"> -->
      <div class="reserve row justify-center">
        <div class="q-pa-md q-gutter-sm">
          <u class="text">MORNING</u>
          <br />
          <br />
          <div class="row">
            <q-btn class="reserve" outline style="color: white;" label="  9 AM" />
            <q-btn class="reserve" outline style="color: white;" label="10 AM" />
            <q-btn class="reserve" outline style="color: white;" label="11 AM" />
            <q-btn class="reserve" outline style="color: white;" label="12 PM" />
          </div>
          <br />
          <u class="text">AFTERNOON</u>
          <br />
          <br />
          <div class="row">
            <q-btn class="reserve" outline style="color: white;" label="  1 PM" />
            <q-btn class="reserve" outline style="color: white;" label="  2 PM" />
            <q-btn class="reserve" outline style="color: white;" label="  3 PM" />
            <q-btn class="reserve" outline style="color: white;" label="  4 PM" />
          </div>
          <div class="row">
            <q-btn class="reserve" outline style="color: white;" label="  5 PM" />
            <q-btn class="reserve" outline style="color: white;" label="  6 PM" />
            <q-btn class="reserve" outline style="color: white;" label="  7 PM" />
            <q-btn class="reserve" outline style="color: white;" label="  8 PM" />
          </div>
          <br />
        </div>
      </div>
    </q-card>

    <div class="haircut row">
      <div class="text-h6 col-5 text-center">
        <br />HAIRCUTS
      </div>
    </div>
    <div class="row portfolio">
      <q-card class="photos my-card col-4">
        <q-img src="https://cdn.quasar.dev/img/avatar2.jpg" basic>
          <div class="absolute-bottom text-subtitle2 text-center">Undercut</div>
        </q-img>
      </q-card>

      <q-card class="photos my-card col-4">
        <q-img src="https://cdn.quasar.dev/img/avatar2.jpg" basic>
          <div class="absolute-bottom text-subtitle2 text-center">Undercut</div>
        </q-img>
      </q-card>

      <div class="photos col-3 addbutton">
        <q-icon size="80px" name="add_circle_outline" />
      </div>

      
      


    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      date: "2020/09/04"
    };
  }
  
};
</script>

<style>
.profilepic {
  width: 70px;
  height: 70px;
}
.reserve {
  /* padding-left: 20px; */
  margin-right: 5px;
}
.reservehead {
  margin-top: 10px;
  margin-left: 30px;
  color: white;
}
.edit {
  /* margin-right: 5px; */
  margin-top: 15px;
}
.portfolio {
  margin-top: 20px;
}
.photos {
  margin-left: 10px;
}
.addbutton {
  text-align: right;
  margin-top: 40px;
}
.header {
  margin-top: 30px;
  margin-left: 5px;
}
.blackcard {
  margin-top: 30px;
  margin-right: 15px;
  margin-left: 15px;
}
.text {
  color: white;
}
</style>