
function ngonsole(){
console.log("Ada 4rekomendasiJAV");	
}

      var readTokenFromResponse = function(response, attr) {
        return $(response).find('tr th:contains(' + attr + ')').parent().find('td').text()
      }
      jQuery(function($) {
        $("#rss-feeds").rss("https://www.blogger.com/feeds/7486822895993461897/posts/default?max-results=4&start-index=1", {
          entryTemplate: "<ul class='ms-related-hasthumb'>"+
		
	"<li><a rel='dofollow' href='" + "{url}" + 
        "'><div class='related-thumb-outer'><img class='lazyload related-thumb shown' data-src='" + "{teaserImageUrl}" + 
        "' alt='Download JAV " + "{title}" + 
        " ' title='Download JAV " + "{title}" + 
        " ' src='https://lh4.googleusercontent.com/-8FaUdtZGvFM/XZzJNW-VG5I/AAAAAAAADIo/5520jWvYEqUQ_D8i_vva369pfT1iRtrhwCLcBGAsYHQ/w300-h170-rw-n-l85-fSoften=10,30,0/NiiHen.png' width='192' height='108'/></div><div class='related-title-outer'>"+"{title}"+
        "</div></a></li>"+			
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
			 "</ul>", 
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
