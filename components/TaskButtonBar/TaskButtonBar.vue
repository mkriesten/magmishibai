<template>
  <b-container class="buttonbar-section">
    <b-row>
      <b-col><h3>magmishibai</h3></b-col>
      <b-col align-self="center" class="no-pad-r">
        <b-button-toolbar class="float-right" justify>
          <b-button-group>
            <b-button title="All tasks open" @click="allTasksOpen(tasks, true)">
              <b-icon-check-all
                class="rounded-circle bg-danger p-1"
                scale="2"
              />
            </b-button>
            <b-button
              title="All tasks done"
              @click="allTasksOpen(tasks, false)"
            >
              <b-icon-check-all
                class="rounded-circle bg-success p-1"
                scale="2"
              />
            </b-button>
          </b-button-group>
        </b-button-toolbar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
  computed: {
    ...mapState({ tasks: (state) => state.kamishibai.tasks }),
  },
  methods: {
    ...mapActions("kamishibai", ["toggleStatus"]),

    async allTasksOpen(items, flag) {
      // create deep clone 'payload' so we don't try to mutate vuex store elements directly
      // when iterating over 'items' in the for loop below
      let payload = JSON.parse(JSON.stringify(items))
      for (let item of payload) {
        // modify all done attributes to 'flag', so we set
        // the same state for all items with 'toggleStatus'
        item.done = flag
        await this.toggleStatus(item)
      }
    },
  },
}
</script>

<style lang="css" scoped>
.no-pad-r {
  padding-right: 0;
}

.buttonbar-section {
  background-color: white;
  border-radius: 0.25rem;
  padding-top: 1rem;
  margin-bottom: 1rem;
  margin-top: 3rem;
}

h3 {
  color: black;
}
</style>
