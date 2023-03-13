import { ComponentType, lazy } from 'react';
import HomePage from '../pages/HomePage';
import AreaPage from '../pages/AreaPage';
const LengthPage = lazy(() => import('../pages/LengthPage'));
const VolumePage = lazy(() => import('../pages/VolumePage'));
const WeightPage = lazy(() => import('../pages/WeightPage'));
const DataPage = lazy(() => import('../pages/DataPage'));
const SpeedPage = lazy(() => import('../pages/SpeedPage'));
const TimePage = lazy(() => import('../pages/TimePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))


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
        path: '/volume',
        name: 'volume',
        component: VolumePage
    },
    {
        path: '/weight',
        name: 'weight',
        component: WeightPage
    },
    {
        path: '/data',
        name: 'data',
        component: DataPage
    },
    {
        path: '/speed',
        name: 'speed',
        component: SpeedPage
    },
    {
        path: '/time',
        name: 'time',
        component: TimePage
    },
    {
        path: '*',
        component: NotFoundPage
    },
];

export default sitemap;