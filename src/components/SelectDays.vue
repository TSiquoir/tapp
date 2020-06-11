<template>
    <v-dialog v-model="formAddEvent" persistent max-width="600px">
            <template v-slot:activator="{ on }">
                
                
                <v-btn 
                    class="pink white--text" 
                    dark v-on="on"
                >
                    Sélectionner les jours de la semaine
                </v-btn>
            </template>
    </v-dialog>
</template>        