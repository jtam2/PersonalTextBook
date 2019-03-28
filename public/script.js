var app = new Vue({
    el: '#app',
    data: {
      structure: undefined,
    },
    created() {
      this.getItems();
    },
    methods: {
      async getItems() {
        try {
          let response = await axios.get("/api/sections");
          console.log(response.data)
          this.structure = response.data;
          return true;
        } catch (error) {
          console.log(error);
        }
      },
    }
  });