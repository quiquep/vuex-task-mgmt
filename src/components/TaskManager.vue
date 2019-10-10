<template>
  <div>    
    <div v-bind:key="task.id" v-for="task in tasks">
      <Task v-bind:task="task" v-on:del-task="$emit('del-task', task.id)" />
    </div>
  </div>
</template>

<script>
import Task from './Task';

export default {
  components: {
    Task
  },
  name: 'TaskManager',
  props: ["tasks"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
