'use strict';

var isBetween = function(num, min, max){
  var over = num > min
  var under = num < max
  return over && under
};