<template>
  <q-input
    rounded
    outlined
    v-model="companyName"
    style="font-size: .99rem"
    float-label="Nome da companhia"
    placeholder="Digite o nome da companhia"
    @input="onFilter()">
    <template v-slot:prepend>
      <q-icon name="search" color="primary" />
    </template>
  </q-input>
</template>

<script>
export default {
  name: 'AirCompanySelector',
  data() {
    return {
      companyName: null,
    };
  },
  methods: {
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    onFilter() {
      this.$emit('on-filter', this.capitalize(this.companyName));
    },
  },
};
</script>
