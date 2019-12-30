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
        registerMeetups (state, payload) {
            const id = payload.id
            if (state.user.registerMeetups.findIndex(meetup => meetup.id === id) >= 0) {
                return
            }
            state.user.registerMeetups.push(id)
            state.user.fbKey[id] = payload.fbKey
        },
        unRegisterMeetups (state, payload) {
            const registeredMeetups = state.user.registerMeetups
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
            firebase.database().ref('/users/' + user.id).child('registration')
                .push(payload)
                .then(data => {
                    commit('setLoading', false)
                    commit('reisterUserForMeetup', {id: payload, fbKey: data.key})
                })
                .catch(error => {
                     // eslint-disable-next-line no-console
                    console.log(error)
                    commit('setLoading', false)
                })
        },
        unRegisterUserForMeetup ({commit, getters}, payload) {
            commit('setLoading', true)
            const user = getters.user
            if (!user.fbKeys) {
                return
            }
            const fbKey = user.fbKeys[payload]
            firebase.database.ref('/users/' + user.id + 'registrations').child(fbKey)
                .remove()
                .then(() => {
                    commit('setLoading', false)
                    commit('unregisterUserFromMeetups', payload)
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
                        userId:obj[key].userId
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
                userId: getters.user.id
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