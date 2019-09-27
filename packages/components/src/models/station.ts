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
 * @interface Station
 */
export interface Station {
    /**
     * 
     * @type {string}
     * @memberof Station
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Station
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof Station
     */
    latitude: number;
    /**
     * 
     * @type {number}
     * @memberof Station
     */
    longitude: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof Station
     */
    sellerpoints?: Array<object>;
}

