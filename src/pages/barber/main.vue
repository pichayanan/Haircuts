<template>
  <q-page>
    <!-- --------------Header--------------- -->
    <div class="q-pa-md q-gutter-sm">
      <q-banner class>
        <!-- --------------Profile pic--------------- -->
        <q-btn round flat>
          <q-avatar>
            <img
              rounded
              src="https://i.ytimg.com/vi/Be-IWz7Q2rM/maxresdefault.jpg"
              style="width: 100px; height: 64px"
            />
          </q-avatar>
        </q-btn>
Hi there! I'm Kevin.
        <template v-slot:action>
          <q-btn flat label="EDIT" />
        </template>
      </q-banner>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style>
</style>