<template>
  <mu-container>
    <mu-card style="width: 100%; max-width: 800px; margin: 0 auto;">
      <mu-card-header title="昵称" sub-title="2018/10/17 10:00:00" style="display: flex">
        <mu-avatar slot="avatar">
          <img src="https://wx4.sinaimg.cn/mw690/006zFO3gly1flf4xnd5q9j30ku0ku75r.jpg">
        </mu-avatar>
          <mu-card-actions style="position: absolute; right: 4px;">
            <mu-button flat textColor="#6567E6" style="border: solid 1px #6567E6; line-height: 0px; min-width: 70px;" small>+ 关注</mu-button>
          </mu-card-actions>
      </mu-card-header>
      <div style="margin-left: 10px; margin-right: 10px;">
        <mu-card-text style="font-size: 16px;">
          散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
          调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
          似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
          找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
        </mu-card-text>
        <div style="margin-left: 16px; margin-right: 16px; display: flex; padding: 16px;align-items: center; background-color: #EEEEEE">
          <img src="http://wx4.sinaimg.cn/mw690/006zFO3ggy1fp44ujo5mrj30u01400xf.jpg" width="50px" height="50px">
          <div style="margin-left: 16px;">
            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
          </div>
        </div>
      </div>
      <mu-card-actions>
        <mu-row>
          <mu-col span="3" style="width: 100%; text-align: center;">
            <mu-button flat>
              <mu-icon :size="20" left value="share"></mu-icon>
              934
            </mu-button>
          </mu-col>
          <mu-col span="3" style="width: 100%; text-align: center;">
            <mu-button flat>
              <mu-icon :size="20" left value="comment"></mu-icon>
              230
            </mu-button>
          </mu-col>
          <mu-col span="3" style="width: 100%; text-align: center;">
            <mu-button flat>
              <mu-icon :size="20" left value="thumb_up"></mu-icon>
              309
            </mu-button>
          </mu-col>
          <mu-col span="3" style="width: 100%; text-align: center;">
            <mu-button flat>
              <mu-icon :size="20" left value="star"></mu-icon>
              100
            </mu-button>
          </mu-col>
        </mu-row>
      </mu-card-actions>
    </mu-card>
  </mu-container>
</template>
<script>
export default {
  name: 'my-card',
  data() {
    return {}
  }
}

</script>
<style>
</style>
