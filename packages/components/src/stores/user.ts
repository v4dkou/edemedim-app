import {cast, getEnv, Instance, types} from "mobx-state-tree";
import {Environment} from '../app/environment';
import {Routeticket, UsersPermissionsUser} from '../models';

const UserStoreModel =
        types.model({
            email: types.maybe(types.string),
            username: types.maybe(types.string),
            token: types.maybe(types.string),
            isLoading: types.maybe(types.boolean),
            loginError: types.maybe(types.frozen()),
            routeTickets: types.array(types.model({
                id: types.string,
                route: types.frozen()
            }))
        })
        .volatile(self => ({
            env: getEnv(self) as Environment
        }))
        .actions(self => ({
            getUser() {
                self.isLoading = true
                self.env.strapi.request('GET', '/users/me')
                    .then(this.setUser)
                    .catch(this.setError)

            },
            setUser(user: UsersPermissionsUser) {
                self.email = user.email
                self.username = user.username
                self.routeTickets = cast(user.routetickets as Routeticket[])
            },
            setError(e: any) {
                self.isLoading = false
                self.loginError = e
            }
        }))

export default UserStoreModel

export type UserStore = Instance<typeof UserStoreModel>