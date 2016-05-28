var myApp = angular.module('starter.utils', []);

/* 
-- Name: substr 
-- Decription: sub string
-- @param: {int} provider
-- @returns:  {string} with lenght = @param
-- usage: {{item.example | substr:@param}}
*/
myApp.filter('substr', function() {
  var ellipsis = ' ...';
  return function(text, limit) {
    text = typeof(text) !== 'undefined'? text: '';
    return text.length > limit?
      (text.substr(0, limit - ellipsis.length) + ellipsis):
      text;
  }
});