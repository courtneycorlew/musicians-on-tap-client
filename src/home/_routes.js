import React from 'react';
import Dashboard from './Dashboard';
import ArtistSetup from '../workouts/ArtistSetup';
import SocialLinks from '../workouts/SocialLinks';
import Auth from '../auth/Auth'
import Settings from '../settings/Settings';
import Videos from '../workouts/Videos'


export const routes = [
    {
      path: '/dashboard',
      exact: true,
      main: () => <Dashboard />
    },
    {
        path: '/login',
        exact: true,
        main: () => <Auth />
    },
    {
        path: '/artistsetup',
        exact: true,
        main: () => <ArtistSetup/>
    },
    {
        path: '/socialsettings',
        exact: true,
        main: () => <SocialLinks/>
    },
    {
        path: '/settings',
        exact: true,
        main: () => <Settings />
    },
    {
        path: '/videos',
        exact: true,
        main: () => <Videos />
    }


]