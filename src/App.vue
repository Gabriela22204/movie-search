

<template>
  <div>
      <img ref="/src/assets/bg.png">
  </div>
  <div>
    <HeaderPage />
    <main>
      <slot></slot>
    </main>
  </div>
  
  <div id="app">
    <div class="Login-container">
      <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.</p>

      <p>As informações recolhidas pelo Google reCAPTCHA estão sujeitas à <a href="https://policies.google.com/privacy">Política de Privacidade</a> e <a href="https://policies.google.com/terms">Termos de Uso</a>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).</p>
    </div>
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from './components/LoginPage.vue';
import HeaderPage from './components/HeaderPage.vue';

export default {
  name: 'App',
  components: {
    LoginPage, HeaderPage,
  },
   
};
</script>

<style>
/* Add background image to the entire page */
html, body {
  margin: 0;
  padding: 0;
  height: 100%; /* Ensure body takes up the full height of the viewport */
  background-image: url('/public/icons/bg.png'); /* Path to the image */
  background-size: cover; /* Cover the entire page */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
}

#app {
  text-align: center;
  color: white; /* Make text white to contrast the background */
  height: 100%; /* Ensure content also takes full height */
}
</style>