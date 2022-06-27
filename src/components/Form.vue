<template>
  <section id="formulario-task">
    <form @submit.prevent="sendForm">
      <div class="container">
        <div class="row mb-3">
          <div class="col-md-12">
            <div class="input-group">
              <input
                v-model="task.description"
                type="text"
                class="form-control"
                placeholder="¿Qué quieres hacer hoy?"
                :class="{ 'is-invalid': error && invalid }"
              />
              <button type="submit" class="btn btn-primary">
                Agregar Tarea
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div v-if="error" class="alert alert-danger" role="alert">
              ¡Debes rellenar el campo!
            </div>
            <div v-if="sent" class="alert alert-success" role="alert">
              La tarea ha sido agregada correctamente!
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "formulario-task",
  components: {},
  data() {
    return {
      sent: false,
      error: false,
      task: { description: "", complete: false },
    };
  },
  computed: {
    invalid() {
      return this.task.description.length < 1;
    },
  },
  methods: {
    sendForm() {
      // Comprobamos la presencia de errores
      if (this.invalid) {
        this.error = true;
        this.sent = false;
        return;
      } else {
        this.error = false;
        this.sent = true;
        this.$emit("add-task", this.task);
        this.resetForm();
      }
    },
    resetForm() {
      this.task = { description: "", complete: false };
    },
  },
};
</script>

<style scoped>
.form-group {
  display: inline;
}
</style>
