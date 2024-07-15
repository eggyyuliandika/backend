'use strict';

/**
 * waste-exchange service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::waste-exchange.waste-exchange');
