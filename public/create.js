var app = new Vue({
    el: '#app',
    data: {
        title: '',
        body: '',
        sections: [],
    },
    created() {
        this.getSections();
    },
    methods: {
        async getSections() {
            try {
                let response = await axios.get("/api/sections");
                this.sections = response.data;
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        async createSection() {
            try {
                let response = await axios.post('/api/sections', {
                    title: this.title,
                    body: this.body
                });
            } catch (err) {
                console.log(err)
            }
        }
    }
});