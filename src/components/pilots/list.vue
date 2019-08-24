<template>
  <div>
    <q-card
      class="my-card float-left q-mb-md"
      v-for="pilot in pilots" :key="pilot.id">

      <q-card-section class="bg-primary text-white">
        <div class="text-h6 text-weight-bold q-mb-sm">
          {{ pilot.nome }}
        </div>

        <div class="text-subtitle2">
          <span class="text-weight-bold">
            CANAC:&nbsp;
          </span>
            {{ pilot.canac }}
        </div>

        <div class="text-subtitle2">
          <span class="text-weight-bold">
            CPF:&nbsp;
          </span>
            {{ parseCpf(pilot.cpf) }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.my-card{
  width: 100%;
  max-width: 18em;
  margin-left: 55px;
}
</style>

<script>
export default {
  name: 'PilotsList',
  props: {
    pilots: {
      type: Array,
      required: true,
    },
  },
  methods: {
    parseCpf(cpf) {
      const first = cpf.slice(0, 3);
      const second = cpf.slice(3, 6);
      const third = cpf.slice(6, 9);
      const forth = cpf.slice(9, 11);

      const parsedCpf = `${first}.${second}.${third}-${forth}`;

      return parsedCpf;
    },
  },
};
</script>
