const app = new Vue({
    el: '#app',
    data:{
      email: [],
    },
    created() {
  
      for (let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) =>{
            this.email.push(res.data.response);
            console.log(this.email)
          })
      }
    
    },
  })

// https://flynn.boolean.careers/exercises/api/random/mail