var data = {
       title: 'The VueJS Instance',
       showParagraph: false
    }
    
var vm1 = new Vue({
    el: '#app1',
    data: data,
    watch: {
        title: function(value){
            alert('Title changed, new value: ' + value)
        }
     },
    methods:{
       show: function(){
           this.showParagraph = true;
           this.updateTitle('The VueJS Instance (updated)')
        //    using $refs to change the value of an element
           this.$refs.myButton.innerText = 'Text'
       },
       updateTitle: function(title){
           this.title = title
       }
    },
    computed:{
        lowercaseTitle: function(){
            return this.title.toLowerCase();
        }
    }
})

console.log(vm1.$data === data)
vm1.$refs.appHeading.innerText = 'Another Change'

setTimeout(function(){
    vm1.title = 'Changed by Timer'
}, 4000)

// creating multiple Vue instance
var vm2 = new Vue({
    el: '#app2',
    data:{
        title: 'The Second VueJS Instance'
    },
    methods:{
        onChange: function(){
            vm1.title = 'Changed'
        }
    }
})

var vm3 = new Vue({
    template: '<h1>Hello!</h1>'
})

vm3.$mount('#app3')

// alternative syntax to the$mount function above
// vm3.$mount()
// document.getElementById('app3').appendChild(vm3.$el)