import {WebView} from 'react-native-webview';
import React from 'react';

export const RouteMap = () => {
    return (
        <WebView
            source={{
                uri: 'https://codepen.io/Feodor_Evdokimov/full/YoOoPv',
            }}
            injectedJavaScript={'document.getElementById(\'main-header\').style = \'display: none;\''}
            startInLoadingState={true}
        />
    );
}