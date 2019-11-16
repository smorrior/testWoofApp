import Home from '@/components/Home'
import CreateMeetup from '@/components/MeetUp/CreateMeetup'
import Meetup from '@/components/MeetUp/Meetup'
import Profile from '@/components/User/Profile'
import SignIn from '@/components/User/SignIn'
import SignUp from '@/components/User/SignUp'

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
        path:'/meetup/new',
        name:'CreateMeetup',
        component: CreateMeetup
    },
    {
        path:'/profile',
        name:'Profile',
        component: Profile
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
