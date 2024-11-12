import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Checkbox from 'primevue/checkbox';
import Card from 'primevue/card';
import 'primevue/resources/themes/saga-blue/theme.css'; 
import 'primevue/resources/primevue.min.css';  // Estilos globais
import 'primeicons/primeicons.css';  
import VeeValidate from 'vee-validate'; 

const app = createApp(App);
app.use(PrimeVue, { theme: Aura})
app.use(VeeValidate)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('FloatLabel', FloatLabel)
app.component('Checkbox', Checkbox)
app.component('Card', Card)


app.mount('#app')
