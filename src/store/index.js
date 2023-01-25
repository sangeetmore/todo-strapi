import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {
                task_id: 1,
                task: "Learn Vue",
                completed: false,
              },
              {
                task_id: 2,
                task: "Learn Vuetify",
                completed: false,
              },
              {
                task_id: 3,
                task: "Learn Vuex",
                completed: false,
              },
        ],
    },
    mutations: {
        addTodo(state,payload){
            payload.task_id = state.todos.length + 1;
            state.todos.push(payload);
        },
        removeTodo (state, payload) {
            state.todos.splice(payload, 1);
        },
        changeStatus (state, payload) {
            state.todos[payload].completed = !state.todos[payload].completed;
        }
    },
    actions: {},
    modules: {},
    getters: {}

});
