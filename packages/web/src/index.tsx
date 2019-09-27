import { AppRegistry } from 'react-native'

import { App } from 'components/src/App'

AppRegistry.registerComponent('edemedim', () => App)
AppRegistry.runApplication('edemedim', {
  rootTag: document.getElementById('root'),
})
