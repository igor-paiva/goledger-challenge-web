<template>
  <q-page class="flex flex-center">
    <div class="align">
      <q-input
        v-model="userName"
        float-label="Nome de Usuário"
        placeholder="Digite seu nome de usuário" />

      <q-input
        v-model="password"
        type="password"
        float-label="Senha"
        placeholder="Digite sua senha" />

      <q-btn rounded
        class="full-width q-mt-md"
        color="primary"
        size="lg"
        label="Entrar"
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
