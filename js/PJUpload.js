Vue.createApp({
    data(){
        return{
            pj_name:"",
            pj_Tagline:"",
            pj_Tech:"",       
        }
    },
    methods:{
        postPj(){ 
            let intro = editor.getHtml();
            axios.post('project/uploadProject',
                "pname=" + this.pj_name +"&shortTagline=" + this.pj_Tagline +"&planguage=" + this.pj_Tech + "&introduction=" + intro
                ).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}).mount('.content')