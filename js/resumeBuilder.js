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
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%", "images/headshot.jpg");
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGitHub);
		$("#topContacts").append(formattedLocation);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(HTMLskillsStart);

		var formattedSkill;

		for (skill in bio.skills) {
			formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		};
	},
};

var work = {
	jobs: [{
		employer: "Self-employed",
		title: "Tutor",
		dates: "Jan 2011 - present",
		location: "New York City, NY",
		description: "Currently working as a math, science, and test-prep tutor, " +
					 "for students ranging from 3rd grade to college."
	}, {
		employer: "AppNexus",
		title: "Auditor",
		dates: "July 2011 - Sept 2012",
		location: "New York City, NY",
		description: "Audited  ads for an online advertising platform, checking " +
					 "them for size, runtime, content, etc."
	}, {
		employer: "Private family",
		title: "Babysitter",
		dates: "Oct 2010 - June 2011",
		location: "New York City, NY",
		description: "Babysat two boys, ages 5 and 9."
	}, {
		employer: "Cincinnati Playhouse in the Park",
		title: "Acting Intern",
		dates: "Sept 2009 - July 2010",
		location: "Cincinnati, OH",
		description: "Appeared in several mainstage and touring productions, " +
					 "including <em>Three Sisters</em> directed by Tony-winner " +
					 "John Doyle, and the title character in <em>Cyrano</em>."
	}, {
		employer: "MIT Recreational Sports",
		title: "Personal Trainer",
		dates: "Sept 2008 - Sept 2009",
		location: "Cambridge, MA",
		description: "Worked as a NASM-certified personal trainer at the gym " +
					 "at MIT."
	}],
	display: function() {
		var formattedWorkEmployer;
		var formattedWorkTitle;
		var formattedWorkEmployerAndTitle;
		var formattedWorkDates;
		var formattedWorkLocation;
		var formattedWorkDescription;

		for (job in work.jobs) {
			formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			formattedWorkEmployerAndTitle = formattedWorkEmployer + formattedWorkTitle;
			formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(formattedWorkEmployerAndTitle);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedWorkDescription);
		};
	}
};

var projects = {
	projects: [{
		title: "Appify",
		dates: "Jan 2016 - Apr 2016",
		description: "An app to appify other apps.",
		url: "https://github.com/timmyneutron",
		image: "images/jet.jpg"
	}, {
		title: "Sunflower",
		dates: "Jan 2016 - Apr 2016",
		description: "Makes pretty flowers",
		url: "https://github.com/timmyneutron",
		image: "images/rocket.jpg"
	}, {
		title: "Bokeh",
		dates: "Jan 2016 - Apr 2016",
		description: "Makes SkyNet self aware. DO NOT RUN.",
		url: "https://github.com/timmyneutron",
		image: "images/module.jpg"
	}],
	display: function() {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle;
		var formattedProjectDates;
		var formattedProjectDescription;
		var formattedProjectImage;

		for (project in projects.projects) {
			formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			formattedProjectTitle = formattedProjectTitle.replace("%url%", projects.projects[project].url);
			formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			$(".project-entry:last").append(formattedProjectImage);
		};
	}
};

var education = {
	schools: [{
		name: "Massachusetts Institute of Technology",
		location: "Cambridge, MA",
		degree: "B.S.",
		majors: ["Aerospace Engineering"],
		dates: "2002-2006",
		url: "http://web.mit.edu/"
	}],
	onlineCourses: [{
		title: "Intro to Programming Nanodegree",
		school: "Udacity",
		dates: "Sept 2015 - Apr 2016",
		url: "https://www.udacity.com/course/intro-to-programming-" +
			 "nanodegree--nd000"
	}, {
		title: "Front-End Web Developer Nanodegree",
		school: "Udacity",
		dates: "Apr 2016 - Sept 2016",
		url: "https://www.udacity.com/course/front-end-web-developer-" +
			 "nanodegree--nd001"
	}, {
		title: "An Introduction to Interactive Programming in Python (Part 1)",
		school: "Coursera",
		dates: "Jan 2016 - Feb 2016",
		url: "https://www.coursera.org/account/accomplishments/records/" + 
			 "eUGdYeDEwp9KE9Wv"
	}],
	display: function() {
		var formattedSchoolName;
		var formattedSchoolDegree;
		var formattedSchoolNameAndDegree;
		var formattedSchoolDates;
		var formattedSchoolLocation;
		var formattedSchoolMajor;

		for (school in education.schools) {
			formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedSchoolName = formattedSchoolName.replace("%url%", education.schools[school].url);
			formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			formattedSchoolNameAndDegree = formattedSchoolName + formattedSchoolDegree;
			formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedSchoolNameAndDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		};

		$("#education").append(HTMLonlineClasses);

		var formattedOnlineTitle;
		var formattedOnlineSchool;
		var formattedOnlineTitleandSchool;
		var formattedOnlineDates;
		var formattedOnlineURL;

		for (course in education.onlineCourses) {
			formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			formattedOnlineTitle = formattedOnlineTitle.replace("%url%", education.onlineCourses[course].url);
			formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			formattedOnlineTitleandSchool = formattedOnlineTitle + formattedOnlineSchool;
			formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedOnlineTitleandSchool);
			$(".education-entry:last").append(formattedOnlineDates);
		};
	}
}

var footerContacts = {
	display: function() {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGitHub);
		$("#footerContacts").append(formattedLocation);
	}
}

bio.display();

education.display();

work.display();

projects.display();

$("#mapDiv").append(googleMap);

footerContacts.display();