import { AppState } from '../AppState'
import { api } from './AxiosService'

class JobsService {
  async getAllJobs() {
    // console.log('getting all jobs')

    const res = await api.get('jobs')
    // --------
    AppState.jobs = res.data

    // console.log('jobs on the appstate', AppState.jobs)
  }
}

export const jobsService = new JobsService()
