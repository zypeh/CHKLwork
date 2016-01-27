var parse = require('co-body'),
    render = require('../lib/views')
//    pages = require('../models/pages')
;
   
/// Route definitions

// index
exports.home = function *() {
	this.body = yield render('index');
}

