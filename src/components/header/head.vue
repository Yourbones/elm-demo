<template>
  <header id="head_top">
    <slot name="logo" class="logo"></slot>
    <slot name="search"></slot>
    <section class="header_back" v-if="isBack" @click="this.$router.go(-1)">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline points="12,18 4,9 12,0" style="fill:none;stroke: rgb(255,255,255);stroke-width: 2"/>
      </svg>
    </section>
    <section class="header_title">
      <span class="head_title_text">{{headTitle}}</span>
    </section>
    <slot name="changeCity"></slot>
  </header>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {

    }
  },
  props: ['headTitle', 'isBack']
}
</script>

<style lang="less" scoped>
  @import (reference) '../../style/mixin';

  #head_top {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    .size(100%, 1.95rem);
    background-color: #409EFF;
    .header_title {
      color: red;
    }
  }
</style>
