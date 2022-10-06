Vue.createApp({
  data(){
      return{
          post:{
              pj_name:"",
              pj_Tagline:"",
              pj_Tech:"",
              pj_Desc:""
          }
          
      }
  },
  methods:{
      postPj(){
          axios.post('api.crya.me/project/uploadProject', {
              pname:pj_name,
              shortTagline:pj_Tagline,
              planguage:pj_Tech,
              introduction:pj_Desc
          })
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });
      }
  }
}).mount('.content')