'use strict';

/**
 * old-seller service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::old-seller.old-seller');
