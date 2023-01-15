<template>
  <div>
    <v-card width="400px">
      <div class="d-inline-flex">
        <v-card-text>
          <v-text-field
            v-model="todo"
            label="Add Todo"
            outlined
            dense
            clearable
            align="center"
            justify="center"
            prepend-inner-icon="mdi-plus"
          ></v-text-field>
        </v-card-text>
        <v-card-actions justify="end">
          <v-btn dark color="#38c7ef" @click="addTodo"> Add Todo </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "TodoForm",
  data: () => ({
    todo: "",
  }),
  methods: {
    addTodo() {
      const payload = {
        task: this.todo,
        completed: false,
      };
      this.$store.commit("addTodo", payload);
      this.todo = "";
    },
  },
};
</script>
