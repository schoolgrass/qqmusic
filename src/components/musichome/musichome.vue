<template>
  <div>
    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in swiper" :key="index">
          <img :src="image.img_src" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav">
      <!-- <ul>
        <li>
          <span><van-icon name="user-o" /></span>
          <span>歌手</span>
        </li>
        <li>
          <span></span>
          <span>排行</span>
        </li>
        <li>
          <span></span>
          <span>分类歌曲</span>
        </li>
        <li>
          <span></span>
          <span>电台</span>
        </li>
        <li>
          <span></span>
          <span>一起听</span>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiper: [
        {
          title: "",
          img_src:
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1804515.jpg?max_age=2592000"
        },
        {
          title: "",
          img_src:
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1806513.jpg?max_age=2592000"
        },
        {
          title: "",
          img_src:
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1793866.jpg?max_age=2592000"
        },
        {
          title: "",
          img_src:
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1804217.jpg?max_age=2592000"
        },
        {
          title: "",
          img_src:
            "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1805625.jpg?max_age=2592000"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.swiper {
  width: 100%;
  padding: 0.625rem 0;

  .van-swipe-item {
    text-align: center;

    img {
      border-radius: 0.625rem;
      width: 90%;
    }
  }
}
</style>