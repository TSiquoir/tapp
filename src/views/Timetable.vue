<template>
  <v-app id="inspire">
  
    <div class="background">
      <!-- PopUp du formulaire -->
      <CreateEvents 
      @addEvent="addEvent"

      :hideWeekdays="hideWeekdays" />
      
      <v-btn class="pink white--text" @click="events.pop()">Remove last event</v-btn>

      <!-- Calendrier avec ces propriétés -->
      <VueCal 
        activeView= "week"
        style = "height: 80vh"
        selected-date="2020-01-06"
        locale="fr"        
        editable-events

        :hideWeekdays="hideWeekdays"
        :hideTitleBar="true"
        :time="true" 
        :time-step="15"
        :time-from="8 * 60"
        :time-to="19 * 60"
        :disable-views="['years', 'year', 'month', 'week', 'day']"
        :events="events"
        :time-cell-height="18"

        >

        <template v-slot:time-cell="{ hours, minutes }">
          <div :class="{ line: true, hours: !minutes }">
            <strong v-if="!minutes" style="font-size: 15px">{{ hours }}</strong>
            <span v-else style="font-size: 11px">{{ minutes }}</span>
          </div>
        </template>

        <!--Pour cacher la date à côté des jours de la semaine-->
        <template v-slot:weekday-heading="{ heading }">
          {{ heading.label }}
        </template>

      </VueCal>
       
    </div>
  </v-app>
</template>

<script>

import VueCal from "vue-cal"
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/i18n/fr.js'
import 'vue-cal/dist/drag-and-drop.js'
import CreateEvents from "@/components/CreateEvents.vue"


export default {
  components: { 
    VueCal,
    CreateEvents,
  },
  
  data () {
    return {

      events: [],
      hideWeekdays: [6,7],
      
      subject: ['Français', 'Sport', 'Langue', 'Maths', 'ect'],
      


      /*events: [
        {
          start: '2020-01-06 14:30',
          end: '2018-11-22 15:30',
          title: 'Anglais',
          content: '<i class="v-icon material-icons">fitness_center</i>',
          class: 'sport'
        }, 
      ]*/
    }
  },

  methods: {
    addEvent (event) {
      const data = {}
      data.start = `2020-01-0${event.day + 5} ${event.time}`
      console.log(data)
      //this.events.push(data)
      
    }
  }
}

</script>

<style>
    /* Green-theme. */
  
  .vuecal__title-bar {background-color: #e4f5ef00;}
  .vuecal__cell--today, .vuecal__cell--current {background-color: rgba(70, 153, 62, 0.4);}
  .vuecal:not(.vuecal--day-view) .vuecal__cell--selected {background-color: rgba(255, 255, 255, 0.157);}
  .vuecal__cell--selected:before {border-color: rgba(66, 108, 185, 0.5);}
  /* Cells and buttons get highlighted when an event is dragged over it. */
  .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
  .vuecal__cell-split--highlighted {background-color: rgba(133, 99, 197, 0.5);}
  .vuecal__arrow.vuecal__arrow--highlighted,
  .vuecal__view-btn.vuecal__view-btn--highlighted {background-color: rgba(136, 236, 191, 0.25);}

  .vuecal__time-cell .hours.line:before {border-color: #ff0000;}

</style>

<style scoped>
   .background {
     
  }
</style>
