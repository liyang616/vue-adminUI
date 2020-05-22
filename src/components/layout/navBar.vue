<template>
  <div class="navBar">
    <div class="sideMin" :class="{'out': isMin}" @click="isSideMin">
      <i class="el-icon-arrow-left"></i>
    </div>
    <el-dropdown trigger="click">
      <div class="userBox">
        <div class="user">超级管理员</div>
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item>项目地址</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
      isMin: false
    }
  },
  methods: {
    isSideMin () {
      let isMin
      if (this.isMin) {
        this.isMin = false
        isMin = false
      } else {
        this.isMin = true
        isMin = true
      }
      setTimeout(() => {
        this.$emit('collapseChange', isMin)
      }, 320)
    }
  }
}
</script>
