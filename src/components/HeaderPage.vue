<template>
    <header class="header-container">
      <div data-layout="wrapper" class="header-container-element">
        <div data-layout="item" class="header-item">
          <a role="link" class="" href="/">
            <img src="/icons/logo.png"  class="header-logo" alt="Netflix Logo">
           
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
.header-container {
  display: flex;
  align-items: left;
  background-color: transparent;
}

.logo {
  width: 100px; 
  height: auto;  
  margin-right: 20px;  /* Space between logo and title */
}
.header-logo {
    width: 100px;
}

h1 {
  font-size: 24px;
  color: #333;
  margin: 0;
}
</style>