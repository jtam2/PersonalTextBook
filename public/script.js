var app = new Vue({
    el: '#app',
    data: {
      structure: null,
      structures: null
    },
    created() {
      this.getItems();
    },
    methods: {
      async getItems() {
        try {
          let response = await axios.get("/api/structure/");
          console.log(response.data)
          this.structures = response.data;
          this.structure = this.structures[0]
          return true;
        } catch (error) {
          console.log(error);
        }
      },
      async displayDoc(id){
        try {
          let res = await axios.get("/api/structure/"+id)
          console.log(res.data)
          this.structure = res.data
        } catch (err) {
          console.log(error);
        }
      }
    }
  });