<template>
  <q-page class="flex flex-center">
    <div class="align">
      <h4 class="text-weight-ligth text-secondary q-mt-none q-mb-md" align="center">
        Entrar
      </h4>

      <q-input
        v-model="userName"
        float-label="Nome de Usuário"
        placeholder="Digite seu nome de usuário">
        <template v-slot:prepend>
          <q-icon name="account_circle" color="primary" />
        </template>
      </q-input>

      <q-input
        v-model="password"
        float-label="Senha"
        placeholder="Digite sua senha"
        :type="isPwd ? 'password' : 'text'">
        <template v-slot:prepend>
          <q-icon name="lock" color="primary" />
        </template>

        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd" />
        </template>
      </q-input>

      <q-btn rounded
        class="glossy full-width q-mt-lg"
        color="primary"
        size="lg"
        label="Acessar"
        @click="regularLogin()" />
    </div>
  </q-page>
</template>

<style>
@media (min-width: 765px) {
  .align {
    margin: 0 auto;
    width: 25em;
  }
}
@media (max-width: 764px) {
  .align {
    margin: 0 auto;
    width: 20em;
  }
}
</style>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      isPwd: true,
      userName: null,
      password: null,
    };
  },
  methods: {
    ...mapActions({
      login: 'user/login',
    }),
    regularLogin() {
      const data = {
        username: this.userName,
        password: this.password,
      };

      this.login(data);
    },
  },
};
</script>
