// Tasks module

const state = {
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
        }        
    ]
};

const getters = {
    allTasks: state => state.tasks
};

const actions = {
    fetchTasks({ commit }, tasks) {        
        commit('setTasks', tasks);
    },
    addTask( { commit }, task) {
        commit('newTask', task);
    },
    updateTask( { commit }, task) {
        commit('updTask', task);
    },
    removeTask( { commit }, task) {
        commit('deleteTask', task);
    }
};

const mutations = {
    setTasks: (state, tasks) => state.tasks = tasks,
    newTask: (state, task) => state.tasks.unshift(task),
    updTask: (state, updatedTask) => {
        const index = state.tasks.findIndex(t => t.id === updatedTask.id);
        if(index !== -1) {
            state.tasks.splice(index, 1, updatedTask);
        }        
    },
    deleteTask: (state, task) => state.tasks = state.tasks.filter(t => task.id !== t.id),
};

export default {
    state, getters, actions, mutations
}