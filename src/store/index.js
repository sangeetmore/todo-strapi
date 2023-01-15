import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [
            {
                id: 1,
                task: "Learn Vue",
                completed: false,
              },
              {
                id: 2,
                task: "Learn Vuetify",
                completed: false,
              },
              {
                id: 3,
                task: "Learn Vuex",
                completed: false,
              },
        ],
    },
    mutations: {
        addTodo(state,payload){
            payload.id = state.tasks.length + 1;
            state.tasks.push(payload);
        },
        removeTodo (state, payload) {
            state.tasks.splice(payload, 1);
        },
        changeStatus (state, payload) {
            state.tasks[payload].completed = !state.tasks[payload].completed;
        }
    },
    actions: {},
    modules: {},
    getters: {}

});
