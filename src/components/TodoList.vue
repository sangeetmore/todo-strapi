<template>
  <v-card>
    <v-card-title>
      <h4>Todo List</h4>
    </v-card-title>
    <v-card-text>
      <v-list>
        <span>
          <v-list-item v-for="(task, id) in tasks" :key="id">
            <v-list-item-content>
              <v-checkbox
                class="pa-2"
                @click="changeStatus(id)"
              >
                {{ task.completed }}
              </v-checkbox>
              <v-list-item-title class="mb-3">
                {{ task.task }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="removeTodo(id )">
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
    tasks() {
      return this.$store.state.tasks;
    },
  },
};
</script>
