<template>
  <div>
    <top-bar></top-bar>
    <card style="margin-top: 2rem;"></card>
  </div>
</template>
<script>
import TopBar from '@/components/TopBar'
import Card from '@/components/Card'

export default {
  name: 'home-view',
  components: { TopBar, Card }
}

</script>
<style>
</style>
