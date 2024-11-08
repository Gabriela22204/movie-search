<template>
    <div class="login-container">
        <div class="login-box">
            <h1 class="login-title">Entrar</h1>
            <input
                type="email"
                v-model="email"
                placeholder="Email ou número de telefone"
                @input="resetError"
                class="login-input"
            />
            
            <input 
                type="password" 
                v-model="password" 
                placeholder="Senha" 
                @input="resetError"
                class="login-input" 
            />
            <button @click="handleLogin" class="login-button">Entrar</button>
            <p class="login-text">OU</p>

            <button @click="handleLogin" class="code-access-button">Usar um código de acesso</button>

            <p v-if="error" class="error-message">{{ error }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
            error: '',
        };
    },
    methods: {
        hangleLogin(){
            if (this.email === 'user@example.com' && this.password === 'password123') {
                alert('Login bem-sucedido');
                // redirect to another page
            } else {
                this.error = 'Email ou senha incorretos.';
            }
        },
        resetError() {
            this.error = '';//reset error when user start typing
        }
    }
};
</script>


<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #413d3d;
}

.login-box {
  width: 350px;
  padding: 40px;
  background-color: #1b1b1b;
  border-radius: 10px;
  text-align: center;
  color: white;
}

.login-title {
  font-size: 28px;
  margin-bottom: 20px;
}

.login-input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #222;
  color: white;
  font-size: 16px;
}

.login-button {
  width: 100%;
  padding: 14px;
  background-color: #e50914;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
}

.login-button:hover {
  background-color: #c60b14;
}

.code-access-button {
    width: 100%;
    padding: 14px;
    background-color: #363434;
    color: white;
    border: none;
    font-size: 18px;
    cursor: pointer;
    border-radius: 4px;
    
}

.code-access-button:hover {
  background-color: #272626;
}

.error-message {
  color: red;
  margin-top: 15px;
  font-size: 14px;
}
</style>
