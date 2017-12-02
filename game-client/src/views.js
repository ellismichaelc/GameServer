// import ColladaLoader from "../src/ColladaLoader.js";
var mcec = require('../shared/mcec');
var io = require('../src/sockets');

export default class views {
	constructor() {
		this.submit_callbacks = [];
	}

	// load a view, call the callback
	load(name, callback) {
        io.send('view', name, (html) => {

        	mcec.log(`Got HTML back for: ${name}`);

        	html = this.processViewHTML(html);

			callback(html);
        });

        return this;
	}

	clearBinds() {
		this.submit_callbacks = [];
	}

	bindForm(id, callback) {
		if(typeof this.submit_callbacks[ id ] == "undefined") this.submit_callbacks[ id ] = [];

		this.submit_callbacks[ id ].push(callback);
	}

    captureFormSubmit(form) {
		var form = $(form);
		var frm = form.attr('id');

        // check if its for us
        if(frm.substr(0, 4) !== "frm-") return;

        // trim the id
		var id = frm.substr(4);

		$('body').off('submit', '#' + frm);
        $('body').on('submit', '#' + frm, (e) => {
			this.handleFormSubmit(id, e);
		});
	}

	handleFormSubmit(id, e) {
		mcec.log("Form #" + id + " was submitted");

		// this is ours to handle
		e.preventDefault();
		e.stopPropagation();

		if(typeof this.submit_callbacks[ id ] == "undefined") return;

		var form_data = $(e.target).serialize();
		var form_els = [];

		$(e.target).find('input,select,textarea').each(function(i, el) {
			el = $(el);
			form_els[ el.attr('name') ] = el.val();
		});

		for(var i in this.submit_callbacks[ id ]) {
            this.submit_callbacks[ id ][ i ](form_data, form_els, e);
		}
	}

	processViewHTML(html) {
        $(html).filter('form').each((i, form) => {
			this.captureFormSubmit(form);
		});

		return html;
	}
}
module.exports = new views();