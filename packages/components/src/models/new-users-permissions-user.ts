// tslint:disable
/// <reference path="../custom.d.ts" />
/**
 * DOCUMENTATION
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact-email@something.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface NewUsersPermissionsUser
 */
export interface NewUsersPermissionsUser {
    /**
     * 
     * @type {string}
     * @memberof NewUsersPermissionsUser
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof NewUsersPermissionsUser
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof NewUsersPermissionsUser
     */
    provider?: string;
    /**
     * 
     * @type {string}
     * @memberof NewUsersPermissionsUser
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof NewUsersPermissionsUser
     */
    resetPasswordToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewUsersPermissionsUser
     */
    confirmed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NewUsersPermissionsUser
     */
    blocked?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NewUsersPermissionsUser
     */
    role?: string;
    /**
     * 
     * @type {string}
     * @memberof NewUsersPermissionsUser
     */
    routetickets?: string;
}


