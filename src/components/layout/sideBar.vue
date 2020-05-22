<template>
  <div class="sideBar" :class="{'min': isCollapse == true}">
    <div class="systemTitle">
      <span>
        <span v-if="!isCollapse">adminUI</span>
        <img src="@/assets/images/logo.png" alt="">
      </span>
    </div>
    <div class="elMenu">
      <el-menu
        default-active="/template/tableList"
        class="el-menu-vertical-demo"
        :router="true"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-menu-item index="0">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">常用模板</span>
          </template>
          <el-menu-item index="/template/tableList">普通Table</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  props: ['isCollapse'],
  data () {
    return {
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
