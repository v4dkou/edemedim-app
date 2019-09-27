import {Instance, SnapshotOut, types} from "mobx-state-tree"
import UserStoreModel from "../stores/user";
import RouteStoreModel from '../stores/route';
import SellerPointsStoreModel from '../stores/sellerpoints';

/**
 * An RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
    sellerPointsStore: SellerPointsStoreModel,
    routeStore: RouteStoreModel,
    userStore: UserStoreModel,
});

/**
 * The RootStore instance.
 */
export type RootStore = Instance<typeof RootStoreModel>

/**
 * The data of an RootStore.
 */
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>
