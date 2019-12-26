import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
    user: null,
    loading: false,
    error: null,
    },
    mutations: {
        setLoadedMeetups (state, payload) {
            state.loadedMeetups = payload
        },
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload)
        },
        setUser (state, payload){
            state.user = payload
        },
        setLoading (state, payload) {
            state.loading = payload
        },
        setError (state, payload) {
            state.error = payload
        },
        clearError (state) {
            state.error = null
        }
    },
    actions: {
        loadMeetup ({commit}) {
            commit('setLoading', true)
            firebase.database().ref('meetups').once('value')
            .then((data) =>{
                const meetups = []
                const obj = data.val()
                for (let key in obj) {
                    meetups.push({
                        id: key,
                        duration: obj[key].duration,
                        includes: obj[key].includes,
                        info: obj[key].info,
                        location: obj[key].location,
                        price: obj[key].price,
                        size: obj[key].size,
                        thumbnail: obj[key].thumbnail,
                        title: obj[key].title,
                    })
                }
                commit('setLoadedMeetups', meetups)
                commit('setLoading', false)
            }) 
            .catch(
                (error) => {
                    // eslint-disable-next-line no-console
                    console.log(error)
                    commit('setLoading', true)
                }
            )
        },
        
        createMeetup ({commit}, payload){
            const meetup = {
                title: payload.title,
                location:payload.location,
                duration:payload.duration,
                size:payload.size,
                price:payload.price,
                includes:payload.includes,
                info:payload.info,
                thumbnail:payload.thumbnail,
            }
            firebase.database().ref('meetups').push(meetup)
            .then((data) => {
                const key = data.key
                commit('createMeetup', {
                    ...meetup,
                    id: key
                })
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error)
            })  
        },
        signUpUser ({commit}, payload) {
            commit('setLoading', true)
            commit('setError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(
                user=> {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        registerMeetups: []
                    }
                    commit('setUser', newUser)
                }
            )
            .catch(
                error => {
                    commit('setLoading', false)
                    commit('setError', error)
                    // eslint-disable-next-line no-console
                    console.log(error)
                }
            )
        },
        signInUser ({commit}, payload) {
            commit('setLoading', true)
            commit('setError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser  = {
                            id: user.uid,
                            registerMeetups: []
                        }
                        commit('setUser', newUser)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                         // eslint-disable-next-line no-console
                        console.log(error)
                    }
                )
        },
        autoSignIn({commit}, payload) {
            commit('setUser', {id: payload.uid, registerMeetups:[]})
        },
        clearError ({commit}) {
            commit('clearError')
        }
    },
    getters: {
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        loadedMeetup (state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        },
        user (state) {
            return state.user 
        },
        loading (state) {
            return state.loading 
        },
        error (state) {
            return state.error
        }

    }
})