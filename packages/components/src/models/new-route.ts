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
 * @interface NewRoute
 */
export interface NewRoute {
    /**
     * 
     * @type {string}
     * @memberof NewRoute
     */
    startPoint: string;
    /**
     * 
     * @type {string}
     * @memberof NewRoute
     */
    endPoint?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof NewRoute
     */
    routestops?: Array<string>;
}

