import { ComponentType, lazy } from 'react';
import HomePage from '../pages/HomePage';
import { TbChartAreaLine } from 'react-icons/tb';
import { RxRulerHorizontal } from 'react-icons/rx';
import { GiCellarBarrels, GiWeight, GiSpeedometer } from 'react-icons/gi';
import { DiDatabase } from 'react-icons/di';
import { CgSandClock } from 'react-icons/cg';

const AreaPage = lazy(() => import('../pages/AreaPage'));
const LengthPage = lazy(() => import('../pages/LengthPage'));
const VolumePage = lazy(() => import('../pages/VolumePage'));
const WeightPage = lazy(() => import('../pages/WeightPage'));
const DataPage = lazy(() => import('../pages/DataPage'));
const SpeedPage = lazy(() => import('../pages/SpeedPage'));
const TimePage = lazy(() => import('../pages/TimePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

interface IconProps {
    size?: number
}

export interface RouteType {
    path: string;
    name?: string,
    component: ComponentType;
    icon?: ComponentType<IconProps>
}

const sitemap: RouteType[] = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/area',
        name: 'area',
        component: AreaPage,
        icon: TbChartAreaLine
    },
    {
        path: '/length',
        name: 'length',
        component: LengthPage,
        icon: RxRulerHorizontal
    },
    {
        path: '/volume',
        name: 'volume',
        component: VolumePage,
        icon: GiCellarBarrels
    },
    {
        path: '/weight',
        name: 'weight',
        component: WeightPage,
        icon: GiWeight,
    },
    {
        path: '/data',
        name: 'data',
        component: DataPage,
        icon: DiDatabase
    },
    {
        path: '/speed',
        name: 'speed',
        component: SpeedPage,
        icon: GiSpeedometer
    },
    {
        path: '/time',
        name: 'time',
        component: TimePage,
        icon: CgSandClock
    },
    {
        path: '*',
        component: NotFoundPage
    },
];

export default sitemap;