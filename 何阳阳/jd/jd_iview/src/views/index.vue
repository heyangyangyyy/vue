<style scoped lang='less'>
/* scoped 是让这里的CSS只对 当前组件起作用 */
@r: 37.5rem;
.index {
  width: 100%;
  ul {
    position: fixed;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    font-size: 20 / @r;
    box-shadow: 1px 1px 2px 2px #ccc;
    li {
      float: left;
      width: 20%;
      text-align: center;
      list-style: none;
      a {
        display: block;
        width: 100%;
        height: 100%;
      }
      a.router-link-active {
        color: red;
      }
      div {
        font-size: 25 / @r;
      }
    }
  }
}
</style>
<template>
    <div class="index">
        <router-view></router-view>
        <ul>
            <li>
                <router-link to='/home'>
                    <div class="iconfont icon-yidiandiantubiao04"></div>首页
                </router-link>
            </li>
            <li>
                <router-link to='/list'>
                    <div class="iconfont icon-fenlei"></div>分类
                </router-link>
            </li>
            <li>
                <router-link to='/shopping'>
                    <div class='iconfont icon-pintuangou'></div>拼购
                </router-link>
            </li>
            <li>
                <router-link to='/car'>
                    <div class='iconfont icon-tubiaozhizuomoban'></div>购物车
                </router-link>
            </li>
            <li>
                <router-link to='/mine'>
                    <div class='iconfont icon-user'></div>我的
                </router-link>
            </li>
        </ul>

    </div>
</template>
<script>
export default {
  methods: {
    handleStart() {
      this.$Modal.info({
        title: "Bravo",
        content: "Now, enjoy the convenience of iView."
      });
    }
  }
};
</script>