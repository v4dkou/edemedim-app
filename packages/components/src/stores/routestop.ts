import {cast, getEnv, Instance, types} from "mobx-state-tree";
import {Environment} from '../app/environment';
import {Routeticket, UsersPermissionsUser} from '../models';

const RouteStoreModel =
    types.model({
        email: types.maybe(types.string),
    })
        .volatile(self => ({
            env: getEnv(self) as Environment
        }))
        .actions(self => ({
            async getUser() {
                self.isLoading = true
                try {
                    const response = await self.env.strapi.request('GET', '/users/me')
                    const data = response.data as UsersPermissionsUser
                    self.email = data.email
                    self.username = data.username
                    self.routeTickets = cast(data.routetickets as Routeticket[])
                } catch (e) {
                    self.loginError = e
                }
                self.isLoading = false
            }
        }))

export default RouteStoreModel

export type RouteStore = Instance<typeof RouteStoreModel>