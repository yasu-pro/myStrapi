'use strict';

/**
 * open-graph service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::open-graph.open-graph');
