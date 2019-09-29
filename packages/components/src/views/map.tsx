import {WebView} from 'react-native-webview';
import React from 'react';

export const RouteMap = () => {
    return (
        <WebView
            source={{
                uri: 'https://reverse.wave909.com/mapbridge',
            }}
            startInLoadingState={true}
        />
    );
}