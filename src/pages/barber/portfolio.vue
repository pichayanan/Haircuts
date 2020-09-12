<template>
  <q-page class="bg-dark">
    <div class="row justify-center header">
      <h5>Portfolio</h5>
    </div>
    <div class="row justify-center">
        <div class="row justify-center">
            <!-- <q-btn outline style="color: black;" icon="add_photo_alternate" class="coverphoto" /> -->
            <div class="col-6"><q-btn outline style="color: white;" icon="add_photo_alternate" class="addphoto" label="FRONT" /></div>
            <div class="col-6"><q-btn outline style="color: white;" icon="add_photo_alternate" class="addphoto" label="BACK"  /></div>
        </div>
        <div class="row justify-center">
            
            <div class="col-6"><q-btn outline style="color: white;" icon="add_photo_alternate" class="addphoto" label="LEFT"  /></div>
            <div class="col-6"><q-btn outline style="color: white;" icon="add_photo_alternate" class="addphoto" label="RIGHT"  /></div>
        </div>
    </div>
    <div class="row justify-center">
      <!-- <div class="col-6"> -->
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
      <!-- </div> -->
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
export default {};
</script>

<style>
.addphoto{
    height: 160px;
    width: 120px;
    margin-top: 20px;
    margin-left: 15px;
    margin-right: 15px;
 
}
.coverphoto{
   
    height: 160px;
    width: 120px;

}
.selecting{
    margin-left: 35px;
    margin-top: 20px;
}
</style>