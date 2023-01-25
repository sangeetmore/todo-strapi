<template>
  <v-card>
    <v-card-title>
      <h4>Todo List</h4>
    </v-card-title>
    <v-card-text>
      <v-list>
        <span>
          <v-list-item v-for="(todo, task_id) in todos" :key="task_id">
            <v-list-item-content>
              <v-checkbox
                class="pa-2"
                @click="changeStatus(task_id)"
              >
                {{ todo.completed }}
              </v-checkbox>
              <v-list-item-title class="mb-3">
                {{ todo.task }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="removeTodo(task_id )">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </span>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "TodoList",
  methods: {
    removeTodo(index) {
      this.$store.commit("removeTodo", index);
    },
    changeStatus(index) {
      this.$store.commit("changeStatus", index);
    },
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
};
</script>
