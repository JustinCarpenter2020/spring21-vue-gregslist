<template>
  <router-link :to="{name: 'jobDetailsPage', params: {id: jobProp.id}}" class="JobComponent btn btn-secondary">
    {{ jobProp.jobTitle }}
    {{ jobProp.company }}
  </router-link>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
export default {
  props: { jobProp: { type: Object }, banana: { type: String } },
  name: 'JobComponent',
  setup() {
    const state = reactive({

    })
    return { state }
  }
}
</script>

<style scoped>

</style>
