function requireAll(r) { r.keys().forEach(r); }

requireAll(require.context('./src', true, /\.css$/));

var taskoApp = angular.module('lbxApp', [
	'ui.router']);	
	
//add all js files from the src folder
requireAll(require.context('./src', true, /\.js$/));