<template>
  <header id="head">
    <slot name="logo"></slot>
    <slot name="search"></slot>
    <section class="header_back" v-if="isBack" @click="$router.go(-1)">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline points="12,18 4,9 12,0" style="fill:none;stroke: rgb(255,255,255);stroke-width: 2"/>
      </svg>
    </section>
    <section class="header_title">
      <span class="text">{{headTitle}}</span>
    </section>
    <router-link :to="userInfo ? '/profile' : '/login'" v-if="isSignin" class="header_login">
      <svg class="user_avatar" v-if="userInfo">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
      </svg>
      <span class="login" v-else>登录/注册</span>
    </router-link>
    <slot name="changeCity"></slot>
  </header>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'head',
  data () {
    return {

    }
  },
  props: ['headTitle', 'isBack', 'isSignin'],
  computed: {
    ...mapState([
      'userInfo'
    ])
  }
}
</script>

<style lang="less" scoped>
  @import (reference) '../../style/mixin';

  #head {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    .box-size(100%, 1.95rem);
    background-color: #409EFF;
    .header_back {
      left: 0.4rem;
      .box-size(0.6rem, 1rem);
      line-height: 2.2rem;
      margin-left: .4rem;
    };
    .header_title {
      .centerXY();
      width: 50%;
      color: #fff;
      text-align: center;
      .text {
        .font(0.8rem, #fff);
        font-weight: 400;
      }
    };
    .header_login {
      right: 0.55rem;
      .centerY();
      .font(0.65rem, #fff);
      .user_avatar {
        fill: #fff;
        .box-size(.8rem, .8rem)
      };
      .login {
        color: #fff;
      }
    }
  }
</style>
