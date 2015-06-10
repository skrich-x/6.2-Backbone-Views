import Likes from '../views/like-view';

(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST.like());
    $('body').append(JST.loading());

  //   $(document).ready(function(){
  //   $('#content').html(JST.likes());
  //   renderLike();
  //   renderLoading();
  //
  // function renderLike(){
  //   var like = new Like();
  //   var likeView = new LikeView({model: like})
  //   $('.likeButton').html(likeView.el);
  // }
  //
  // function renderLoading() {
  //   var loadingButton = new LoadingView();
  //   $('.loadingButton').html(loadingButton.el)
  // }

  });

})();
