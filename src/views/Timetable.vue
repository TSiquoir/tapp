<template>
  <v-app id="inspire">
  
    <div class="background">
      <div class="allBtn">
        <!-- PopUp du formulaire -->
        <CreateEvents 
        @addEvent="addEvent"
        :hideWeekdays="hideWeekdays"
        />
        
        <v-btn 
        class="pink white--text" 
        @click="events.pop()"
        >Supprimer <br>le dernier événement</v-btn>
        
        <!-- Sélectionner les jours de la semaine-->
        <SelectDays 
        @addEvent="addEvent"
        :hideWeekdays="hideWeekdays" 
        />
      </div>

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
        :time-step="30"
        :time-from="8 * 60"
        :time-to="18 * 60"
        :disable-views="['years', 'year', 'month', 'week', 'day']"
        :events="events"
        :time-cell-height="30"
        
        >


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

  // On récupère les données du component CreatEvents pour les mettre en forme avant de les envoyers dans le tableau events
  methods: {
    addEvent (event) {
      const data = {}
      data.start = `2020-01-0${event.day + 5} ${event.timeStart}`
      data.end = `2020-01-0${event.day + 5} ${event.timeEnd}`
      data.subject = event.subject

      this.$axios.post('/timetable/task', data)
      console.log(data)
      // Pour envoyer dans le tableau events, ce qui va afficher le résultat dans le tableau.
      this.events.push(data)
      
    },
    
  }
}

</script>

<style>
  
  .vuecal {
    margin: auto;
    max-width: 1200px;
    }
  .allBtn {
    text-align: center;
    background-color: rgba(177, 147, 158, 0.404);
    margin-bottom: 30px;
    margin-top: 30px;
  }
  .vuecal__event {
    background-color: rgba(105, 182, 143, 0.5);
    box-sizing: border-box;
    padding: 5px;
    }
  .vuecal__cell--today, .vuecal__cell--current {
    background-color: rgba(70, 153, 62, 0.4);
  }
  .vuecal:not(.vuecal--day-view) .vuecal__cell--selected {
    background-color: rgba(204, 184, 221, 0.15);
  }
  .vuecal__cell--selected:before {
    border-color: rgba(166, 174, 241, 0.397);
  }

  /* Cells and buttons get highlighted when an event is dragged over it. */
  .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
  .vuecal__cell-split--highlighted {background-color: rgba(152, 207, 205, 0.26);}
  .vuecal__arrow.vuecal__arrow--highlighted,
  .vuecal__view-btn.vuecal__view-btn--highlighted {background-color: rgba(136, 236, 191, 0.25);}

</style>

<style scoped>
   .background {
     background-color: rgba(255, 255, 255, 0.521);
  }
</style>
