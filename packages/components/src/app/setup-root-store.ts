// import {onSnapshot} from "mobx-state-tree"
// @ts-ignore
import {RootStore, RootStoreModel} from './root-store'
import {Environment} from "./environment"
// import {load, save} from "components/storage";
import Strapi from 'strapi-sdk-javascript';

/**
 * The key we'll be saving our state as within async storage.
 */
const ROOT_STATE_STORAGE_KEY = "root"

/**
 * Setup the root state.
 */
export async function setupRootStore() {
    let rootStore: RootStore
    let data: any

    // prepare the environment that will be associated with the RootStore.
    const env = await createEnvironment();
    try {
        // load data from storage TODO: browser sessionStorage vs localStorage
        // data = (await load(ROOT_STATE_STORAGE_KEY)) || {}
        data = {sellerPointsStore: {},routeStore: {},userStore: {}}
        rootStore = RootStoreModel.create(data, env)
    } catch (e) {
        // if there's any problems loading, then let's at least fallback to an empty state
        // instead of crashing.
        rootStore = RootStoreModel.create({} as any, env)

        // but please inform us what happened
        __DEV__ && console.error(e.message, null)
    }

    // List stores to exclude from saving onSnapshot
    const unsaveStores = {
        navigationStore: undefined
    }

    // track changes & save to storage
    // onSnapshot(rootStore, snapshot => {
    //     save(ROOT_STATE_STORAGE_KEY, {...snapshot, ...unsaveStores})
    // })

    return rootStore
}

/**
 * Setup the environment that all the models will be sharing.
 *
 * The environment includes other functions that will be picked from some
 * of the models that get created later. This is how we loosly couple things
 * like events between models.
 */
export async function createEnvironment() {
    const env = {} as Environment;

    env.strapi = new Strapi('http://157.245.70.2:1337');

    env.strapi.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY5NjA0MDc2LCJleHAiOjE1NzIxOTYwNzZ9.J4krvKJz2uljmrq3zKKMx11VPfbE4YlcvF3AD355hg8")

    return env
}