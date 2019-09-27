import Strapi from 'strapi-sdk-javascript';

/**
 * The environment is a place where services and shared dependencies between
 * models live.  They are made available to every model via dependency injection.
 */
export interface Environment {
    strapi: Strapi;
}
