<template>
  <div class="wraper">
      <p>{{title}}</p>
      <button @click="ChangeProps">Change Props</button>
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
        },
        methods: {
            ChangeProps: function(){
                this.title = 'Change props in VueJS for User detail'
            }    
        }
    }
</script>
<style scoped>

</style>

