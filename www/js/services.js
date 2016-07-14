angular.module('starter.services', [])

.factory('Chats', function() {
	var chats = [{
		id: 0,
		name: 'Ytalo dos Santos',
		lastText: 'Batman Arkan City',
		face: 'img/ben.png'
	}, {
		id: 1,
		name: 'Bruno Nascimento',
		lastText: 'Batman Arkan City',
		face: 'img/max.png'
	}, {
		id: 2,
		name: 'Adriano Alves',
		lastText: 'Volkswagem Fusca',
		face: 'img/adam.jpg'
	}, {
		id: 3,
		name: 'Thiago Paulino',
		lastText: 'Volkswagem Fusca',
		face: 'img/perry.png'
	}, {
		id: 4,
		name: 'José Damiani',
		lastText: 'Batman Arkan City',
		face: 'img/mike.png'
	}];

	return {
		all: function() {
			return chats;
		},
		remove: function(chat) {
			chats.splice(chats.indexOf(chat), 1);
		},
		get: function(chatId) {
			for (var i = 0; i < chats.length; i++) {
				if (chats[i].id === parseInt(chatId)) {
					return chats[i];
				}
			}
			return null;
		}
	};
})

.factory('Account', function() {
	var accountItems = [{
		id: 0,
		name: 'Batman Arkan City',
		category: 'Games',
		description: 'Xbox',
		photo: 'img/ben.png'
	}, {
		id: 1,
		name: 'Volkswagem Fusca',
		category: 'Collectibles',
		description: 'Miniatura',
		photo: 'img/max.png'
	}];

	return {
		all: function() {
			return accountItems;
		},
		remove: function(chat) {
			accountItems.splice(accountItems.indexOf(chat), 1);
		}
	};
})

.factory('Match', function() {
	var match = [{
		description: 'Batman Arkan City',
		category: 'Games',
		photo: 'img/ben.png'
	},

	{
		description: 'Volkswagem Fusca',
		category: 'Collectibles',
		photo: 'img/ben.png'
	}];

	return {
		all: function() {
			return match;
		}
	};
});