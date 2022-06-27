<template>
  <div class="container">
    <p>
      <a
        class="btn btn-primary"
        data-bs-toggle="collapse"
        href="#collapseTaskComplete"
        role="button"
        aria-expanded="false"
        aria-controls="collapseTaskComplete"
      >
        Tareas completadas
      </a>
    </p>
  </div>
  <div class="container">
    <div class="collapse" id="collapseTaskComplete">
      <div v-for="(task, index) in tasks" :key="index">
        <div class="item-task">
          <div v-if="task.complete === true">
            <ul class="list-group">
              <li class="list-group-item">
                <div class="d-flex bd-highlight">
                  <div class="me-auto p-2 bd-highlight">
                    <h6>{{ task.description }}</h6>
                  </div>
                  <div class="p-2 bd-highlight">
                    <div class="btn-group" role="group">
                      <button
                        class="btn btn-success"
                        @click="$emit('complete-task', index)"
                      >
                        Descompletar
                      </button>

                      <button
                        class="btn btn-danger"
                        @click="getTask(index)"
                        data-bs-toggle="modal"
                        data-bs-target="#modalEliminar"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Modal Eliminar-->
        <form @submit.prevent="sendForm">
          <div
            class="modal fade"
            id="modalEliminar"
            tabindex="-1"
            aria-labelledby="modalEliminarLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalEliminarLabel">
                    Eliminar Tarea
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body d-flex">
                  <div class="stats-container">
                    <p>
                      ¿Estas seguro de eliminar la tarea "{{
                        task.description
                      }}"?
                    </p>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="submit"
                    class="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Eliminar
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Volver
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  components: {},
  props: {
    tasks: {
      tasks: Array,
      default: () => [],
    },
  },
  methods: {
    sendForm() {
      this.$emit("delete-task", this.task);
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 30px;
  padding-bottom: 10px;
}

</style>
