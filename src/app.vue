<template>
  <div class="box">
    <header> <span>音乐馆</span><input type="search" name="" id=""><span><van-icon name="music-o" /></span> </header>
    <div class="content">
      <router-view></router-view>
    </div>
    <footer>
      <div @click="musichome">
        <span><van-icon name="service-o" /></span>
        <span>音乐馆</span> 
      </div>
      <div @click="tuijian">
        <span><van-icon name="good-job-o" /></span>
        <span>推荐</span> 
      </div>
      <div @click="dongtai">
        <span><van-icon name="browsing-history-o" /></span>
        <span>动态</span> 
      </div>
      <div @click="my">
        <span><van-icon name="contact" /></span>
        <span>我的</span> 
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    musichome() {
      this.$router.push("/musichome");
    },
    tuijian() {
      this.$router.push("/tuijian");
    },
    dongtai() {
      this.$router.push("/dongtai");
    },
    my() {
      this.$router.push("/my");
    }
  }
};
</script>

<style lang="stylus" scoped>
.box {
  width: 100%;
  header {
    width: 100%;
    height: 3.125rem;
    background: #eee;
    display flex;
    justify-content space-around;
    align-items center;
    input{
        width 50%;
        height 1.875rem;
        border-radius .9375rem;
        border none;
    }
    span{
        font-size 30px;
        font-weight bold;
    }
  }
    .content{
        width 100%;
        background #eee;
    }

  footer {
    width: 100%;
    display: flex;
    position: fixed;
    background: #fff;
    border-top: 1px solid #ccc;
    bottom: 0rem;
    left: 0rem;

    div {
      width: 25%;
      text-align center
      height 3.75rem;
      span{
          display block;
          width 100%;
          font-size .625rem;
          i{
              font-size 1.875rem;
              padding .3125rem 0 0 0;
              box-sizing border-box;
          }
      }
    }
  }
}
</style>