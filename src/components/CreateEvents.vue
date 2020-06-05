<template>

    <v-dialog v-model="formAddEvent" persistent max-width="600px">
        <template v-slot:activator="{ on }">
            
            
            <v-btn 
                class="pink white--text" 
                dark v-on="on"
            >
                Créer un évènement
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">Créer un évènement</span>
            </v-card-title>
            <v-card-text>
            
                <v-form>
                    
                    <v-select
                        v-model="day"
                        label="Jour"
                        :items="days"
                        item-value="value"
                        item-text="text"
                    >
                    </v-select>
            
                    <v-row>
                        <v-col cols="11" sm="5">
                            <v-menu
                                ref="menu_start"
                                v-model="menu1"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="timeStart"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                        v-model="timeStart"
                                        label="Heure de début"
                                        readonly
                                        v-on="on"
                                    >
                                    </v-text-field>                                        
                                </template>

                                <v-time-picker
                                v-if="menu1"
                                v-model="timeStart"
                                :max="timeEnd"
                                type="time"
                                full-width
                                prepend-icon="access_time"
                                @click:minute="$refs.menu_start.save(timeStart)"
                                format="24hr"
                                scrollable
                                :allowed-minutes="allowedStep"

                                ></v-time-picker>
                            </v-menu>
                        </v-col>

                        <v-col cols="11" sm="5">
                            <v-menu
                                ref="menu"
                                v-model="menu2"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="timeEnd"
                                
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                        v-model="timeEnd"
                                        label="Heure de fin"
                                        readonly
                                        v-on="on"
                                    ></v-text-field>
                                    
                                </template>
                                <v-time-picker
                                v-if="menu2"
                                v-model="timeEnd"
                                :min="timeStart"
                                type="time"
                                full-width
                                @click:minute="$refs.menu.save(timeEnd)"
                                format="24hr"
                                scrollable
                                :allowed-minutes="allowedStep"

                                ></v-time-picker>
                            </v-menu>
                        </v-col>                      
                    </v-row>
                    

                    <v-select   
                        
                        label="Matière"
                
                        item-value="value"
                        item-text="text"
                    >
                    </v-select>


                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="pink darken-1" text @click="formAddEvent = false">Annuler</v-btn>
                    <v-btn 
                    color="blue darken-1"
                    @click="createEvent"  
                    text 
                    :disabled="isDisabled"
                    >
                    Valider
                    </v-btn>
                </v-card-actions>

                </v-form>
            </v-card-text>
            
        </v-card>

    </v-dialog>

    
</template>

<script>
    export default {
        data () {
            return {
                day: null,
                timeStart: null,
                timeEnd: null,
                menu1: false,
                menu2: false,
                modal2: false,
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
               
            },
            // Permet de désactiver le bouton de validation si le jour et l'heure n'est pas selectionné
            isDisabled () {
                return !this.day || !this.timeStart || !this.timeEnd
            },
       },
       methods: {
            createEvent() {
               this.formAddEvent = false
               this.$emit('addEvent',{
                   day:this.day,
                   timeStart:this.timeStart,
                   timeEnd:this.timeEnd,
                   
               })
            },


           // Pour selectionner les minutes par tranche de 5
            allowedStep: m => m % 5 === 0,
       }
    }
</script>

<style lang="scss" scoped>

</style>