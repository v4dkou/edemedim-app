import React, {useEffect, useState, useContext, forwardRef} from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Strapi from 'strapi-sdk-javascript';

const strapi = new Strapi('http://localhost:1337');

import { AppHeader } from './AppHeader'
import {types} from 'mobx-state-tree';

import {observer} from 'mobx-react'

const MSTContext = React.createContext(null);

// eslint-disable-next-line prefer-destructuring
export const Provider = MSTContext.Provider;

// TODO: mapState typings
export function useMst(mapStateToProps: (store: any) => any) {
    const store = useContext(MSTContext);

    if (typeof mapStateToProps !== 'undefined') {
        return mapStateToProps(store);
    }

    return store;
}

const RootStore = types.model({
    count: 0,
}).actions(self => ({
    inc() {
        self.count += 1;
    }
}));

const rootStore = RootStore.create({});



const Counter = observer(() => {
    const { count, inc } = useMst(store => ({
        count: store.count,
        inc: store.inc,
    }));

    return (
        <View>
            <Text>value: {count}</Text>
            <Button onPress={inc} title="Inc"/>
        </View>
    );
})

export function App() {
    return (<Provider value={rootStore}>
            <Main/>
        </Provider>)
}

export function Main() {
    const [jobs, setJobs] = useState([{} as Job]);

    useEffect(() => {
        const fetch = async () => {
            const result = await strapi.getEntries('jobs') as Job[];
            setJobs(result);
        }
        fetch()
    }, [])

    return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <AppHeader />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Code sharing using Monorepo</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>packages/components/App.tsx</Text> to change this
                screen and then come back to see your edits (in the phone or the browser).
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Web support via react-native-web</Text>
              <Text style={styles.sectionDescription}>
                Run <Text style={styles.highlight}>yarn workspace web start</Text> to
                open this app in the browser.
              </Text>
              <Text style={styles.sectionDescription}>
                It will share the same code from mobile, unless you create platform-specific files
                using the <Text style={styles.highlight}>.web.tsx</Text> extension
                (also supports <Text style={styles.highlight}>.android</Text>,{' '}
                <Text style={styles.highlight}>.ios</Text>,{' '}
                <Text style={styles.highlight}>.native</Text>, etc).
              </Text>
            </View>
              {jobs.map(job => <Text>{job.vacancy}</Text>)}

              <Counter />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

declare var global: any