<template>
  <div id="app">
    <h1>{{title}}</h1>
    <div class="list-cpn">
      <ul class="list">
        <li class="item" v-for="(item, index) in listComponents" :key="index">
          <router-link :to="{path: item.link }">{{index + 1}} . {{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import cpn01 from '@/components/Component01'
import cpn02 from '@/components/Component02'
export default {
  components: {cpn01, cpn02},
  name: 'App',
  data: function(){
    return {
      title: 'Learn VueJS',
      listComponents: [
        {name: 'Component01', link: 'Component01'},
        {name: 'Component02', link: 'Component02'}
      ]
    }
  }
}
</script>

<style>
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
.list{
  list-style: none;
}
</style>
