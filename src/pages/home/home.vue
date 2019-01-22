<template>
  <div>
    <head-top head-title="饿了么" is-signin="true">
      <span slot="logo" class="head_logo">elm.com</span>
    </head-top>
    <h1>欢迎来到绿洲，被选上的孩子们</h1>
    <p>{{author}}</p>
  </div>
</template>

<script>
import headTop from '../../components/header/head'

export default {
  name: 'Home',
  components: {
    headTop
  },
  data () {
    return {
      author: '爱德拉·伊曼'
    }
  }
}
</script>

<style lang="less" scoped>
    @import (reference) '../../style/mixin';

    .head_logo {
      left: 0.4rem;
      font-weight: 400;
      .centerY();
      .box-size(2.3rem, 0.7rem);
      .font(0.7rem, #fff);
   }
</style>
