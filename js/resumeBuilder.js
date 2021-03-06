// bio object

var bio = {
	name: "Tim Abrahamsen",
	role: "Front-End Web Developer",
	contacts: {
		mobile: "(617) 462-4386",
		email: "tim.abrahamsen@gmail.com",
		github: "timmyneutron",
		location: "New York City"
	},
	welcomeMessage: "Once upon a time, I studied to be a rocket scientist. " +
					"But then I fell in love with musical theater. " +
					"Since graduating from college with a degree in aerospace " +
					"engineering, I've traveled all over the country as a " +
					"performer, and paid my bills through a combination of " +
					"tutoring, babysitting, and personal training. I'm now " +
					"closing that chapter of my life, learning to " +
					"program (a skill I've always wanted to learn), and " +
					"planning on becoming an awesome software engineer.",
	skills: ["Math",
			 "HTML/CSS",
			 "Javascript",
			 "Python",
			 "Acting",
			 "Singing",
			 "Dancing",
			 "Babysitting",
			 "Fitness"],
	biopic: "images/headshot.jpg",
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%", this.name);
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%", this.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%", "images/headshot.jpg");
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts, #footerContacts").append(formattedMobile);
		$("#topContacts, #footerContacts").append(formattedEmail);
		$("#topContacts, #footerContacts").append(formattedGitHub);
		$("#topContacts, #footerContacts").append(formattedLocation);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(HTMLskillsStart);

		this.skills.forEach(function(skill) {
			var formattedSkill = HTMLskills.replace("%data%", skill);
			$("#skills").append(formattedSkill);
		});
	},
};

// work object

var work = {
	jobs: [{
		employer: "Self-employed",
		title: "Tutor",
		date: "Jan 2011 - present",
		location: "New York City, NY",
		description: "Currently working as a math, science, and test-prep tutor, " +
					 "for students ranging from 3rd grade to college."
	}, {
		employer: "AppNexus",
		title: "Auditor",
		date: "July 2011 - Sept 2012",
		location: "New York City, NY",
		description: "Audited  ads for an online advertising platform, checking " +
					 "them for size, runtime, content, etc."
	}, {
		employer: "Private family",
		title: "Babysitter",
		date: "Oct 2010 - June 2011",
		location: "New York City, NY",
		description: "Babysat two boys, ages 5 and 9."
	}, {
		employer: "Cincinnati Playhouse in the Park",
		title: "Acting Intern",
		date: "Sept 2009 - July 2010",
		location: "Cincinnati, OH",
		description: "Appeared in several mainstage and touring productions, " +
					 "including <em>Three Sisters</em> directed by Tony-winner " +
					 "John Doyle, and the title character in <em>Cyrano</em>."
	}, {
		employer: "MIT Recreational Sports",
		title: "Personal Trainer",
		date: "Sept 2008 - Sept 2009",
		location: "Cambridge, MA",
		description: "Worked as a NASM-certified personal trainer at the gym " +
					 "at MIT."
	}],
	display: function() {
		this.jobs.forEach(function(job) {
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
			var formattedWorkEmployerAndTitle = formattedWorkEmployer + formattedWorkTitle;
			var formattedWorkDates = HTMLworkDates.replace("%data%", job.date);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formattedWorkEmployerAndTitle);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDescription);
		});
	}
};

// projects object

var projects = {
	projects: [{
		title: "Appify",
		date: "Jan 2016 - Apr 2016",
		description: "An app to appify other apps, so you can appify " +
					 "for your apps while you app your other apps.",
		url: "https://github.com/timmyneutron",
		images: ["images/jet.jpg"]
	}, {
		title: "Sunflower",
		date: "Jan 2016 - Apr 2016",
		description: "Makes pretty flowers, tells terrible jokes, and " + 
					 "launches rockets.",
		url: "https://github.com/timmyneutron",
		images: ["images/rocket.jpg"]
	}, {
		title: "Bokeh",
		date: "Jan 2016 - Apr 2016",
		description: "Makes SkyNet self aware. DO NOT RUN. I honestly don't " +
					 "know why I made this.",
		url: "https://github.com/timmyneutron",
		images: ["images/module.jpg"]
	}],
	display: function() {
		$("#projects").append(HTMLprojectStart);

		this.projects.forEach(function(project) {
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
			formattedProjectTitle = formattedProjectTitle.replace("%url%", project.url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", project.date);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			project.images.forEach(function(image) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
				$(".project-entry:last").append(formattedProjectImage);
			});
		});
	}
};

// education object

var education = {
	schools: [{
		name: "Massachusetts Institute of Technology",
		location: "Cambridge, MA",
		degree: "B.S.",
		majors: ["Aerospace Engineering"],
		date: "2002-2006",
		url: "http://web.mit.edu/"
	}],
	onlineCourses: [{
		title: "Intro to Programming Nanodegree",
		school: "Udacity",
		date: "Sept 2015 - Apr 2016",
		url: "https://www.udacity.com/course/intro-to-programming-" +
			 "nanodegree--nd000"
	}, {
		title: "Front-End Web Developer Nanodegree",
		school: "Udacity",
		date: "Apr 2016 - Sept 2016",
		url: "https://www.udacity.com/course/front-end-web-developer-" +
			 "nanodegree--nd001"
	}, {
		title: "An Introduction to Interactive Programming in Python (Part 1)",
		school: "Coursera",
		date: "Jan 2016 - Feb 2016",
		url: "https://www.coursera.org/account/accomplishments/records/" +
			 "eUGdYeDEwp9KE9Wv"
	}],
	display: function() {
		this.schools.forEach(function(school) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
			formattedSchoolName = formattedSchoolName.replace("%url%", school.url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedSchoolNameAndDegree = formattedSchoolName + formattedSchoolDegree;
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.date);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);

			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedSchoolNameAndDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);

			school.majors.forEach(function(major) {
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
				$(".education-entry:last").append(formattedSchoolMajor);
			});
		});

		$("#education").append(HTMLonlineCourses);

		this.onlineCourses.forEach(function(onlineCourse) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
			formattedOnlineTitle = formattedOnlineTitle.replace("%url%", onlineCourse.url);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
			var formattedOnlineTitleandSchool = formattedOnlineTitle + formattedOnlineSchool;
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.date);

			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedOnlineTitleandSchool);
			$(".education-entry:last").append(formattedOnlineDates);
		});
	}
};

bio.display();

education.display();

work.display();

projects.display();

$("#mapDiv").append(googleMap);