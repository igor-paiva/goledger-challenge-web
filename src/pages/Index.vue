<template>
  <q-page>
    <div class="space-content q-mt-xl q-mb-none q-mx-xl">
      <air-company-selector @on-filter="filterPilots($event)" />
    </div>

    <div v-if="filteredPilots.length > 0">
      <div
        align="center"
        style="font-size: 1.8rem"
        class="text-weight-light text-secondary q-my-lg">
        Pilotos
      </div>

      <pilots-list :pilots="filteredPilots" />
    </div>

    <div v-else>
      <h5 class="text-weight-light text-color q-mt-xl" align="center">
        Não há nenhum piloto dessa companhia
      </h5>
    </div>
  </q-page>
</template>

<style scoped>
@media (min-width: 800px) {
  .space-content{
    padding-right: 16em;
    padding-left: 16em;
  }
}
.my-card{
  width: 100%;
  max-width: 18em;
  margin-left: 55px;
}
.text-color{
  color: #6F7273;
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex';

import PilotsList from '../components/pilots/list';
import AirCompanySelector from '../components/shared/airCompanySelector';

export default {
  name: 'Dashboard',
  components: {
    PilotsList,
    AirCompanySelector,
  },
  created() {
    this.getAllPilots();
  },
  data() {
    return {
      filteredPilots: [],
    };
  },
  computed: {
    ...mapGetters({
      allPilots: 'pilot/list',
    }),
  },
  methods: {
    ...mapActions({
      getAllPilots: 'pilot/getList',
    }),
    filterPilots(companyName) {
      this.filteredPilots = this.allPilots.filter((pilot) => {
        const fromCompany = pilot.operadorAereoRef.nome === companyName;

        return fromCompany;
      });
    },
  },
};
</script>
