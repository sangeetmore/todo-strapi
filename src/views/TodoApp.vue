<template>
  <v-app>
    <v-main>
      <v-container>
        <div justify="center" align="center">
          <v-card
            justify="center"
            align="center"
            outlined
            style="background-color: #f5f8fb"
            width="1000px"
            height="900px"
          >
            <div justify="center" align="center">
              <v-img
                max-height="400px"
                max-width="400px"
                src="../assets/36bcc65da280a860fee1a7a50084c5d3.webp"
              ></v-img>
            </div>
            <v-container>
              <v-row>
                <v-col>
                  <TodoForm :addTodo="addTodo" />
                </v-col>
                <v-col>
                  <TodoList />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';
  export default {
    name: "TodoApp",
    components: { TodoForm, TodoList },
}
</script>
