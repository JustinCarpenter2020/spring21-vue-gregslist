<template>
  <div class="car col-md-4 mb-3">
    <!-- Route parameter getting set with the Params object -->
    <!-- <router-link :to="{name: 'CarDetails', params: { id: car.id }}"> -->
    <div class="card shadow" data-toggle="modal" :data-target="'#displayModal' + car.id">
      <img class="card-img-top" :src="car.imgUrl" alt="">
      <div class="card-body">
        <h4 class="card-title">
          {{ car.make }} - {{ car.model }}
        </h4>
      </div>
    </div>
    <!-- </router-link> -->
  </div>
  <DisplayModalComponent :car-prop="car">
    <template #title>
      <h5>{{ car.make }}</h5>
    </template>
  </DisplayModalComponent>
</template>

<script>
import DisplayModalComponent from '../components/DisplayModalComponent'
export default {
  name: 'Car',
  props: {
    car: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {}
  },
  components: {
    DisplayModalComponent
  }
}
</script>

<style lang="scss" scoped>

</style>
