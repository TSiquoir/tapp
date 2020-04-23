<template>
 <v-app id="inspire">

    <div>
      <v-btn class="pink white--text" @click="addEvents ({
      start: '2018-11-20 12:00',
      end: '2018-11-20 17:00',
      title: 'A new event',
      class: 'blue-event'
      })">Add an event</v-btn>
      <v-btn class="pink white--text" @click="events.pop()">Remove last event</v-btn>

      <VueCal 
         selected-date="2018-11-19"
         :time-from="8 * 60"
         :time-to="24 * 60"
         :disable-views="['years', 'year', 'month']"
         hide-weekends
         :events="events">
         <template v-slot:title="{  }">
           Hello World
         </template>
      </VueCal>
       
    </div>
 </v-app>
</template>

<script>

import VueCal from "vue-cal"
import 'vue-cal/dist/vuecal.css'



export default {
  components: { 
    VueCal,
  },
  
  data () {
    return {
      events: [
        {
          start: '2018-11-19 10:35',
          end: '2018-11-19 11:30',
          title: 'Doctor appointment',
          content: '<i class="v-icon material-icons">local_hospital</i>',
          class: 'health'
        },        
      ]
    }
  },

  methods: {
    addEvents (event) {
      this.events.push(event)
    }
  }
}

</script>

<style lang="scss" scoped>
    
</style>