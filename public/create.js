var app = new Vue({
    el: '#app',
    data: {
        structure: []
    },
    created() {
        this.getSections();
    },
    methods: {
        async getSections() {
            try {
                let response = await axios.get("/api/sections");
                this.structure = response.data;
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        addHeader(){
            this.structure.push({header: 'TESTING'})
        },
        addBody(){
            this.structure.push({body: "This is the body. Did you know that I love pie"})
        },
        addCode(){
            this.structure.push({code:'THIS IS A code Snippet let a=b'})
        },
        async createSection() {
            try {
                let response = await axios.post('/api/sections', {
                    structure: this.structure
                });
            } catch (err) {
                console.log(err)
            }
        }
    }
});