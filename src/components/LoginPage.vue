<template>
    <div class="default">
        <div class="login-page-container">
            <!-- header -->
            <header class="header-title">
                <h1 class="default-login-title">Entrar</h1>
            </header>
            <!-- form -->
            <form class="form-Entrar" @submit.prevent="handleLogin">
                <!-- input 1 -->
                <div class="element1">
                    <div class="login-container1">
                        <!-- put label inside of input field -->
                        <FloatLabel variant="in">
                            <InputText id="in_label" v-model="value2" variant="filled" />
                            <label for="in_label">In Label</label>
                        </FloatLabel>
                        
                        <label for="email" class="lbl-email">
                            Email ou número de celular
                        </label>
                        <!-- input field -->
                        <div class="input-container">
                            <InputText
                                id="email"
                                v-model="email"
                                placeholder="Email ou número de telefone"
                                @input="resetError"
                                class="login-input"
                                :class="{'p-invalid': error}"
                            />
                        </div>
                    </div>
                </div>

                <!-- input 2 -->

                <div class="element2">
                    <div class="login-container2">
                       
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
                <button role="button" @click="handleLogin" class="login-submit-button" type="submit">Entrar</button>
                <!-- p1 element -->
                <p class="p1">OU</p>
                <!-- button Usar código de acesso -->
                <button role="button" @click="handleLogin" class="login-toggle-button" type="button">Usar um código de acesso</button>
                <!-- <a> element 'Esqueceu a senha?' -->
                <a role="link" class="login-help-link" href="https:www.netflix.com/LoginHelp">Esqueceu a senha?</a>
            </form>
            <!-- footer -->
            <footer class="default-footer">
                <div class="a">
                    <div class="remember-me-field-container">
                        <div class="control-wrapper">
                            <!-- checkbox remember me -->
                            <input type="checkbox" id="checkbox" name="rememberMe" v-model="checked">
                        </div>

                        <!-- label remember me -->
                         <label for="checkbox" class="default-label">
                            {{ checked }}
                         </label>
                    </div>
                </div>

                <!-- login sign up now -->
                <p class="login-sign-up-now">
                    "Novo por aqui?"
                    <a class target="_self" href="/">Assine agora</a>
                    "."
                </p>
                <!-- reCAPTCHA element -->
                 <div class="recaptcha-terms-of-use">
                    <p>
                        <span>
                            "Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô."
                        </span>
                        "&nbsp;"
                        <!-- button see more -->
                         <button class="recaptcha-terms-of-use-link-button">
                            Saiba mais.
                         </button>
                    </p>

                    <!-- recaptcha terms of use text -->
                    <div class="recaptcha-terms-of-use--disclousure">
                        <span id="recaptcha-disclousure-text">
                            "As informações recolhidas pelo Google reCAPTCHA estão sujeitas à "
                            <a href="https://policies.google.com/privacy" id="recaptcha-privacy-link" target="_blank">Política de Privacidade</a>
                            " e "
                            <a href="https://policies.google.com/terms" id="recaptcha-tos-link">Termos de Uso</a>
                            ", e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google)."
                        </span>
                    </div>
                 </div>
            </footer>
        </div>
    </div>
<!-- footer login page -->
    <footer class="default-footer">
        <footer class="default-footer2">
            <div data-layout="wrapper" class="default-wrapper">
                <div data-layout="container">
                    <!-- item 1 -->
                     <div data-layout="item" class="item1">
                        <div class="">
                            "Dúvidas? Ligue "
                            <a href="tel:0800 591 2876">0800 591 2876</a>
                        </div>
                     </div>
                     <!-- item 2 -->
                      <div data-layout="item" class="item2">
                        <div class="item2-sub">
                            <div data-layout="wrapper" class="item2-containerwrapper">
                                <ul data-layout="container" class="default-container-item2">
                                    <!-- perguntas-frequentes -->
                                    <li data-layout="item" class="li-sub-item">
                                        <a role="link" data-uia="footer-link" target="_self" class="perguntas-frequentes" href="https:/help.netflix.com/support/412">
                                            Perguntas frequentes
                                        </a>
                                    </li>
                                    <!-- central de ajuda -->
                                    <li data-layout="item" class="li-sub-item-2">
                                        <a role="link" data-uia="footer-link" target="_self" class="central-ajuda" href="https:/help.netflix.com">
                                            Central de Ajuda
                                        </a>
                                    </li>
                                    <!-- termos de uso -->
                                    <li data-layout="item" class="li-sub-item-3">
                                        <a role="link" data-uia="footer-link" target="_self" class="termos-de-uso" href="https:/help.netflix.com/legal/termsofuse">
                                            Termos de Uso
                                        </a>
                                    </li>
                                    <!-- privacidade -->
                                    <li data-layout="item" class="li-sub-item-4">
                                        <a role="link" data-uia="footer-link" target="_self" class="privacidade" href="https:/help.netflix.com/legal/privacy">
                                            Privacidade
                                        </a>
                                    </li>

                                    <!-- preferencia de cookies -->
                                    <li data-layout="item" class="li-sub-item-5">
                                        <a role="link" data-uia="footer-link" target="_self" class="preferencia-cookies" href="#">
                                            Preferências de cookies
                                        </a>
                                    </li>
                                    <!-- informações corporativas -->
                                    <li data-layout="item" class="li-sub-item-6">
                                        <a role="link" data-uia="footer-link" target="_self" class="info-corporativas" href="https:/help.netflix.com/legal/corpinfo">
                                           Informações corporativas
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </div>
                      </div>
                      <!-- idioma toggle -->
                       
                </div>
            </div>
        </footer>
    </footer>
<!-- rascunho 

            <p v-if="error" class="error-message">{{ error }}</p>
        
-->
</template>

<script>

export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
            checked: false,
            error: '',
        };
    },
    methods: {
        handleLogin(){
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

.login-submit-button {
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

.login-help-link, .default-label, .login-sign-up-now, ._self {
    color:white;
    text-decoration: none;
    font-size: 18px;
}

.login-help-link:hover , ._self:hover {
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

.login-toggle-button {
    width: 100%;
    padding: 14px;
    background-color: #363434;
    color: white;
    border: none;
    font-size: 18px;
    cursor: pointer;
    border-radius: 4px;
    
}

.login-toggle-button:hover {
  background-color: #272626;
}

.error-message {
  color: red;
  margin-top: 15px;
  font-size: 14px;
}

.remember-me-field-container {
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
