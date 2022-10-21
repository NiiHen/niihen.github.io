
function ngonsole(){
console.log("Ada 4rekomendasiJAV");	
	
		$(document).ready(function(){
			$('a[href^="https://www.blogmeat.cf"]').each(function(){ 
			var bmfix = $(this).attr("href").replace("www.blogmeat.cf","7486822895993461897_6fe6c0fbdf0d210eecb7e5d644a411d037c435af.blogspot.com");
			$(this).attr("href", bmfix); 
		
			});
		});
	
	
}

      var readTokenFromResponse = function(response, attr) {
        return $(response).find('tr th:contains(' + attr + ')').parent().find('td').text()
      }
      jQuery(function($) {
        $("#4rekomendasiJAV").rss("https://www.blogger.com/feeds/7486822895993461897/posts/default?max-results=8&start-index=1", {
	  layoutTemplate: "<ul class='ms-related-hasthumb'>{entries}</ul>",	
          entryTemplate: "<li>"+
		
	"<a rel='dofollow' href='" + "{url}" + 
        "'><div class='related-thumb-outer'><img class='lazyload related-thumb shown' data-src='" + "{teaserImageUrl}" + 
        "' alt='Download JAV " + "{title}" + 
        " ' title='Download JAV " + "{title}" + 
        " ' src='https://lh4.googleusercontent.com/-8FaUdtZGvFM/XZzJNW-VG5I/AAAAAAAADIo/5520jWvYEqUQ_D8i_vva369pfT1iRtrhwCLcBGAsYHQ/w300-h170-rw-n-l85-fSoften=10,30,0/NiiHen.png' width='192' height='108'/></div><div class='related-title-outer'>"+"{title}"+
        "</div></a>"+			
						//	"<div id='url'>{url}</div>"+
						//	"<div id='author'>{author}</div>"+
						//	"<div id='date'>{date}</div>"+
						//	"<div id='title'>{title}</div>"+
						//	"<div id='shortBody'>{shortBody}</div>"+
						//	"<div id='bodyPlain'>{bodyPlain}</div>"+
						//	"<div id='shortBodyPlain'>{shortBodyPlain}</div>"+
						//	"<div id='teaserImage'>{teaserImage}</div>"+
						//	"<div id='teaserImageUrl'>{teaserImageUrl}</div>"+
						//	"<div id='index'>{index}</div>"+
						//	"<div id='totalEntries'>{totalEntries}</div>"+
						//	"<div id='body'>{body}</div>"+
			 "</li>", 
        support: false, 
	limit: 100,
        tokens: {
            year: function(entry, tokens) {
              return new Date(entry.publishedDate).getFullYear()
            }
          }
        },
		 function callback() {ngonsole();}
		)
      })
