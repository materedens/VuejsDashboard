<template>
  <v-form>
    <v-container class="grey lighten-5">
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="FirstName"
            placeholder="FirstName"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="LastName"
            placeholder="LastName"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-textarea solo name="input-7-4" label="Message"></v-textarea>
        </v-col>
      </v-row>
      <v-btn depressed color="primary" elevation="2" outlined> Primary </v-btn>
    </v-container>
  </v-form>
</template>
