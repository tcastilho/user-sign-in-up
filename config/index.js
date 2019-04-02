/**
 * @description Define an embbeded database to the project
 * 
 * @author Thiago Castilho
 * @date 2019-04-01
 */

const Datastore = require('nedb')

module.exports = new Datastore({ filename: './database/user.db', autoload: true })