<template>
   <q-layout view="lHh Lpr lFf">
     <q-header elevated>
       <q-toolbar>
        <q-icon name="airplanemode_active" style="font-size: 2em" />

         <q-toolbar-title>
           Air Company
         </q-toolbar-title>

        <q-btn flat icon="exit_to_app" label="Sair" @click="logout()" />
       </q-toolbar>
     </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import auth from '../services/authentication';

export default {
  name: 'DefaultLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
    logout() {
      this.$q.dialog({
        title: 'Sair da Conta',
        message: 'Deseja sair da sua conta?',
        cancel: 'Cancelar',
        ok: 'Sair',
        color: 'primary',
      }).onOk(() => {
        auth.logout();

        this.$router.go();
      });
    },
  },
};
</script>
