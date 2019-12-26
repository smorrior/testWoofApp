import Home from '@/components/Home'
import CreateMeetup from '@/components/MeetUp/CreateMeetup'
import Meetup from '@/components/MeetUp/Meetup'
import Profile from '@/components/User/Profile'
import SignIn from '@/components/User/SignIn'
import SignUp from '@/components/User/SignUp'
import authGuard from './auth-guard'
const routes = [
    {
        path:'/',
        name:'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path:'/meetup/:id',
        name:'Meetup',
        props: true,
        component: Meetup
    },
    {
        path:'/organize-meetup',
        name:'CreateMeetup',
        component: CreateMeetup,
        beforeCreate: authGuard
    },
    {
        path:'/profile',
        name:'Profile',
        component: Profile,
        beforeCreate: authGuard
    },
    {
        path:'/sign-in',
        name:'SignIn',
        component: SignIn
    },
    {
        path:'/sign-up',
        name:'SignUp',
        component: SignUp
    },
]


export default routes;
