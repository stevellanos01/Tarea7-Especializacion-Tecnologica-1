import { defineStore } from 'pinia'

export const listStore = defineStore("list", {
  state: () => ({
    listTask: [],
  }),

  actions: {
    addTask(task) {
      this.listTask = [...this.listTask, task];
    },
    deleteTask(index) {
      this.listTask.splice(index, 1);
    },
    completeTask(index) {
      if (this.listTask[index].complete === false) {
        this.listTask[index].complete = true;
      } else if (this.listTask[index].complete === true) {
        this.listTask[index].complete = false;
      } else {
        return;
      }
    },
  },
});