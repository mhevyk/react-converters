import { ComponentType } from 'react';
import HomePage from '../pages/HomePage';
import AreaPage from '../pages/AreaPage';
import LengthPage from '../pages/LengthPage';
import TemperaturePage from '../pages/TemperaturePage';
import NotFoundPage from '../pages/NotFoundPage';

export interface RouteType {
    path: string;
    name?: string,
    component: ComponentType;
}

const sitemap: RouteType[] = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/area',
        name: 'area',
        component: AreaPage
    },
    {
        path: '/length',
        name: 'length',
        component: LengthPage
    },
    {
        path: '/temperature',
        name: 'temperature',
        component: TemperaturePage
    },
    {
        path: '*',
        component: NotFoundPage
    }
];

export default sitemap;