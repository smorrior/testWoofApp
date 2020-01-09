<template>
  <v-row justify="center">
    <v-dialog v-model="registerDialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">
            {{ userIsRegistered ? 'Unregister' : 'Register'}}
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span v-if="userIsRegistered" class="headline">Unregister from Meetup?</span>
          <span v-if="!userIsRegistered" class="headline">Register from Meetup</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <span>You can always change your decision later on.</span>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="registerDialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="onConfirm">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      registerDialog: false,
    }),
    props: ['meetupId'],
    computed: {
      userIsRegistered () {
        return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
          return meetupId === this.meetupId
        }) >= 0
      }

    },
    methods: {
      onConfirm () {
        if (this.userIsRegistered) {
          this.$store.dispatch('unregisterUserFromMeetup', this.meetupId)
           this.registerDialog= false
        } else {
          this.$store.dispatch('registerUserForMeetup', this.meetupId)
          this.registerDialog= false
        }
      }
    }
  }
</script>