<template>
  <mu-container>
    <mu-card style="width: 100%; max-width: 800px; margin: 0 auto;">
      <mu-card-media title="微观历史学" sub-title="让历史的光照进未来">
        <img src="https://i.loli.net/2018/10/22/5bcd3768a097b.jpg" style="filter: brightness(50%);">
        <mu-card-actions style="position: absolute; right: 3%; top: 9%;">
          <mu-button flat textColor="#fff" style="border: solid 1px #fff; min-width: 90px; line-height: 50px;">+ 订阅</mu-button>
        </mu-card-actions>
      </mu-card-media>
    </mu-card>
  </mu-container>
</template>
<script>
export default {
  name: 'hot',
}

</script>
<style>
.center {
  text-align: center;
}

.cover {
  position: relative;
  display: inline-block;
  height: 300px;
  width: 100%;
  background-image: url(https://i.loli.net/2018/10/22/5bcd3768a097b.jpg);
  background-position: center center;
  background-repeat: no-repeat;
}

.center-cropped {
  object-fit: none;
  object-position: center;
  max-height: 300px;
  width: 100%;
}

.title {
  position: absolute;
  top: 16px;
  font-size: 22px;
}

/*.mu-card-media-title {
  top: 3%;
  left: 3%;
  background-color: rgba(0, 0, 0, .0);
}*/

</style>
