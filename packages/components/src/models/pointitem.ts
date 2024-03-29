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
 * @interface Pointitem
 */
export interface Pointitem {
    /**
     * 
     * @type {string}
     * @memberof Pointitem
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof Pointitem
     */
    cost: number;
    /**
     * 
     * @type {number}
     * @memberof Pointitem
     */
    preparationMinutes?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Pointitem
     */
    available: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Pointitem
     */
    displayed?: boolean;
    /**
     * 
     * @type {object}
     * @memberof Pointitem
     */
    sellerpoint?: object;
    /**
     * 
     * @type {object}
     * @memberof Pointitem
     */
    item?: object;
}


