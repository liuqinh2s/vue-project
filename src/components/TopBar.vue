<template>
  <mu-container class="mt">
    <mu-flex justify-content="start" align-items="center">
      <mu-button color="grey800" style="margin-left: 16px" @click="open = !open" icon>
        <mu-icon value="reorder"></mu-icon>
      </mu-button>
      <p style="margin: 0 auto; font-size: 20px;"><strong style="padding-left: 64px;">{{title}}</strong></p>
      <mu-button color="grey800" style="margin-left: 16px" icon>
        <mu-icon value="search"></mu-icon>
      </mu-button>
      <mu-button color="grey800" style="margin-left: 16px" icon>
        <mu-icon value="add"></mu-icon>
      </mu-button>
      <mycontent mold="hot"></mycontent>
    </mu-flex>
    <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'" style="background-color: #CCCC99">
    <div style="text-align: center; height: 12rem; border-bottom: solid 1px #BBBBBB">
      <mu-avatar :size="size" style="display: inline-block; margin-top: 1rem">
        <img src="https://wx4.sinaimg.cn/mw690/006zFO3gly1flf4xnd5q9j30ku0ku75r.jpg">
        </mu-avatar>
        <p style="font-size: 14px;"><strong>昵称</strong></p>
        <p style="font-size: 14px;">一句话介绍自己</p>
    </div>
    <mu-list style="margin-top: 2rem;">
      <mu-list-item button style="margin-left: 4rem;" @click="open = !open; title='热榜';">
        <mu-icon value="whatshot"></mu-icon>
        <mu-list-item-title class="ml">热榜</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button style="margin-left: 4rem;" @click="open = !open; title='timeline';">
        <mu-icon value="hourglass_empty"></mu-icon>
        <mu-list-item-title class="ml">timeline</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button style="margin-left: 4rem;" @click="open = !open; title='分类';">
        <mu-icon value="local_offer"></mu-icon>
        <mu-list-item-title class="ml">分类</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button style="margin-left: 4rem;" @click="open = !open; title='消息';">
        <mu-icon value="message"></mu-icon>
        <mu-list-item-title class="ml">消息</mu-list-item-title>
      </mu-list-item>
      <mu-list-item style="margin-bottom: 2rem; margin-left: 4rem;" button @click="open = !open; title='设置';">
        <mu-icon value="settings"></mu-icon>
        <mu-list-item-title class="ml">设置</mu-list-item-title>
      </mu-list-item>
      <mu-list-item style="margin-top: 2rem; margin-left: 3rem; border-top: solid 1px #BBBBBB; padding-top: 2rem;" button @click="open = !open; title='未登录'">
        <mu-icon value="exit_to_app"></mu-icon>
        <mu-list-item-title class="ml">退出登陆</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
  </mu-container>
</template>
<script>
import Content from '@/components/Content'

export default {
  name: 'top-bar',
  components: { Content },
  data() {
    return {
      docked: false,
      open: false,
      position: 'left',
      size: 70,
      title: '热榜'
    }
  }
}

</script>
<style>
.mt {
  margin-top: 5px;
}

.ml {
  margin-left: 1rem;
}

</style>
