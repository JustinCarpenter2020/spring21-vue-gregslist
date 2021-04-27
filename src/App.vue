<template>
  <header>
    <Navbar />
  </header>
  <!-- NOTE router-view allows the router to determine the component that should be injected -->
  <main>
    <router-view />
    <CreateCarModal />
    <!-- <DisplayModalComponent /> -->
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
  </footer>
</template>

<script>
import CreateCarModal from './components/CreateCarModal.vue'
// import DisplayModalComponent from './components//DisplayModalComponent'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar,
    CreateCarModal
    // DisplayModalComponent
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

</style>
