import {getEnv, Instance, types} from "mobx-state-tree";
import {Environment} from '../app/environment';
import {UsersPermissionsUser} from '../models';
import frozenContentStoreModel from '../utils/content-store/frozen-content-store';

/**
 * TODO: Choose between proper MST typings or pure MobX
 *
 * contentStoreModel(types.model({
                    email: types.maybe(types.string),
                    username: types.maybe(types.string),
                    routetickets: types.array(types.model({
                        id: types.string,
                        route: types.frozen()
                    }))
            }))
 */

const UserStoreModel =
        types.model({
            user: frozenContentStoreModel<UsersPermissionsUser, any>(),
            token: types.maybe(types.string),
        })
        .volatile(self => ({
            env: getEnv(self) as Environment
        }))
        .actions(self => ({
            getUser() {
                self.user.setLoading()
                self.env.strapi.request('GET', '/users/me')
                    .then(self.user.setData)
                    .catch(self.user.setError)
            }
        }))

export default UserStoreModel

export type UserStore = Instance<typeof UserStoreModel>