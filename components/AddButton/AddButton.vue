<template>
  <div>
    <b-icon-plus-circle
      v-b-modal.add-modal
      class="add-button"
      font-scale="1.2"
    />
    <b-modal
      id="add-modal"
      ref="modal"
      title="Add task to board"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="todoform">
        <b-form-group
          :state="nameState"
          label="Headline"
          label-for="headline"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="headline"
            :value="task.headline"
            :state="nameState"
            required
            @input="updateField('headline', $event)"
          />
        </b-form-group>
        <b-form-group
          id="description"
          label="Description"
          label-for="description"
        >
          <b-form-textarea
            :value="task.description"
            @input="updateField('description', $event)"
          />
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid"
import { mapMutations } from "vuex"
export default {
  data() {
    return {
      task: {
        taskId: undefined,
        headline: "",
        description: "",
        done: false,
      },
      nameState: null,
    }
  },
  methods: {
    ...mapMutations("taskticket", ["addTodo"]),

    checkFormValidity() {
      const valid = this.$refs.todoform.checkValidity()
      this.nameState = valid
      return valid
    },

    resetModal() {
      this.nameState = null
    },

    handleOk(event) {
      // Prevent modal from closing
      event.preventDefault()
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Create UUID and commit to store
      this.$set(this.task, "taskId", uuidv4())
      this.addTodo(this.task)
      // unset values to avoid vuex state manipulation errors
      this.task = {
        taskId: undefined,
        headline: "",
        description: "",
        done: false,
      }
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("add-modal")
      })
    },
    updateField(field, value) {
      this.task[field] = value
    },
  },
}
</script>

<style scoped>
.add-button {
  cursor: pointer;
  color: white;
}
</style>
