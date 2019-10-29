<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    })
  }
</script>