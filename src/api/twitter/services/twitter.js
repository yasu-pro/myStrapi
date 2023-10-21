'use strict';

/**
 * twitter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::twitter.twitter');
