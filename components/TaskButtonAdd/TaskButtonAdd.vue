<template>
  <div>
    <b-icon-plus-circle
      v-b-modal="'add-modal-' + cadence"
      class="button"
      scale="1.2"
    />
    <b-modal
      :id="'add-modal-' + cadence"
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
            :value="task.text"
            @input="updateField('text', $event)"
          />
        </b-form-group>
        <b-form-group id="cadence" label="Cadence" label-for="cadence">
          <b-form-select v-model="task.cadence" :options="options" />
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  props: {
    cadence: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      task: {
        taskId: undefined,
        headline: "",
        text: "",
        done: false,
        cadence: "Daily",
      },
      nameState: null,
      options: [
        { value: "Daily", text: "Daily" },
        { value: "Weekly", text: "Weekly" },
        { value: "Monthly", text: "Monthly" },
      ],
    }
  },
  methods: {
    ...mapActions("kamishibai", ["addTask"]),

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
      // Dispatch to API
      this.addTask(this.task)
      // unset values to avoid vuex state manipulation errors
      this.task = {
        taskId: undefined,
        headline: "",
        text: "",
        done: false,
        cadence: "",
      }
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("add-modal-" + this.cadence)
      })
    },
    updateField(field, value) {
      this.task[field] = value
    },
  },
}
</script>

<style scoped></style>
