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
 * @interface Seller
 */
export interface Seller {
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    title: string;
    /**
     * 
     * @type {object}
     * @memberof Seller
     */
    logo: object;
    /**
     * 
     * @type {Array<object>}
     * @memberof Seller
     */
    promoImages: Array<object>;
    /**
     * 
     * @type {object}
     * @memberof Seller
     */
    primarycategory?: object;
    /**
     * 
     * @type {Array<object>}
     * @memberof Seller
     */
    sellerpoints?: Array<object>;
    /**
     * 
     * @type {Array<object>}
     * @memberof Seller
     */
    items?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof Seller
     */
    description?: string;
}


