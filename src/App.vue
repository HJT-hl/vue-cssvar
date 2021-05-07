<template>
  <div v-c="{a,b}" class="home">hello</div>
  <button @click="changeColor">变色</button>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      a : undefined,
      b: 2
    }
  },

  methods: {
    changeColor(){
      this.a = this.a === 'blue' ? "red" : "blue"
      this.b++
    }
  }
}
</script>

<style lang="less">
@color : var(--a,pink);
.home {
  margin-top: 200px;
  text-align: center;
  width : calc(var(--b,1px) * 100);
  &:hover {
    color : @color
  }
}

</style>
