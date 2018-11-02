<template>
  <div class="wraper">
      <p>{{title}}</p>
      <button>Change Username</button>
  </div>
</template>
<script>
    export default{
        name: 'user',
        data (){
            return {
                title: 'Use props in VueJS',
                name: 'Steven Huynh'
            }
        }
    }
</script>
<style scoped>

</style>

