<template>
  <!-- NOTE make sure this matches with the data target on the parent no hashtag and must be unique! -->
  <div class="modal fade"
       :id="'displayModal' + carProp.id"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <!-- NOTE slots alow for data to be injected -->
          <slot name="title" class="modal-title" id="exampleModalLabel">
            <p>fill out title template</p>
          </slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row text-center">
            <div class="col-6">
              <p>Make: {{ carProp.make }}</p>
            </div>
            <div class="col-6">
              <p>Model: {{ carProp.model }}</p>
            </div>
          </div>
          <div class="row">
            <slot name="pic" class="col-12">
              <img :src="carProp.imgUrl" alt="" class="img-fluid">
            </slot>
          </div>
          <div class="row">
            <div class="col-8">
              {{ carProp.description }}
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
  props: {
    carProp: { type: Object, required: true }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
