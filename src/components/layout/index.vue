<template>
  <div class="app-wrapper">
    <side-Bar :isCollapse="isCollapse"></side-Bar>
    <div class="mainContainer" :class="{'min' : isCollapse}">
      <nav-Bar @collapseChange="collapseChange"></nav-Bar>
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
      isCollapse: false
    }
  },
  methods: {
    collapseChange (isMin) {
      this.isCollapse = isMin
    }
  }
}
</script>
