const app = Vue.createApp({
   data() {
    return {
        hidden1: true,
        hidden2: false,
        hidden3: false,
        posts: [
            {
                title: 'First Article',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ipsum perferendis doloribus voluptate, architecto soluta unde modi',
                author: 'John Paulo Gapal'
            },
            {
                title: 'Second Article',
                description: 'Two of the same boats ipsum dolor sit amet, consectetur adipisicing elit. Eos ipsum perferendis doloribus voluptate, architecto soluta unde modi',
                author: 'John Doe'
            },
            {
                title: 'Third Article',
                description: 'Three of the change path dolor sit amet, consectetur adipisicing elit. Eos ipsum perferendis doloribus voluptate, architecto soluta unde modi',
                author: 'Jane the Pain'
            }
        ]
    }
   },
   methods: {
    changeHidden1() {
        this.hidden1 = true
        this.hidden2 = false
        this.hidden3 = false
        anime({
            targets: '.hidden-1',
            opacity: 1,
            duration: 2000,
            delay: 500,
        });
        anime({
            targets: '.hidden-2',
            opacity: 0,
        });
        anime({
            targets: '.hidden-3',
            opacity: 0,
        });
        
    },
    changeHidden2() {
        this.hidden1 = false
        this.hidden2 = true
        this.hidden3 = false
        anime({
            targets: '.hidden-1',
            opacity: 0,
        });
        anime({
            targets: '.hidden-2',
            opacity: 1,
            duration: 2000,
            delay: 500,
        });
        anime({
            targets: '.hidden-3',
            opacity: 0,
        });
        
    },
    changeHidden3() {
        this.hidden1 = false
        this.hidden2 = false
        this.hidden3 = true
        anime({
            targets: '.hidden-1',
            opacity: 0,
        });
        anime({
            targets: '.hidden-2',
            opacity: 0,
        });
        anime({
            targets: '.hidden-3',
            opacity: 1,
            duration: 2000,
            delay: 500,
        });
        
    },
   }
})

app.mount('#app')