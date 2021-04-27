<template>
  <div class="card col-md-4 mb-3" data-toggle="modal" :data-target="'#displayModal' + car.id">
    <!-- Route parameter getting set with the Params object -->
    <!-- <router-link :to="{name: 'CarDetails', params: { id: car.id }}"> -->
    <div class="card shadow">
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
      <p>hello form the parent</p>
    </template>
  </DisplayModalComponent>
</template>

<script>
import DisplayModalComponent from './DisplayModalComponent'
export default {
  name: 'Car',
  props: {
    car: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: { DisplayModalComponent }
}
</script>

<style lang="scss" scoped>

</style>
