import { HomePage } from './pages/home-page.jsx'
import { Podcasts } from './pages/podcast-page.jsx'
import { Fourms } from './pages/Fourms-page.jsx'
import { Giftes } from './pages/Giftes-page.jsx'


// import logo from '../assets/img/noobGurlLogo.png'


// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'logo',
    },
    {
        path: 'Podcasts',
        component: <Podcasts />,
        label: 'סלון הפודקסטים',
    },
    {
        path: 'Fourms',
        component: <Fourms />,
        label: 'שאלונים',
    },
    {
        path: 'Giftes',
        component: <Giftes />,
        label: 'מתנות קטנות',
    },

]

export default routes