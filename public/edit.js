var app = new Vue({
    el: '#app',
    data: {
        structure: null,
        structures: null,
    },
    created() {
        this.getSections();
    },
    methods: {
        async getSections() {
            try {
                let response = await axios.get("/api/structure");
                this.structures = response.data;
                this.structure = this.structures[0]
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        addHeader() {
            this.structure.structure.push({
                header: ''
            })
        },
        addBody() {
            this.structure.structure.push({
                body: ""
            })
        },
        addCode() {
            this.structure.structure.push({
                code: ''
            })
        },
        async del(id) {
            try {
                let resp = await axios.delete('/api/structure/' + id)
            } catch (err) {
                console.log(err)
            }

        },
        async save(id) {
            try {
                let resp = await axios.put('/api/structure/' + id, {
                    structure: this.structure
                })
            } catch (err) {
                console.log(err)
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