jQuery(document).ready(function($) {

	var pageId = '108020629255831';
  var postLimit = '8';
  var accessToken = '448716508633379|5CN4HrHfHdYHec05yj0BGa4m_MI';

  var postsUrl = 'https://graph.facebook.com/' + pageId + '/posts?limit=' + postLimit + '&access_token=' + accessToken;
  var coverUrl = 'https://graph.facebook.com/Carping4conservation';

  $.getJSON(coverUrl, function(response) {
    $('.herounit').css("background-image", "url(" + response.cover.source + ")");
  });

  $('body').prepend('<div id="fb-root"></div>');

  $.get(postsUrl, function(data) {
    $.each(data.data, function() {
      // $('#fb-root').html(this.id);

      //variables
      var image = this.picture;
      var caption = this.story;
      var message = this.message;
      var postId = this.id.replace('108020629255831_', '');
      var postLink = 'https://www.facebook.com/108020629255831/posts/' + postId;

      if (!caption) {
        if (!this.name) {
          caption = this.story
        } else {
          caption = this.name
        }
      } else {
        caption = this.story;
      }

      if (!message) {
        message = this.story;
      }

      $('.facebook-feed').append(
      	'<div class="fb-post">' +
      	'<div class="fb-pic">' +
      	'<img src="' + image + '" alt="' + this.story + '" />' +
      	'<div class="fb-body">' +
      	'<p>' + this.story + '</p>' +
      	'<a href="' + postLink + '"> Read More...</a>' +
      	'</div>' +
      	'</div>' +
      	'</div>'





      	// '<a href="' + postLink + '" class="thumb-unit" style="background: url(' + image + ') no-repeat; background-size: cover; background-position: center;">' +
      	// '<div class="thumb-overlay">' +
      	// '<strong>' + this.story + '</strong>' +
      	// '</div>' +
      	// '</a>'
      );
    });
  });

});