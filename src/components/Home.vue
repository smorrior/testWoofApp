
<template>
  <v-content>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-progress-circular :size="70" :width="7" color="primary" indeterminate v-if="loading"></v-progress-circular>
        </v-col>
      </v-row>
      
      <v-row v-if="!loading">
        <v-col v-for="(meetup,i) in meetups" :key="i" cols="12" sm="4" >
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" :src="meetup.thumbnail"></v-img>
            <v-card-subtitle class="pb-0 mb-2">{{meetup.location}}</v-card-subtitle>
            <v-card-text class="text--primary">
              <div class="headline font-weight-bold">{{ meetup.title }}</div>
              <div>From ${{ meetup.price }}/person</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="cyan" text> Share </v-btn>
              <v-btn color="cyan" text  @click="onLoadMeetup(meetup.id)"> View Meetup </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>

</template>
<script>
export default {
    name: 'Home',
    computed: {
      meetups() {
        return this.$store.getters.loadedMeetups
      },
      loading() {
        return this.$store.getters.loading
      }
    },
    
    methods: {
      onLoadMeetup(id) {
        this.$router.push('/meetup/' + id)
        
      }
    }
}
</script>