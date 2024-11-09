<template>
    <div class="default">
        <div class="login-page-container">
            <!-- titulo -->
            <header class="header-title">
                <h1 class="default-login-title">Entrar</h1>
            </header>
            <!-- formulario -->
            <form class="form-Entrar">
                <!-- input 1 -->
                <div class="elemento1">
                    <div class="login-container1">
                        <!-- put label inside of input field -->
                        <label for="email" class="lbl-email">
                            Email ou número de celular
                        </label>
                        <!-- input field -->
                        <div class="input-container">
                            <input
                                type="email"
                                value="email"
                                v-model="email"
                                placeholder="Email ou número de telefone"
                                @input="resetError"
                                class="login-input"
                            />
                        </div>
                    </div>
                </div>
                <!-- input 2 -->
                <div class="elemento2">
                    <div class="login-container2">
                        <!-- put label inside of input field -->
                        <label for="password" class="lbl-password">
                            Senha
                        </label>
                        <!-- input field -->
                        <div class="input-container">
                            <input 
                                type="password"
                                value="password" 
                                v-model="password" 
                                placeholder="Senha" 
                                @input="resetError"
                                class="login-input" 
                            />
                        </div>
                    </div>
                </div>

                <!-- button Entrar-->
                <button @click="handleLogin" class="login-button" type="submit">Entrar</button>
            </form>
        </div>
    </div>
<!-- rascunho -->          
            
            
            <div class="login-text-container">
                <p class="login-text">OU</p>
            </div>
            

            <button @click="handleLogin" class="code-access-button">Usar um código de acesso</button>
            
            <div class="forgot-password-container">
                <a class="forgot-password-link" href="https:www.netflix.com/LoginHelp">Esqueceu a senha?</a>
            </div>

            <div class="remember-container">
                
                <input type="checkbox" id="checkbox" v-model="checked" />
                <label class="container-checkbox" for="checkbox">{{ checked }}</label>
                <span class="checkmark"></span>
                
                <p class="checkbox-text">Lembre-se de mim</p>
            </div>

            <div class="sub-container">
                <p class="sub-text">Novo por aqui?</p>
                <a class="sub-link" href="https:www.netflix.com">Assine agora</a>
            </div>
            
            <div>
                <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.</p>
                <a href=" ">Saiba mais</a>
            </div>
            <div>
                <p>As informações recolhidas pelo Google reCAPTCHA estão sujeitas à <a href="https://policies.google.com/privacy">Política de Privacidade</a> e <a href="https://policies.google.com/terms">Termos de Uso</a>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).</p>

            </div>

            <p v-if="error" class="error-message">{{ error }}</p>
        
    
    
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
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
}  

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
  
}

.login-box {
  width: 350px;
  padding: 40px;
  background-color: #000000;
  opacity: none;
  border-radius: 10px;
  text-align: center;
  color: white;
}

.login-title {
  font-size: 28px;
  margin-left: 3px;
  margin-bottom: 20px;
  display: flex;
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

.forgot-password-container {
    width: 100%;
    padding: 14px;
    text-align: center;
    margin: 10px -10px 10px;
    
}

.forgot-password-link, .checkbox-text, .sub-text, .sub-link {
    color:white;
    text-decoration: none;
    font-size: 18px;
}

.forgot-password-link:hover , .sub-link:hover {
    text-decoration: underline;
    color:rgb(163, 156, 156);
}

#checkbox {
    padding: 14px;
    width: 100%;
    border-color:#1b1b1b;
    border: 2px;
    
}

#checkbox:hover {
    cursor: pointer;
    border-color:white;
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

.remember-container {
    display: flex;
    width: 100%;
    padding: 0 14 14 0;
    align-items: center;
    justify-content: space-between;
}

.sub-container {
    display: flex;
    width: 100%;
    padding: 14px;
    margin: 10px 0 10px;
    align-items: center;
    justify-content: space-between;
}
</style>
