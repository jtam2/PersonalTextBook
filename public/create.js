var app = new Vue({
    el: '#app',
    data: {
        structure: [],
        structures: null
    },
    created() {
        // this.getSections();
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
        addHeader(){
            this.structure.push({header: ''})
        },
        addBody(){
            this.structure.push({body: ''})
        },
        addCode(){
            this.structure.push({code:''})
        },
        async createSection() {
            try {
                let response = await axios.post('/api/structure', {
                    structure: this.structure
                });
            } catch (err) {
                console.log(err)
            }
        }

    }
});