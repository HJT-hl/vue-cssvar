<template>

  <div v-css="{c,aBC,userAvatarColor}" class="box" @click="changeColor">hello</div>

</template>

<script>
export default {
  data(){
    return {
      c : 1,
      aBC : '700',
      userAvatarColor: 'green'
    }
  },
  methods: {
    changeColor(){
      this.c++;
    }
  }
}
</script>

<style lang="less">

  .box {
    width : calc( var(--c) * 100);
    height : 100px;
    background-color : red;
    font-weight: var(--a-b-c);
    color : var(--user-avatar-color)
  }
 



</style>
