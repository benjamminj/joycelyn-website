let createSectionHeading = require('../_templates/section-heading');

let heading = createSectionHeading('heading', 'heading_classes');

module.exports = `
	<main>
		<section class="intro">
			${heading}
			<p>{{{intro_par}}}</p>
		</section>
		<section class="weekly-lessons">
			<h2>{{weekly_lessons.h2}}</h2>
			<img src="{{weekly_lessons.img.src}}" alt="{{weekly_lessons.img.alt}}">
			<p>{{{weekly_lessons.par_1}}}</p>
		</section>
		<section class="group-classes">
			<h2>{{group_classes.h2}}</h2>
			<img src="{{group_classes.img.src}}" alt="{{group_classes.img.alt}}">
			<p>{{group_classes.par_1}}</p>
		</section>
		<section class="recitals">
			<h2>{{recitals.h2}}</h2>
			<img src="{{recitals.img.src}}" alt="{{recitals.img.alt}}">
			<p>{{recitals.par_1}}</p>
		</section>
		<section class="parents">
			<h2>{{parents.h2}}</h2>
			<img src="{{parents.img.src}}" alt="{{parents.img.alt}}">
			<p>{{parents.par_1}}</p>	
			<p>{{parents.par_2}}</p>
			<p>{{parents.par_3}}</p>
		</section>
	</main>
`;