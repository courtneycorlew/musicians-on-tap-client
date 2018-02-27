import React from 'react';
import Dashboard from './Dashboard';
import ArtistSetup from '../workouts/ArtistSetup';
import SocialLinks from '../workouts/SocialLinks';
import Auth from '../auth/Auth'
import Settings from '../settings/Settings';
import Videos from '../workouts/Videos'


export const routes = [
    {
      path: 'musiciansontap/dashboard',
      exact: true,
      main: () => <Dashboard />
    },
    {
        path: 'musiciansontap/login',
        exact: true,
        main: () => <Auth />
    },
    {
        path: 'musiciansontap/artistsetup',
        exact: true,
        main: () => <ArtistSetup/>
    },
    {
        path: 'musiciansontap/socialsettings',
        exact: true,
        main: () => <SocialLinks/>
    },
    {
        path: 'musiciansontap/settings',
        exact: true,
        main: () => <Settings />
    },
    {
        path: 'musiciansontap/videos',
        exact: true,
        main: () => <Videos />
    }


]