<template>
  <div class="todo-item" v-bind:class="{'is-complete':task.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete">
      {{task.name}}
      <button @click="$emit('del-task', task.id)">Delete</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["task"],
  methods: {
    markComplete() {
      this.task.completed = !this.task.completed;
    }
  }
}
</script>

<style scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }
  
  .is-complete {
    text-decoration: line-through;
  }
</style>

