<template>
  <div class="container">
    <div class="form">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Date"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>

      <v-text-field
        id="timeStart"
        v-model="timeStart"
        type="time"
        suffix="PST"
        name="timeStart"
        label="Début de la séance"
      />

      <v-text-field
        id="timeEnd"
        v-model="timeEnd"
        type="time"
        suffix="PST"
        name="timeEnd"
        label="Fin de la séance"
      />

      <v-text-field
        id="subject"
        v-model="subject"
        type="text"
        name="subject"
        label="Matière"
        clearable
      />

      <v-text-field
        id="skills"
        v-model="skills"
        type="text"
        name="skills"
        label="Compétences"
        clearable
      />

       <v-text-field
        id="goals"
        v-model="goals"
        type="text"
        name="goals"
        label="Objectifs"
        clearable
      />

      <v-autocomplete
        v-model="materials"
        :items="[
          'Papier',
          'ciseaux',
          'colle',
          'Peinture',
          'Boite à oeufs',
          'ect',
        ]"
        chips
        label="Matériels"
        full-width
        hide-details
        hide-no-data
        hide-selected
        multiple
        single-line
        clearable
      ></v-autocomplete>

      <v-textarea
        v-model="activityDescrition"
        label="description de l'activité"
        counter
        maxlength="255"
        full-width
        single-line
        clearable
      ></v-textarea>

      <v-btn class="ma-2" @click="addInformation" color="secondary"
        >Valider</v-btn
      >
    </div>

    <div class="result"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["Papier", "ciseaux", "colle", "Peinture", "Boite à oeufs", "ect"],
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      timeStart: null,
      timeEnd: null,
      subject: null,
      skills: null,
      goals: null,
      materials: null,
      activityDescrition: null,
    };
  },
  methods: {
    addInformation() {
      console.log({
        date: this.date,
        timeStart: this.timeStart,
        timeEnd: this.timeEnd,
        subject: this.subject,
        skills: this.skills,
        materials: this.materials,
        activityDescrition: this.activityDescrition,
        goals: this.goals,
      })
      this.$axios.post('/notebook/task', {
        date: this.date,
        timeStart: this.timeStart,
        timeEnd: this.timeEnd,
        subject: this.subject,
        skills: this.skills,
        materials: this.materials,
        activityDescrition: this.activityDescrition,
        goals: this.goals,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
input,
select {
  margin-left: 10px;
}
</style>
