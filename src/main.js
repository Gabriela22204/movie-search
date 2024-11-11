import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Card from 'primevue/card';
import 'primevue/resources/themes/saga-blue/theme.css'; 
import 'primevue/resources/primevue.min.css';  // Estilos globais
import 'primeicons/primeicons.css';  
import VeeValidate from 'vee-validate'; 

createApp(App)
.use(PrimeVue)
.use(VeeValidate)
.component('Button', Button)
.component('InputText', InputText)
.component('Checkbox', Checkbox)
.component('Card', Card)
.mount('#app')
