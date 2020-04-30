<template>
  <div class="app-wrapper">
    <side-Bar></side-Bar>
    <div class="mainContainer">
      <nav-Bar></nav-Bar>
    </div>
  </div>
</template>

<script>
import sideBar from './sideBar'
import navBar from './navBar'
export default {
  components: {
    sideBar,
    navBar
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
