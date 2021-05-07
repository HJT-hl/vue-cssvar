<template>

  <div v-css="{a,b,c}" class="box" @click="changeColor">hello</div>

</template>

<script>
export default {
  data(){
    return {
      c : 1,
      b : '700'
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
    font-weight: var(--b);
  }
 



</style>
