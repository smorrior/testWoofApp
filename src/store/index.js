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
        registerUserForMeetup (state, payload) {
            const id = payload.id
            if (state.user.registeredMeetups.findIndex(meetup => meetup.id === id) >= 0) {
              return
            }
            state.user.registeredMeetups.push(id)
            state.user.fbKeys[id] = payload.fbKey
          },
          unregisterUserFromMeetup (state, payload) {
            const registeredMeetups = state.user.registeredMeetups
            registeredMeetups.splice(registeredMeetups.findIndex(meetup => meetup.id === payload), 1)
            Reflect.deleteProperty(state.user.fbKeys, payload)
          },
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
        registerUserForMeetup ({commit, getters}, payload) {
            commit('setLoading', true)
            const user = getters.user
            firebase.database().ref('/users/' + user.id).child('/registrations/')
                .push(payload)
                .then(data => {
                    commit('setLoading', false)
                    commit('registerUserForMeetup', {id: payload, fbKey: data.key})
                })
                .catch(error => {
                     // eslint-disable-next-line no-console
                    console.log(error)
                    commit('setLoading', false)
                })
        },
        unregisterUserFromMeetup ({commit, getters}, payload) {
            commit('setLoading', true)
            const user = getters.user
            if (!user.fbKeys) {
                return
            }
            const fbKey = user.fbKeys[payload]
            firebase.database().ref('/users/' + user.id + '/registrations/').child(fbKey)
                .remove()
                .then(() => {
                    commit('setLoading', false)
                    commit('unregisterUserFromMeetup', payload)
                }) 
                .catch(error => {
                    // eslint-disable-next-line no-console
                    console.log(error)
                    commit('setLoading', false)
                })
        },
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
                        image1:obj[key].image1,
                        image2:obj[key].image2,
                        image3:obj[key].image3,
                        image4:obj[key].image4,
                        creatorId:obj[key].creatorId
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
        createMeetup ({commit, getters}, payload){
            const meetup = {
                title: payload.title,
                location: payload.location,
                duration: payload.duration,
                size: payload.size,
                price: payload.price,
                includes: payload.includes,
                info: payload.info,
                thumbnail: payload.thumbnail,
                image1: payload.image1,
                image2: payload.image2,
                image3: payload.image3,
                image4: payload.image4,
                creatorId: getters.user.id
            }
            let key
            firebase.database().ref('meetups').push(meetup)
            .then((data) => {
                key = data.key
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
        signUserUp ({commit}, payload) {
            commit('setLoading', true)
            commit('setError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(
                user=> {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        registeredMeetups: [],
                        fbKeys: {}
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
        signUserIn ({commit}, payload) {
            commit('setLoading', true)
            commit('setError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser  = {
                            id: user.uid,
                            registeredMeetups: [],
                            fbKeys: {}
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
            commit('setUser', {
                id: payload.uid, 
                registeredMeetups:[],
                fbKeys: {}
            })
        },
        fetchUserData({commit, getters}) {
            commit('setLoading', true)
            firebase.database().ref('/users/' + getters.user.id + '/registrations/').once('value')
            .then( data => {
                const dataPairs = data.val()
                let registeredMeetups = []
                let swappedPairs = {}
                for (let key in dataPairs) {
                    registeredMeetups.push(dataPairs[key])
                    swappedPairs[dataPairs[key]] = key
                }
                const updatedUser = {
                    id: getters.user.id,
                    registeredMeetups: registeredMeetups,
                    fbKeys: swappedPairs
                }
                commit('setLoading', false)
                commit('setUser', updatedUser)
            })
        },
        logout({commit}) {
            firebase.auth().signOut()
            commit('setUser', null)
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