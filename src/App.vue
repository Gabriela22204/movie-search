<template><div>
  <img ref="/src/assets/bg.png">

    <div id="logo">
  <img ref="/src/assets/logo.png">
</div>
  <div id="app">
    <div class="Login-container">
      
     
      
      
      
      <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.</p>

      <p>As informações recolhidas pelo Google reCAPTCHA estão sujeitas à <a href="https://policies.google.com/privacy">Política de Privacidade</a> e <a href="https://policies.google.com/terms">Termos de Uso</a>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).</p>
    </div>
    <LoginPage />
    
  </div>
</div>
</template>

<script>
import LoginPage from './components/LoginPage.vue';

export default {
  name: 'App',
  components: {
    LoginPage,
  },
   
};


</script>

