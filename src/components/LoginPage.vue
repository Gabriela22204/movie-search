<template>
    <div class="default">
        <div class="login-page-container">
            <div class="login-box">
            <!-- header -->
            <header class="header-title">
                <h1 class="default-login-title">Entrar</h1>
            </header>
            <!-- teste -->
             
            <Form 
            v-slot="{ handleSubmit, errors }" 
            :initialValues="formInitialValues" 
            :resolver="formResolver" 
            :validateOnValueUpdate="false" 
            :validateOnBlur="true"  
            :validateOnMount="['email']"   
            @submit="handleSubmit(onFormSubmit)" 
            class="flex flex-col gap-4 w-full sm:w-64"
            >
                <div class="flex flex-col gap-1">
                    <InputText 
                    class="login-input"
                    name="email"  
                    type="email" 
                    placeholder="Email ou número de celular" 
                    fluid
                    :class="{'p-invalid': errors.email}"
                    />

                    <Message 
                    v-if="errors.email"
                    severity="error" 
                    size="small" 
                    variant="simple"
                    >
                    {{ errors.email  }}
                    </Message>
                </div>

                <div class="flex flex-col gap-1 container-password">
                    <Password 
                    v-model="password"
                    class="login-password"
                    name="password"
                    placeholder="Senha" 
                    :feedback="false" 
                    toggleMask 
                    fluid
                    aria-label="Password"
                    :class="{'p-invalid': errors.password}"
                    />

                    <Message 
                    v-if="errors.password" 
                    severity="error" 
                    size="small" 
                    variant="simple"
                    >
                    {{ errors.password }}
                    </Message>
                </div>
                

                <Button type="submit" class="login-submit-button" severity="secondary" label="Entrar" />

                
                <p class="p1">OU</p>

                <Button type="button"  label="Usar um código de acesso" @click="handleLogin" class="login-toggle-button"  />
                <div class="login-help-link-container">
                    <a role="link" class="login-help-link" href="https://www.netflix.com/LoginHelp">Esqueceu a senha?</a>
                </div>
                
            </Form>
             
            
            
            
        <!-- main box footer -->
            <footer class="default-footer">
                <div class="a">
                    <div class="remember-me-field-container">
                        <div class="control-wrapper">

                            <Checkbox id="checkbox" v-model="checked" binary/>
                            <label for="checkbox" class="default-label">
                            {{ checked }}Lembre-se de mim
                            </label>
                            
                            
                        </div>  
                    </div>
                </div>

                <!-- sign up now -->
                <p class="login-sign-up-now">
                    Novo por aqui?
                    <a class target="_self" href="/">Assine agora</a>
                    
                </p>
                <!-- reCAPTCHA -->
                 <div class="recaptcha-terms-of-use">
                    <p class="recaptcha-text">
                        <span>
                            Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
                            <button class="recaptcha-terms-of-use-link-button">
                                Saiba mais.
                            </button>
                        </span>
                        
                    </p>
                </div>

                <!-- recaptcha terms of use text -->
                <div class="recaptcha-terms-of-use--disclousure">
                        <span id="recaptcha-disclousure-text">
                            As informações recolhidas pelo Google reCAPTCHA estão sujeitas à
                            <a href="https://policies.google.com/privacy" id="recaptcha-privacy-link" target="_blank">Política de Privacidade</a>
                            " e "
                            <a href="https://policies.google.com/terms" id="recaptcha-tos-link">Termos de Uso</a>
                            ", e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google)."
                        </span>
                    </div>
            </footer>
        </div>
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

//components
<script setup>

import {Form, useForm } from 'vee-validate';
import * as yup from 'yup';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Message from 'primevue/message';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';

const formInitialValues = {
  email: '',
  password: '',
  checked:false,
};

// Validation schema with veevalidate
const formResolver = async (values) => {
  try {
    await validationSchema.validate(values, { abortEarly: false });
    return { values, errors: {} };
  } catch (err) {
    const errors = err.inner.reduce((acc, e) => {
      acc[e.path] = e.message;
      return acc;
    }, {});
    return { values, errors };
  }
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Informe um email ou número de telefone válido.')
    .required('Este campo é obrigatório.'),
  password: yup
    .string()
    .required('A senha é obrigatória.')
});

const { handleSubmit } = useForm({
  validationSchema
});

const onFormSubmit = handleSubmit((values) => {
  alert('Formulário enviado com sucesso!');
  console.log(values); // process form values
});

</script>



<style scoped>

.login-page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.65); 
}

.login-box {
  width: 450px;
  padding: 70px;
  background-color: rgba(0, 0, 0, 0.60);
  border-radius: 10px;
  text-align: center;
  color: white;
}

.default-login-title {
    font-size: 30px;
    margin-bottom: 20px;
    text-align: left;
}

.login-input{
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #222;
  color: white;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.container-password{
    padding: 14px 0 14px;
}

.p-password {
    display: flex;
    position: relative;
    width: 100%;
}

.p-component{
    width:100%;
    position:relative;
}

.login-password input {
    width: 100%;
    padding: 10px 0;
    background-color: #222;
    color: white;
    border: 1px solid #555;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box;
}


.login-password .p-password-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}

.login-password:focus-within {
    border-color: #e50914;
    outline: none;
}

.login-password .p-password .p-inputtext {
    background-color: #222;
    border-radius: 4px;
}

.login-password .p-password-icon:focus {
    outline: none;
}

.login-submit-button, .login-toggle-button {
  width: 100%;
  padding: 14px;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.login-submit-button{
    background-color: #e50914;
}
.login-toggle-button {
    background-color: #363434;
}

.login-submit-button:hover {
  background-color: #c60b14;
}
.login-toggle-button:hover {
    background-color: #2b2727;
}

.forgot-password-container {
    width: 100%;
    padding: 14px;
    text-align: center;
    margin: 10px -10px 10px;
}

.login-help-link-container{
    padding: 14px;
}

.default-label{
    width: 100%;
}

.login-sign-up-now{
    color: rgb(146, 146, 146);
    display: flex;
    align-content: space-between;
}

.login-help-link, .default-label, .login-sign-up-now a,  .login-toggle-button{
    color:white;
    text-decoration: none;
    font-size: 18px;
}

.login-help-link:hover , .login-sign-up-now a:hover {
    text-decoration: underline;
}

.login-help-link:hover, .p-checkbox-input:hover {
    color:rgb(163, 156, 156);
}
.p-checkbox {
    display:flex;
    width: 8%;
    
}
.p-checkbox-input {
    border: 2px solid #555;
    background-color: #333;
}

.p-checkbox-input:hover {
    cursor: pointer;
    border-color: #333333;
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

.remember-me-field-container {
    display: flex;
}

.control-wrapper{
    display:flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}

.recaptcha-text{
    display: flex;
}
</style>
