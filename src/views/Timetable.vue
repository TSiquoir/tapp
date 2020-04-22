<template>
 <v-app id="inspire">
    <!-- eslint-disable -->
    <div>
      <button @click="events.push({
      start: '2018-11-20 12:00',
      end: '2018-11-20 17:00',
      title: 'A new event',
      class: 'blue-event'
      })">Add an event</button>
      <button @click="events.pop()">Remove last event</button>

      <VueCal 
         selected-date="2018-11-19"
         :time-from="9 * 60"
         :time-to="24 * 60"
         :disable-views="['years', 'year', 'month']"
         hide-weekends
         :events="events">
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
     
   }  
}
</script>

<style lang="scss" scoped>
    
</style>