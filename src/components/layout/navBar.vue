<template>
  <div class="navBar" :class="{'min': isCollapse == true}">
    <div class="systemTitle">
      <span>
        <span v-if="!isCollapse">adminUI</span>
        <img src="@/assets/images/logo.png" alt="">
      </span>
    </div>
    <div class="elMenu">
      <el-menu
        default-active="1-2"
        class="el-menu-vertical-demo"
        :router="true"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">常用模板</span>
          </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
