<template>
  <div>
    <b-icon-chat-dots v-b-modal="'my-modal' + taskId" scale="1.2" />
    <b-modal :id="'my-modal' + taskId" :title="task.headline">
      <template v-slot:default>
        <p>{{ task.text }}</p>
        <b-table striped hover caption-top :items="task.ideas" :fields="fields">
          <template v-slot:table-caption>
            Improvement Ideas
          </template>
          <template v-slot:cell(date)="data">
            {{ formatDate(data.item.date) }}
          </template>
        </b-table>
        <b-form ref="todoform" inline>
          <b-form-group label-for="idea" invalid-feedback="Idea is required">
            <label class="sr-only" for="idea">Idea</label>

            <b-input-group prepend="Idea" class="mb-2 mr-sm-2 mb-sm-0">
              <b-input
                id="idea"
                v-model="idea"
                placeholder="A good next step"
              />
            </b-input-group>
          </b-form-group>
          <b-button @click="putToApi(taskId, idea)">Add</b-button>
        </b-form>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import moment from "moment"
export default {
  props: {
    taskId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      fields: ["date", "text"],
      idea: "",
      showForm: false,
    }
  },
  computed: {
    ...mapGetters("kamishibai", ["getTaskTicketById"]),
    task() {
      return this.getTaskTicketById(this.taskId)
    },
  },
  methods: {
    ...mapActions("kamishibai", ["updateIdeas"]),
    formatDate(val) {
      if (val) {
        // convert to "milliseconds since epoch" and apply format
        return moment(val).format("DD.MM.YYYY")
      }
    },

    openIdea(status) {
      status ? (this.showForm = false) : (this.showForm = true)
    },

    async putToApi(id, text) {
      const data = {
        _id: id,
        ideas: [{ text: text }],
      }
      await this.updateIdeas(data)
    },
  },
}
</script>

<style scoped>
.bi {
  color: black;
}
</style>
