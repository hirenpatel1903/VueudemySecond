const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'finish the course and learn Vue!',
            vueLink: 'https://vuejs.org/guide/introduction.html'
        };
    }
});

app.mount('#user-goal');