'use strict';

/**
 * open-graph router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::open-graph.open-graph');
