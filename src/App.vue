<template>
  <div id="app">
    <Header/>
    <AddTask v-on:add-task="addTask" />
    <TaskManager v-bind:tasks="tasks" v-on:del-task="deleteTask"/>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import AddTask from './components/AddTask';
import TaskManager from './components/TaskManager';

export default {
  name: 'app',
  components: {
    Header,
    AddTask,
    TaskManager
  },
  data() {
    return {
      tasks: [
      {
        id: 1,
        name: "Task 1",
        completed: false
      },
      {
        id: 2,
        name: "Task 2",
        completed: false
      },
      {
        id: 3,
        name: "Task 3",
        completed: false
      }
    ]
    }
  },
  methods: {
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
    addTask(task) {
      this.tasks.push(task);
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
