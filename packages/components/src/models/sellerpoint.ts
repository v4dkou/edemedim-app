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
 * @interface Sellerpoint
 */
export interface Sellerpoint {
    /**
     * 
     * @type {string}
     * @memberof Sellerpoint
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Sellerpoint
     */
    openTime?: string;
    /**
     * 
     * @type {string}
     * @memberof Sellerpoint
     */
    closeTime?: string;
    /**
     * 
     * @type {object}
     * @memberof Sellerpoint
     */
    station?: object;
    /**
     * 
     * @type {Array<object>}
     * @memberof Sellerpoint
     */
    pointitems?: Array<object>;
    /**
     * 
     * @type {object}
     * @memberof Sellerpoint
     */
    seller?: object;
}

