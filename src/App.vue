<template>
  <div id="app">
    <div class="Login-container">
      <h1>Entrar</h1>
      <input v-model="userLogin" type="text" placeholder="Email ou número de celular" @input="userLogin"/>
      <input v-model="Password" type="password" placeholder="Senha" @input="Password"/>

      <button></button>
    </div>
  </div>
</template>

<script>

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
