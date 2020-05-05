<template>

    <v-dialog v-model="formAddEvent" persistent max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn class="pink white--text" dark v-on="on">Créer un évènement</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">Créer un évènement</span>
            </v-card-title>
            <v-card-text>
            
                <v-form>
                    <v-select
                        v-model="day"
                        label="Standard"
                        :items="days"
                        item-value="value"
                        item-text="text"
                    >

                    </v-select>

                    <v-text-field
                        v-model="time"
                        label="Regular"
                        type="time"> 

                    </v-text-field>


                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="formAddEvent = false">Close</v-btn>
                <v-btn color="blue darken-1" text @click="createEvent">Save</v-btn>
            </v-card-actions>
        </v-card>

    </v-dialog>

    
</template>

<script>
    export default {
        data () {
            return {
                day: null,
                time: null,
                formAddEvent: false,
            }
        },
       props: {
           hideWeekdays: Array,
       },
       computed: {
           days () {
               const days = [
                    {
                        value: 1,
                        text: "Lundi"
                    }, 
                    {
                        value: 2,
                        text: "Mardi"
                    }, 
                    {
                        value: 3,
                        text: "Mercredi"
                    }, 
                    {
                        value: 4,
                        text: "Jeudi"
                    }, 
                    {
                        value: 5,
                        text: "Vendredi"
                    }, 
                    {
                        value: 6,
                        text: "Samedi"
                    }, 
                    {
                        value: 7,
                        text: "Dimanche"
                    }, 
                    
                ]
               return days.filter((day) => {
                   return !this.hideWeekdays.includes(day.value)
               })
               
           }
       },
       methods: {
           createEvent() {
               this.formAddEvent = false
               this.$emit('addEvent',{
                   day:this.day,
                   time:this.time,
               })
           }
       }
    }
</script>

<style lang="scss" scoped>

</style>