<template>
  <div class="wraper">
      <p>{{title}}</p>
      <p>{{name}}</p>
      <userdetail :getName="name"></userdetail>
      <button @click="ChangeProps">Change Props</button>
  </div>
</template>
<script>
    import userdetail from '@/components/UserDetail'
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
                this.title = 'Change props in VueJS for User detail';
                this.name = 'Huynh Trong Dai'
            }    
        }
    }
</script>
<style scoped>

</style>

