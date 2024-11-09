<template>
    <header class="header-container">
      <div data-layout="wrapper" class="header-container-element">
        <div data-layout="item" class="header-item">
          <a role="link" class="" href="/">
            <img src="/public/icons/site.logo.png" class="header-logo" alt="Netflix Logo">
            <h1>Netflix</h1>
          </a>
        </div>

      </div>
    </header>
</template>

<script>
export default {
    name:'HeaderPage',
};
</script>


<style scoped>
.header {
  display: flex;
  align-items: left;
  padding: 10px;
  background-color: transparent;
}

.logo {
  width: 100px; 
  height: auto;  
  margin-right: 20px;  /* Space between logo and title */
}

h1 {
  font-size: 24px;
  color: #333;
  margin: 0;
}
</style>