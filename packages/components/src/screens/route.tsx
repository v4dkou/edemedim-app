import {observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {RouteMap} from '../views/map';

export const RouteScreen = observer(() => {
    return (
        <RouteMap />
    );
})