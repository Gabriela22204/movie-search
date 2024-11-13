<template>
  <div class="data" lang="pt-BR" dir="ltr">
    <!-- header -->
    <Header>
      <HeaderPage />
    </Header>

    <!-- content -->
    <div class="content">
    
      <LoginPage />
    
    </div>
  
  </div> 
</template>

<!-- <script setup>


</script> -->


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
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-image: url('/public/icons/bg.png'); 
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat; 
}

#app {
  text-align: center;
  color: white; 
  height: 100%; 
}
</style>