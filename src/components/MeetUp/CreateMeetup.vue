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
                  <v-text-field id="image1" name="image1" v-model="image1" label="image1" outlined></v-text-field>
                  <v-text-field id="image2" name="image2" v-model="image2" label="image2" outlined></v-text-field>
                  <v-text-field id="image3" name="image3" v-model="image3" label="image3" outlined></v-text-field>
                  <v-text-field id="image4" name="image4" v-model="image4" label="image4" outlined></v-text-field>
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
      image1: '',
      image2: '',
      image3: '',
      image4: ''
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
          thumbnail: this.thumbnail,
          image1: this.image1,
          image2: this.image2,
          image3: this.image3,
          image4: this.image4,
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/')
      }
    }
}
</script>



   