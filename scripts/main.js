import Likes from '../views/like';

(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST.like());
    $('body').append(JST.loading());
  });

})();
