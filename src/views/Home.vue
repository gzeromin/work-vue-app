<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
const axios = require("axios");

export default {
  name: "Home",
  data() {
    return {
      text: "before"
    }
  },
  methods: {
    async getTest() {
      const result = await axios.get("/api");
      return result.data;
    }
  },
};
</script>
