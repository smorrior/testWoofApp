<template>
  <v-content>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-card class="elevation-12">
            <v-toolbar flat>
              <v-toolbar-title class="headline font-weight-bold">Create New Meetup</v-toolbar-title>
            </v-toolbar>
            <v-form @submit.prevent="onCreateMeetup">
              <v-card-text>
                  <v-text-field id="title" name="title" v-model="title" label="Title" outlined></v-text-field>
                  <v-text-field id="location" name="location" v-model="location" label="location" outlined></v-text-field>
                  <v-text-field id="duration" name="duration" v-model="duration" label="duration" type="number" outlined></v-text-field>
                  <v-text-field id="size" name="size" v-model="size" label="size" type="number" outlined></v-text-field>
                  <v-text-field id="price" prefix="$" name="price" v-model="price" label="price" type="number" outlined></v-text-field>
                  <v-text-field id="includes" name="includes" v-model="includes" label="includes" outlined></v-text-field>
                  <v-textarea id="info" name="info" v-model="info" label="info" outlined></v-textarea>
                  <v-text-field id="thumbnail" name="thumbnail" v-model="thumbnail" label="thumbnail" outlined></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit" :disabled="!formIsValid">Create</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<script>
export default {
  data : () => ({
      title: '',
      location: '',
      duration: '',
      size: '',
      price: '',
      includes: '',
      info: '',
      thumbnail: '',
    }),
    computed: {
      formIsValid () {
        return this.title !== '' &&  this.location !== '' &&  this.duration !== '' &&  this.size !== '' &&  this.price !== ''
      }
    },
    methods: {
      onCreateMeetup () {
        if (!this.formIsValid) {
          return
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          duration: this.duration,
          size: this.size,
          price: this.price,
          includes: this.includes,
          info: this.info,
          thumbnail: this.thumbnail
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/')
      }
    }
}
</script>



   