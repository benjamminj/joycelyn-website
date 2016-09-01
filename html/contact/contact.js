let data = require('./contact-data');
let heading = require('../_templates/section-heading')('heading', 'heading_classes');

let performForm = require('./perform-form');
let lessonsForm = require('./lessons-form')(data);

let body = `
	<main>
		${heading}
		<section class="form-choices">
			<h2>What would you like to contact me about?</h2>
			<button>Lessons</button>	
			<button>Performing at an event</button>		
		</section>
		${lessonsForm}
	</main>
`;
			// ${performForm}


module.exports = require('../_templates/doc')(body, data);