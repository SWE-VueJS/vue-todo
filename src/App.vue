<template>
  <div id="app">
    <h1>{{title}}</h1>
    <div class="list-cpn">
      <ul class="list flexbox">
        <li class="item" v-for="(item, index) in listComponents" :key="index">
          <router-link :to="{path: item.link }">{{index + 1}} . {{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import todolist from '@/components/TodoList'
import cpn02 from '@/components/Component02'
import user from '@/components/User'
export default {
  components: {todolist, cpn02, user},
  name: 'App',
  data: function(){
    return {
      title: 'Learn VueJS',
      listComponents: [
        {name: 'To Do List', link: 'TodoList'},
        {name: 'Component02', link: 'Component02'},
        {name: 'Prop in VueJS', link: 'User'}
      ]
    }
  }
}
</script>

<style>
a{
  color: #000;
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flexbox{
  display: flex;
}
.justify-content-center{
  justify-content: center;
}
.list{
  list-style: none;
  flex-direction: column;
  background-color: #ccc;
  padding: 20px;
  width: 500px;
  margin: 0 auto;
}
</style>
