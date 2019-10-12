<template>
    <div>
        <form @submit="addTask">
            <input type="text" v-model="name" name ="name" 
            placeholder="Add Task">
            <input type="submit" value="Add Task" class="btn">
        </form>
    </div>
</template>

<script>
import uuid from 'uuid';

export default {
    name: "AddTask",
    data() {
        return {
            name: ''
        }
    },
    methods: {
        addTask(e) {
            e.preventDefault();
            const task = {
                id: uuid.v4(),
                name: this.name,
                completed: false
            }
            this.$emit('add-task', task);
        }
    }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;    
  }
</style>