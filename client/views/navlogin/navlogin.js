Template.userInfo.events({
	"click #navLogout": function(event, template) {
		Meteor.logout();
	},
	"click #navLogin": function(event, template) {
		window.location.href = "/newlogin/" + encodeURIComponent(window.location.href);
	},
	"click #navRegister": function(event, template) {
		window.location.href = "/register";
	}
});
