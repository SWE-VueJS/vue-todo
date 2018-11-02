<template>
  <div class="wraper">
      <p>{{getTitle}}</p>
      <p>My name: {{getName}}</p>
  </div>
</template>
<script>
    export default{
       props: ['getTitle', 'getName']
    }
</script>
