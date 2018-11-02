<template>
  <div class="wraper">
      <p>{{getTitle}}</p>
      <p>{{getName}}</p>
  </div>
</template>
<script>
    export default{
       props: ['getTitle', 'getName']
    }
</script>
