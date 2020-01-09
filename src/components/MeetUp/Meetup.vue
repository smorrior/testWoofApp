<template>
    <v-content >
        <v-container fluid>
            <v-row class="ma-5">
                <v-col  md="3" sm="3" cols="3" >
                   <v-img v-bind:src='meetup.image1' max-height="400px"></v-img>
               </v-col>
               <v-col  md="3" sm="3" cols="3" >
                   <v-img v-bind:src='meetup.image2' max-height="400px"></v-img>
               </v-col>
               <v-col  md="3" sm="3" cols="3" >
                   <v-img v-bind:src='meetup.image3' max-height="400px"></v-img>
               </v-col>
               <v-col  md="3" sm="3" cols="3" >
                   <v-img v-bind:src='meetup.image4' max-height="400px"></v-img>
               </v-col>
            </v-row>
            <v-row class="ma-5">
                <v-col  md="4" sm="12" cols="12"> 
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-title class="display-1 font-weight-bold">{{meetup.title}}</v-list-item-title>
                            <v-list-item-subtitle>{{meetup.location}}</v-list-item-subtitle>
                            <app-register :meetupId="meetup.id" v-if="userIsAuthenticated && !userIsCreator"></app-register>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col  md="8" sm="12" cols="12" class="text-justify">
                    <v-row >
                        <v-col  md="3" sm="3" cols="3"> 
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        <v-icon class="black--text headline mr-2"> mdi-clock </v-icon>
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="font-weight-bold"> Duration: </v-list-item-subtitle>
                                    <v-list-item-subtitle> {{meetup.duration}}h </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col  md="3" sm="3" cols="3">
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        <v-icon class="black--text headline mr-2"> mdi-account-multiple </v-icon>
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="font-weight-bold"> Group size </v-list-item-subtitle>
                                    <v-list-item-subtitle>Up to {{meetup.size}} people</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col  md="3" sm="3" cols="3">
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        <v-icon class="black--text headline mr-2"> mdi-clipboard-list-outline </v-icon>
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="font-weight-bold"> Includes </v-list-item-subtitle>
                                    <v-list-item-subtitle> {{meetup.includes}} </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                        <v-col  md="3" sm="3" cols="3">
                            <v-list-item three-line >
                                <v-list-item-content>
                                    <v-list-item-title>
                                        <v-icon class="black--text headline mr-2">
                                            mdi-map-marker
                                        </v-icon>
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="font-weight-bold">
                                        Location
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                        {{meetup.location}}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid class="grey lighten-3"> 
             <v-row class="ma-5">
                <v-col  md="4" sm="12" cols="12"> 
                        <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title class="display-1 font-weight-bold">what you'll do</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                </v-col>
                <v-col  md="8" sm="12" cols="12" class="text-justify">
                    {{meetup.info}}
                </v-col>
            </v-row>
            
        </v-container>
       
        <v-container fluid>
             <v-row class="ma-5">
                <v-col  md="4" sm="12" cols="12"> 
                        <v-list-item >
                            <v-list-item-content>
                                <v-list-item-title class=" font-weight-bold display-1">animals</v-list-item-title>
                                <v-list-item-subtitle>on Woof Experiences</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                </v-col>
                <v-col  md="8" sm="12" cols="12" >
                    <v-row >
                        <v-col  md="4" sm="4" cols="12">
                            <v-icon class="black--text headline mr-2">mdi-dog-service  </v-icon>
                            <span class="font-weight-bold">Responsible interactions</span><br>
                            All hosts must follow guidelines created with World Animal Protection.
                        </v-col>
                        <v-col  md="4" sm="4" cols="12">
                            <v-icon class="black--text headline mr-2">mdi-shield-half-full  </v-icon>
                            <span class="font-weight-bold">Caring expert hosts</span><br>
                            Learn from biologists, conservationists, farmers, and more.
                        </v-col>
                        <v-col  md="4" sm="4" cols="12"> 
                            <v-icon class="black--text headline mr-2">mdi-dog  </v-icon>
                            <span class="font-weight-bold">Diverse dog breeds</span><br>
                            Meet over 50 dog breeds, from chihuahua to mastiff. 
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>
<script>
export default {
    props: ['id'],
    computed: {
        meetup () {
            return this.$store.getters.loadedMeetup(this.id)
        },
        userIsAuthenticated () {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        },
        userIsCreator () {
            if (!this.userIsAuthenticated) {
                return false
            }
            return this.$store.getters.user.id === this.meetup.creatorId
        },
        loading () {
            return this.$store.getters.loading
        }
    }
}
</script>