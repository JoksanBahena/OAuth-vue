import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'

const CLIENT_ID = '501655210289-25eg3i5umqrjm5gufbpq1mnuds76enkk.apps.googleusercontent.com'
const app = createApp(App)
  .use(vue3GoogleLogin, {
    clientId: CLIENT_ID,

  })
app.use(router)

app.mount('#app')
