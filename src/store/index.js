import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                id: '1', 
                title: 'Fairy Dog Walk',
                location: 'Los Angeles, California',
                duration: '2.5 hours',
                size: 'Up to 2 people',
                price: 'From $35/person',
                includes:'Equipment',
                rating: "4,8",
                info: "We'll meet at Austin's animal shelter and begin with an inspiring introduction to the city's no-kill movement and policies that result in the saving of over 95% of the animals that come through Austin's shelter (the largest shelter in the US to achieve these results)! I'll lead our group on a tour of our impressive shelter, demonstrating how the whole city comes together to save lives.  Each guest will be able to walk about 3 shelter dogs and give the dogs some much needed love and exercise. We will take photos that will highlight the dog's adoptability and raise awareness. Know that 100% of your payment for this experience will be donated back to the shelter, providing funds for the care of the very dogs we will meet on your visit!",
                thumbnail:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md',
                images: [
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/3ddf5f08-08b7-41f4-80d9-47d0aaa8a0f3.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/606b161f-7541-44e4-9b89-39bfbd4f8f5e.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/f77788dc-d88f-43c7-ba15-fc1991ccd311.jpeg?aki_policy=exp_md'},
                ] 
            }, 
            {
                id: '2', 
                title: 'PUP Paddleboard Tour',
                location: 'Los Angeles, California',
                duration: '1.5 hours',
                size: 'Up to 6 people',
                price: 'From $55/person',
                includes:'Equipment, Drinks',
                rating: "4,9",
                info: "Mr. Beaches and I will guide you on a one hour leisurely tour of the world-famous Las Olas canals. Our tours focus on the beauty surrounding us, and not your paddleboarding technique. So, feel free to stand, kneel or sit - as long as you enjoy yourself.",
                thumbnail:'https://a0.muscache.com/im/pictures/00ca6ed0-2d07-466e-8a15-c0414cad7f48.jpg?aki_policy=exp_md',
                images: [
                    { imageUrl:'https://a0.muscache.com/im/pictures/00ca6ed0-2d07-466e-8a15-c0414cad7f48.jpg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/00ca6ed0-2d07-466e-8a15-c0414cad7f48.jpg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/d94e7f8a-8a0c-4a47-9a91-ba7e08f1f65b.jpg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/d94e7f8a-8a0c-4a47-9a91-ba7e08f1f65b.jpg?aki_policy=exp_md'},
                ] 
            },
            {
                id: '3', 
                title: 'Walk with dogs',
                location: 'Paris, France',
                duration: '2 hours',
                size: 'Up to 8 people',
                price: 'From $15/person',
                includes:'Equipment',
                rating: "4,8",
                info: "We will have a two-hours walk in the woods with my dog pack, composed by adorable Parisian doggies (10 dogs, more or less). They are very friendly, and will easily get you to smile. Being with them in this beautiful, natural area is really peaceful and joyful, which is very much appreciated in a crowded city like Paris. ",
                thumbnail:'https://a0.muscache.com/im/pictures/6db9918e-6261-4769-bb35-ccf129836775.jpg?aki_policy=exp_md',
                images: [
                    { imageUrl:'https://a0.muscache.com/im/pictures/6db9918e-6261-4769-bb35-ccf129836775.jpg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/cee521c6-54e1-44f7-a3f8-7325b61896b0.jpg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/efca3764-790b-40bb-aa3a-0dbb13315dcb.jpg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/1d1c1501-a31d-4ec4-b766-0e6301d270a5.jpg?aki_policy=exp_md'},
                ] 
            },
            {
                id: '4', 
                title: 'Fairy Pig Walk',
                location: 'Berlin, Germany',
                duration: '2.5 hours',
                size: 'Up to 2 people',
                price: 'From $35/person',
                includes:'Equipment',
                rating: "4,8",
                info: "We'll meet at Austin's animal shelter and begin with an inspiring introduction to the city's no-kill movement and policies that result in the saving of over 95% of the animals that come through Austin's shelter (the largest shelter in the US to achieve these results)! I'll lead our group on a tour of our impressive shelter, demonstrating how the whole city comes together to save lives.  Each guest will be able to walk about 3 shelter dogs and give the dogs some much needed love and exercise. We will take photos that will highlight the dog's adoptability and raise awareness. Know that 100% of your payment for this experience will be donated back to the shelter, providing funds for the care of the very dogs we will meet on your visit!",
                thumbnail:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md',
                images: [
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/3ddf5f08-08b7-41f4-80d9-47d0aaa8a0f3.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/606b161f-7541-44e4-9b89-39bfbd4f8f5e.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/f77788dc-d88f-43c7-ba15-fc1991ccd311.jpeg?aki_policy=exp_md'},
                ] 
            },
            {
                id: '5', 
                title: 'Fairy Pig Walk',
                location: 'Berlin, Germany',
                duration: '2.5 hours',
                size: 'Up to 2 people',
                price: 'From $35/person',
                includes:'Equipment',
                rating: "4,8",
                info: "We'll meet at Austin's animal shelter and begin with an inspiring introduction to the city's no-kill movement and policies that result in the saving of over 95% of the animals that come through Austin's shelter (the largest shelter in the US to achieve these results)! I'll lead our group on a tour of our impressive shelter, demonstrating how the whole city comes together to save lives.  Each guest will be able to walk about 3 shelter dogs and give the dogs some much needed love and exercise. We will take photos that will highlight the dog's adoptability and raise awareness. Know that 100% of your payment for this experience will be donated back to the shelter, providing funds for the care of the very dogs we will meet on your visit!",
                thumbnail:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md',
                images: [
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/3ddf5f08-08b7-41f4-80d9-47d0aaa8a0f3.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/606b161f-7541-44e4-9b89-39bfbd4f8f5e.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/f77788dc-d88f-43c7-ba15-fc1991ccd311.jpeg?aki_policy=exp_md'},
                ] 
            },
            {
                id: '6', 
                title: 'Fairy Pig Walk',
                location: 'Berlin, Germany',
                duration: '2.5 hours',
                size: 'Up to 2 people',
                price: 'From $35/person',
                includes:'Equipment',
                rating: "4,8",
                info: "We'll meet at Austin's animal shelter and begin with an inspiring introduction to the city's no-kill movement and policies that result in the saving of over 95% of the animals that come through Austin's shelter (the largest shelter in the US to achieve these results)! I'll lead our group on a tour of our impressive shelter, demonstrating how the whole city comes together to save lives.  Each guest will be able to walk about 3 shelter dogs and give the dogs some much needed love and exercise. We will take photos that will highlight the dog's adoptability and raise awareness. Know that 100% of your payment for this experience will be donated back to the shelter, providing funds for the care of the very dogs we will meet on your visit!",
                thumbnail:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md',
                images: [
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/3ddf5f08-08b7-41f4-80d9-47d0aaa8a0f3.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/606b161f-7541-44e4-9b89-39bfbd4f8f5e.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/f77788dc-d88f-43c7-ba15-fc1991ccd311.jpeg?aki_policy=exp_md'},
                ] 
            },
            {
                id: '7', 
                title: 'Fairy Pig Walk',
                location: 'Berlin, Germany',
                duration: '2.5 hours',
                size: 'Up to 2 people',
                price: 'From $35/person',
                includes:'Equipment',
                rating: "4,8",
                info: "We'll meet at Austin's animal shelter and begin with an inspiring introduction to the city's no-kill movement and policies that result in the saving of over 95% of the animals that come through Austin's shelter (the largest shelter in the US to achieve these results)! I'll lead our group on a tour of our impressive shelter, demonstrating how the whole city comes together to save lives.  Each guest will be able to walk about 3 shelter dogs and give the dogs some much needed love and exercise. We will take photos that will highlight the dog's adoptability and raise awareness. Know that 100% of your payment for this experience will be donated back to the shelter, providing funds for the care of the very dogs we will meet on your visit!",
                thumbnail:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md',
                images: [
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/3ddf5f08-08b7-41f4-80d9-47d0aaa8a0f3.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/606b161f-7541-44e4-9b89-39bfbd4f8f5e.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/f77788dc-d88f-43c7-ba15-fc1991ccd311.jpeg?aki_policy=exp_md'},
                ] 
            },
            {
                id: '8', 
                title: 'Fairy Pig Walk',
                location: 'Berlin, Germany',
                duration: '2.5 hours',
                size: 'Up to 2 people',
                price: 'From $35/person',
                includes:'Equipment',
                rating: "4,8",
                info: "We'll meet at Austin's animal shelter and begin with an inspiring introduction to the city's no-kill movement and policies that result in the saving of over 95% of the animals that come through Austin's shelter (the largest shelter in the US to achieve these results)! I'll lead our group on a tour of our impressive shelter, demonstrating how the whole city comes together to save lives.  Each guest will be able to walk about 3 shelter dogs and give the dogs some much needed love and exercise. We will take photos that will highlight the dog's adoptability and raise awareness. Know that 100% of your payment for this experience will be donated back to the shelter, providing funds for the care of the very dogs we will meet on your visit!",
                thumbnail:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md',
                images: [
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/3ddf5f08-08b7-41f4-80d9-47d0aaa8a0f3.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/606b161f-7541-44e4-9b89-39bfbd4f8f5e.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/f77788dc-d88f-43c7-ba15-fc1991ccd311.jpeg?aki_policy=exp_md'},
                ] 
            },
            {
                id: '9', 
                title: 'Fairy Pig Walk',
                location: 'Berlin, Germany',
                duration: '2.5 hours',
                size: 'Up to 2 people',
                price: 'From $35/person',
                includes:'Equipment',
                rating: "4,8",
                info: "We'll meet at Austin's animal shelter and begin with an inspiring introduction to the city's no-kill movement and policies that result in the saving of over 95% of the animals that come through Austin's shelter (the largest shelter in the US to achieve these results)! I'll lead our group on a tour of our impressive shelter, demonstrating how the whole city comes together to save lives.  Each guest will be able to walk about 3 shelter dogs and give the dogs some much needed love and exercise. We will take photos that will highlight the dog's adoptability and raise awareness. Know that 100% of your payment for this experience will be donated back to the shelter, providing funds for the care of the very dogs we will meet on your visit!",
                thumbnail:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md',
                images: [
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/3ddf5f08-08b7-41f4-80d9-47d0aaa8a0f3.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/606b161f-7541-44e4-9b89-39bfbd4f8f5e.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/f77788dc-d88f-43c7-ba15-fc1991ccd311.jpeg?aki_policy=exp_md'},
                ] 
            },
            {
                id: '10', 
                title: 'Fairy Pig Walk',
                location: 'Berlin, Germany',
                duration: '2.5 hours',
                size: 'Up to 2 people',
                price: 'From $35/person',
                includes:'Equipment',
                rating: "4,8",
                info: "We'll meet at Austin's animal shelter and begin with an inspiring introduction to the city's no-kill movement and policies that result in the saving of over 95% of the animals that come through Austin's shelter (the largest shelter in the US to achieve these results)! I'll lead our group on a tour of our impressive shelter, demonstrating how the whole city comes together to save lives.  Each guest will be able to walk about 3 shelter dogs and give the dogs some much needed love and exercise. We will take photos that will highlight the dog's adoptability and raise awareness. Know that 100% of your payment for this experience will be donated back to the shelter, providing funds for the care of the very dogs we will meet on your visit!",
                thumbnail:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md',
                images: [
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/ffa99fc1-ad51-4481-b198-745f39feb46f.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/3ddf5f08-08b7-41f4-80d9-47d0aaa8a0f3.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/606b161f-7541-44e4-9b89-39bfbd4f8f5e.jpeg?aki_policy=exp_md'},
                    { imageUrl:'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1094333-media_library/original/f77788dc-d88f-43c7-ba15-fc1991ccd311.jpeg?aki_policy=exp_md'},
                ] 
            },
        ],
    user: {
        id:'123',
        registerMeetuos: ['1']
    }
    },
    mutations: {},
    actions: {},
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
        }
    }
})