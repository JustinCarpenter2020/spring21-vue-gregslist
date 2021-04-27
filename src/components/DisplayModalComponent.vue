<template>
  <div class="modal fade"
       :id="'displayModal' + carProp.id "
       tabindex="-1"
       role="dialog"
       aria-labelledby="displayModal"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot class="modal-title" id="exampleModalLabel" name="title">
          </slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="car-body">
          <div class="row text-center">
            <div class="col-6">
              <p>
                Make:
                {{ carProp.make }}
              </p>
            </div>
            <div class="col-6">
              <p>
                Model:
                {{ carProp.model }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <img :src="carProp.imgUrl" class="img-fluid" alt="">
            </div>
            <div class="col-12">
              {{ carProp.description }}
            </div>
            <div class="col-3">
              <p>
                ${{ carProp.price }}
              </p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayModalComponent',
  props: { carProp: { type: Object, required: true } },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
