var _ = require('lodash');
var $ = require('jquery');

var people = [{
  "id": 1,
  "gender": "Female",
  "first_name": "Alice",
  "last_name": "Lawson",
  "email": "alawson0@mozilla.com",
  "ip_address": "104.22.150.73"
}, {
  "id": 2,
  "gender": "Male",
  "first_name": "Sean",
  "last_name": "Kelly",
  "email": "skelly1@weibo.com",
  "ip_address": "209.17.71.33"
}, {
  "id": 3,
  "gender": "Male",
  "first_name": "Wayne",
  "last_name": "Griffin",
  "email": "wgriffin2@nationalgeographic.com",
  "ip_address": "158.249.0.63"
}, {
  "id": 4,
  "gender": "Female",
  "first_name": "Jacqueline",
  "last_name": "Morales",
  "email": "jmorales3@shop-pro.jp",
  "ip_address": "236.51.175.83"
}, {
  "id": 5,
  "gender": "Male",
  "first_name": "Gregory",
  "last_name": "King",
  "email": "gking4@nps.gov",
  "ip_address": "21.201.157.82"
}, {
  "id": 6,
  "gender": "Female",
  "first_name": "Mary",
  "last_name": "Peterson",
  "email": "mpeterson5@live.com",
  "ip_address": "230.251.199.119"
}, {
  "id": 7,
  "gender": "Male",
  "first_name": "Clarence",
  "last_name": "Tucker",
  "email": "ctucker6@wordpress.org",
  "ip_address": "250.125.198.84"
}, {
  "id": 8,
  "gender": "Female",
  "first_name": "Frances",
  "last_name": "Wright",
  "email": "fwright7@last.fm",
  "ip_address": "122.131.16.44"
}, {
  "id": 9,
  "gender": "Female",
  "first_name": "Barbara",
  "last_name": "Andrews",
  "email": "bandrews8@digg.com",
  "ip_address": "5.80.155.157"
}, {
  "id": 10,
  "gender": "Male",
  "first_name": "William",
  "last_name": "Gonzales",
  "email": "wgonzales9@marriott.com",
  "ip_address": "237.106.19.80"
}];

var pria = _.forEach(people, function(val){
	$('#app').append('<p>' + val.first_name + ' ' + val.last_name + '</p>');
});