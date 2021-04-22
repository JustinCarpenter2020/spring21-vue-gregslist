<template>
  <div class="JobsPage">
    <JobComponent v-for="job in state.jobs" :key="job.id" job-prop="banana" />
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'
import { jobsService } from '../services/JobsService'
import JobComponent from '../components/JobComponent'
export default {
  name: 'JobsPage',
  setup() {
    const state = reactive({
      jobs: computed(() => AppState.jobs)

    })
    onMounted(() => jobsService.getAllJobs())
    return { state }
  },
  components: { JobComponent }
}
</script>

<style scoped>

</style>
