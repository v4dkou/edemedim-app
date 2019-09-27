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
 * @interface NewRoutestoporder
 */
export interface NewRoutestoporder {
    /**
     * 
     * @type {string}
     * @memberof NewRoutestoporder
     */
    orderitems?: string;
    /**
     * 
     * @type {string}
     * @memberof NewRoutestoporder
     */
    status?: NewRoutestoporderStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof NewRoutestoporder
     */
    routestop?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum NewRoutestoporderStatusEnum {
    Available = 'available',
    Locked = 'locked',
    Paid = 'paid',
    Delivered = 'delivered'
}


