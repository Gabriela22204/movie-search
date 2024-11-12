import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
//components
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Checkbox from 'primevue/checkbox';
import Card from 'primevue/card';

import 'primevue/resources/themes/saga-blue/theme.css'; 
import 'primevue/resources/primevue.min.css';  // Estilos globais
import 'primeicons/primeicons.css';  
import VeeValidate from 'vee-validate';

import "./assets/main.css";

const app = createApp(App);
app.use(PrimeVue, { theme: Aura})
app.use(VeeValidate)

// global name modified
app.component('AppButton', Button)
app.component('AppInputText', InputText)
app.component('AppFloatLabel', FloatLabel)
app.component('AppCheckbox', Checkbox)
app.component('AppCard', Card)


app.mount('#app')
