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
            class="flex flex-col gap-4 w-full"
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

                <div class="flex flex-col gap-1">
                    <Password 
                    class="login-password"
                    name="password" 
                    type="password" 
                    placeholder="Senha" 
                    :feedback="false" 
                    toggleMask 
                    
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
                
                <a role="link" class="login-help-link" href="https://www.netflix.com/LoginHelp">Esqueceu a senha?</a>
            </Form>
             
            
            
            
        <!-- main box footer -->
            <footer class="default-footer">
                <div class="a">
                    <div class="remember-me-field-container">
                        <div class="control-wrapper">
                            <label for="checkbox" class="default-label">
                            {{ checked }}Lembre-se de mim
                            </label>
                            <Checkbox inputId="checkbox" name="rememberMe" v-model="checked" binary variant="filled" />
                            
                        </div>  
                    </div>
                </div>

                <!-- sign up now -->
                <p class="login-sign-up-now">
                    "Novo por aqui?"
                    <a class target="_self" href="/">Assine agora</a>
                    
                </p>
                <!-- reCAPTCHA -->
                 <div class="recaptcha-terms-of-use">
                    <p>
                        <span>
                            "Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô."
                        </span>
                        <button class="recaptcha-terms-of-use-link-button">
                            Saiba mais.
                        </button>
                    </p>
                </div>

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
  password: ''
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
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  text-align: center;
  color: white;
}

.default-login-title {
    font-size: 28px;
    margin-bottom: 20px;
}

.login-input, .login-password {
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

.login-input:focus, .login-password:focus {
  border-color: #e50914;
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

.login-help-link, .default-label, .login-sign-up-now a,  .login-toggle-button{
    color:white;
    text-decoration: none;
    font-size: 18px;
}

.login-help-link:hover , .login-sign-up-now a:hover {
    text-decoration: underline;
}

.login-help-link:hover {
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
</style>
