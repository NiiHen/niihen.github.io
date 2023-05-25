var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}

var urlasli = window.location.href, //https://film-seru-terbaru.blogspot.com/p/stream.html?m=1&v=loY3pZMFpEazRkM0ozTlRJeE0zUXhORFkxTlRGa01qTm1NWFp6WkRNeFpqSkFNakU1TXpZek5UTXlNekk1T0RJd09Ua3hNQT09
      urlf = urlasli.replace("?m=1&v=","?v=YUhSMGNITTZMeT"),
	  ufeeds = urlf.replace(/http.+html?v=/,""),
	  
	  idnonton = urlasli.replace(/http.+?m=1&v=/,"");

//ini script untuk ambil parameter
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

var filevideo = getUrlParam('v',null),
    feeds = Base64.decode('YUhSMGNITTZMeT'+filevideo.replace('#amp=1','')),
    feed = Base64.decode(feeds),
    fee = feed.replace("@",".blogspot.com/feeds/posts/default/");
    //console.log(feeds);
    //console.log(feed);
    //console.log(fee);

if (urlf != urlasli) {

function nobar(json) {

    // Poor configuration settings, develop them yourself!
    var config = {
			containerID: 'result-container', // Container ID to show the generated data
			embedc: 'embed-code', // Container ID to show the generated embed-code
			noSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAABGdBTUEAALGPC/xhBQAAAAZQTFRFOjo6JycnNkxyjQAAADZJREFUKM9j+A8DDFRnNTCAACP9WewPGNgfkMmiwN7GH0CGfCPdWZT5V/7/DwZyWeSHFa1SHQDDGF2E0US40gAAAABJRU5ErkJggg=='
				},
		d = document, container = d.getElementById(config.containerID),
		emdc = d.getElementById(config.embedc);

    // No container found
    if (!container) { alert('Container not found.');return; }

    var post = json.entry, // The post/page object
        postContent = post.content ? post.content.$t : post.summary.$t.replace(/<br *\/?>|[\s]+/gi, ' ').replace(/<.*?>|[<>]/g, ""), // The post/page content
    // Trying to get the iframe src URL from post/page content
		iframeContent = /<iframe +(.*?)src=(['"])([^'"]+?)(['"])(.*?) *\/?>/i.exec(post.content.$t),
        iframeSrc = iframeContent && iframeContent[3] ? iframeContent[3] : config.noSrc;

	//console.log(iframeSrc);
	//console.log(iframeContent[0]);
	container.innerHTML = iframeContent;
	emdc.innerHTML = '<textarea readonly id="embcd" onclick="cpFunc();"> <iframe scrolling="no" allowfullscreen style="width:100%;height:480px;border:0px;overflow:hidden;" src="'+urlasli+'" ></iframe></textarea>';
	
}

var script = document.createElement('script');
script.src = fee 	.replace("as64d98wrw5213t146551d23f1vsd31f2.blogspot.com","js.movieluck.ml")
			.replace("files-google-code-for-my-s0cial-media.blogspot.com","js.idblog.eu.org")+
	"?alt=json-in-script&callback=nobar";
document.getElementsByTagName('head')[0].appendChild(script);

//console.log(feed);

$(document).ready(function(){
	$('.nonton').each(function(){ 
		$(this).attr("id", idnonton); 
	});
});

}else{window.location="/"}

		function cpFunc() {
  		var copyText = document.getElementById("embcd");	copyText.select();	
      	copyText.setSelectionRange(0, 99999)
  		document.execCommand("copy"); document.getElementById("embed-copy-msg").innerHTML="KODE SEMATAN BERHASIL TERSALIN &check;";
		}
