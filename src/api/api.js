/*
 * Author: Alexandre Havrileck (Oxyno-zeta) 
 * Date: 05/07/16
 * Licence: See Readme
 */

/* ************************************* */
/* ********       REQUIRE       ******** */
/* ************************************* */
const express = require('express');
const logger = require('../shared/logger');
const crashLog = require('./crash-log/crash-log');

/* ************************************* */
/* ********        EXPORTS      ******** */
/* ************************************* */

module.exports = {
	expose: expose
};

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */



/* ************************************* */
/* ********   PUBLIC FUNCTIONS  ******** */
/* ************************************* */

/**
 * Expose Api.
 * @return {*} Express Router
 */
function expose(){
	logger.debug('Putting API in place...');

	var router = express.Router();

	// Api without security
	router.use('/api/v1/', crashLog.withoutSecurity.expose());

	return router;
}
