<template>
  <div>
    <b-icon-chat-dots v-b-modal="'my-modal' + taskId" scale="1.2" />
    <b-modal :id="'my-modal' + taskId" :title="task.headline" ok-only>
      <template v-slot:default>
        <p>{{ task.text }}</p>
        <b-table striped hover caption-top :items="task.ideas" :fields="fields">
          <template v-slot:table-caption> Improvement Ideas </template>
          <template v-slot:cell(date)="data">
            {{ formatDate(data.item.date) }}
          </template>
          <template v-slot:cell(actions)="data">
            <span class="sr-only">Delete Idea</span>
            <b-icon-trash @click="delIdea(taskId, data.item)" />
          </template>
        </b-table>
        <div class="ar">
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
            <b-button @click="saveIdea(taskId, idea)"> Add </b-button>
          </b-form>
        </div>
        <hr />
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
      fields: ["date", "text", "actions"],
      idea: "",
      showForm: false,
      perPage: 5,
      currentPage: 1,
    }
  },

  computed: {
    ...mapGetters("kamishibai", ["getTaskTicketById"]),
    task() {
      return this.getTaskTicketById(this.taskId)
    },

    rows() {
      return this.task.ideas.length
    },
  },

  methods: {
    ...mapActions("kamishibai", ["updateIdeas", "deleteIdea"]),
    formatDate(val) {
      if (val) {
        return moment(val).format("DD.MM.YYYY")
      }
    },

    async delIdea(id, item) {
      const data = {
        _id: id,
        ideas: [{ _id: item._id, text: item.text }],
      }
      await this.deleteIdea(data)
    },

    async saveIdea(id, text) {
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
