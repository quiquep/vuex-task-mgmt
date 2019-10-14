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
        },
        {
          id: 3,
          name: "Task 3",
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
    removeTask( { commit }, task) {
        commit('deleteTask', task);
    }
};

const mutations = {
    setTasks: (state, tasks) => state.tasks = tasks,
    newTask: (state, task) => state.tasks.unshift(task),
    deleteTask: (state, task) => state.tasks = state.tasks.filter(t => task.id !== t.id),
};

export default {
    state, getters, actions, mutations
}