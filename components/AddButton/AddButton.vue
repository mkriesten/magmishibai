<template>
  <div>
    <svg
      v-b-modal.add-modal
      class="bi bi-plus-circle add-button"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd" />
      <path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd" />
      <path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd" />
    </svg>
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
import { v4 as uuidv4 } from 'uuid'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      task: {
        taskId: undefined,
        headline: '',
        description: '',
        done: false
      },
      nameState: null
    }
  },
  methods: {
    ...mapMutations('taskticket', ['addTodo']),

    checkFormValidity () {
      const valid = this.$refs.todoform.checkValidity()
      this.nameState = valid
      return valid
    },

    resetModal () {
      this.nameState = null
    },

    handleOk (event) {
      // Prevent modal from closing
      event.preventDefault()
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Create UUID and commit to store
      this.$set(this.task, 'taskId', uuidv4())
      this.addTodo(this.task)
      // unset values to avoid vuex state manipulation errors
      this.task = { taskId: undefined, headline: '', description: '', done: false }
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('add-modal')
      })
    },
    updateField (field, value) {
      this.task[field] = value
    }
  }
}
</script>

<style scoped>
.add-button {
  float: right;
  cursor: pointer;
  color: white;
}
</style>
