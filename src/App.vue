<template>
  <div id="app">
    <div class="search-container">
      <h1>Movie Search</h1>
      <input v-model="searchQuery" type="text" placeholder="Search for a movie..." @input="searchMovie"/>

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
