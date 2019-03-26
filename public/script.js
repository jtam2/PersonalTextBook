var app = new Vue({
    el: '#app',
    data: {
      sections: [],
    },
    created() {
      this.getItems();
    },
    methods: {
      async getItems() {
        try {
          let response = await axios.get("/api/sections");
          this.sections = response.data;
          return true;
        } catch (error) {
          console.log(error);
        }
      },
    }
  });