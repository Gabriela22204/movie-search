<template><div>
  <img ref="/src/assets/bg.png">

    <div id="logo">
  <img ref="/src/assets/logo.png">
</div>
  <div id="app">
    <div class="Login-container">
      <h1>Entrar</h1>
      <input v-model="userLogin" type="text" placeholder="Email ou número de celular" @input="userLogin"/>
      <input v-model="Password" type="password" placeholder="Senha" @input="Password"/>
      
      <button></button>
      <p>OU</p>
      <button></button>
      <a href="https:www.netflix.com/LoginHelp">Esqueceu a senha?</a>
      <p>Lembre-se de mim</p>
      <p>Novo por aqui?</p>
      <a href="https:www.netflix.com">Assine agora</a>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
