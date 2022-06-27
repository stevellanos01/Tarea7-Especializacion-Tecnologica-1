<template>
  <nav class="navbar bg-dark navbar-dark">
    <h1>ToDoer</h1>
  </nav>
  <main>
    <Form @add-task="addTask" />
    <List
      :tasks="tasks"
      @delete-task="deleteTask"
      @complete-task="completeTask"
    />
    <ListComplete
      :tasks="tasks"
      @delete-task="deleteTask"
      @complete-task="completeTask"
    />
  </main>
</template>

<script>
import Form from "../components/Form.vue";
import List from "../components/List.vue";
import ListComplete from "../components/ListComplete.vue";
export default {
  name: "home",
  components: {
    Form,
    List,
    ListComplete,
  },

  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    getTak(index) {
      return this.tasks[index];
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    completeTask(index) {
      if (this.getTak(index).complete === false) {
        this.getTak(index).complete = true;
      } else if (this.getTak(index).complete === true) {
        this.getTak(index).complete = false;
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');
main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav h1{
  color: white;
  padding-left: 20px;
}

</style>
