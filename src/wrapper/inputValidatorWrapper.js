/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 24/07/16
 * Licence: See Readme
 */

/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
const isUrl = require('is-url');
const emailValidator = require("email-validator");
const _ = require('lodash');

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
module.exports = {
	isUrlSync: isUrlSync,
	isArraySync: _.isArray,
	isEmailSync: isEmailSync,
	stringHasMinLength: stringHasMinLength
};

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */



/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */

/**
 * String has minimum length.
 * @param value {String}
 * @param minLength {Number} Minimum length
 * @returns {boolean}
 */
function stringHasMinLength(value, minLength) {
	if (_.isUndefined(value) || _.isNull(value)) {
		return false;
	}

	if (!_.isString(value)) {
		return false;
	}

	return _.isEqual(value.trim().length, minLength);
}

/**
 * Is email sync.
 * @param value {Object} Value to test
 * @param mandatory {Boolean} Is field mandatory
 * @returns {*}
 */
function isEmailSync(value, mandatory) {
	if (_.isUndefined(value) || _.isNull(value)) {
		return !mandatory;
	}

	return emailValidator.validate(value);
}

/**
 * Is Url Sync.
 * @param value {Object} Value to test
 * @param mandatory {Boolean} Is field mandatory
 * @returns {*}
 */
function isUrlSync(value, mandatory) {
	if (_.isUndefined(value) || _.isNull(value)) {
		return !mandatory;
	}

	return isUrl(value);
}
