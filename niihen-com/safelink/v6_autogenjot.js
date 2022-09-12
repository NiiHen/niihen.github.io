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


	var buatmakan = "https://"+sldm+"/p/advertisement.html";
    	var harta = window.location.href;
	var karun1 = buatmakan+"?m=1&download=";
	var karun2 = buatmakan+"?m=1&d0wnload=";
	var karun3 = buatmakan+"?m=1&downl0ad=";
	var karun4 = buatmakan+"?m=1&downlo4d=";
	var karun5 = buatmakan+"?m=1&downl04d=";
	var karun6 = buatmakan+"?m=1&d0wnl04d=";
	var karung1 = harta.replace(karun1, "");
	var karung2 = harta.replace(karun2, "");
	var karung3 = harta.replace(karun3, "");
	var karung4 = harta.replace(karun4, "");
	var karung5 = harta.replace(karun5, "");
	var karung6 = harta.replace(karun6, "");
	var sak1 = karun1+karung1;
	var sak2 = karun2+karung2;
	var sak3 = karun3+karung3;
	var sak4 = karun4+karung4;
	var sak5 = karun5+karung5;
	var sak6 = karun6+karung6;

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

var beras1 = getUrlParam('download',null);
var beras2 = getUrlParam('d0wnload',null);
var beras3 = getUrlParam('downl0ad',null);
var beras4 = getUrlParam('downlo4d',null);
var beras5 = getUrlParam('downl04d',null);

if(harta == buatmakan){window.location = "/";}
else if(harta == sak1)
{


// Jumlah detik
    var seconds = tunggudetik;


    function countdown() {
        seconds = seconds - 1;
        if (seconds < 0) {
            // tujuan setelah waktu habis
            //window.location = "https://www.linkonclick.com/jump/next.php?r=3803643";
			document.querySelector(".pesanlink1hidden").style.display="unset";
			document.querySelector(".pesanlink1").style.display="none";
			document.querySelector(".ngebut").style.display="none";
			document.querySelector(".pembukalink1").style.display="unset";
        } else {
            // Menyesuaikan script dengan tag span yang memiliki id countdown
            document.getElementById("countdown").innerHTML = seconds;
            // Rumus hitungan detik pada script adalah 1000ms atau 1 detik
            window.setTimeout("countdown()", 1000);
			document.querySelector(".macemanapula").style.display="unset";
        }
    }
    
    // Menerapkan pada tag span dengan id countdown
    countdown();
	function bukase() {
			document.querySelector(".link1").style.display="unset";
			document.querySelector(".pembukalink1").style.display="none";
	}
	function bukases(){
			document.querySelector(".link2").style.display="unset";
			document.querySelector(".pembukalink2").style.display="none";
	}

	function gakbetah(){ 
	window.open(karun2+karung1); 
						}
}
else if(harta == sak2)
{
	$('#ad').each(function(){ $(this).attr("href", tautklan2); });
	document.querySelector(".macemanapula").style.display="unset";
	document.querySelector(".atas").style.display="none";
	document.querySelector(".ke2").style.display="unset";
	document.querySelector(".lampuijo").style.display="none";
	function bukases(){
			document.querySelector(".link2").style.display="unset";
			document.querySelector(".pembukalink2").style.display="none";
	}
	function gakbetah(){ 
	window.open(karun3+karung2); 
						}
}
else if(harta == sak3)
{
	$('#ad').each(function(){ $(this).attr("href", tautklan3); });
	document.querySelector(".macemanapula").style.display="unset";
	document.querySelector(".atas").style.display="none";
	document.querySelector(".ke3").style.display="unset";
	document.querySelector(".lampuijo").style.display="none";
	function bukases(){
			document.querySelector(".link2").style.display="unset";
			document.querySelector(".pembukalink2").style.display="none";
	}
	function gakbetah(){ 
	window.open(karun4+karung3); 
						}
}
else if(harta == sak4)
{
	$('#ad').each(function(){ $(this).attr("href", tautklan4); });
	document.querySelector(".macemanapula").style.display="unset";
	document.querySelector(".atas").style.display="none";
	document.querySelector(".ke4").style.display="unset";
	document.querySelector(".lampuijo").style.display="none";
	function bukases(){
			document.querySelector(".link2").style.display="unset";
			document.querySelector(".pembukalink2").style.display="none";
	}
	function gakbetah(){ 
	window.open(karun5+karung4); 
						}
}
else if(harta == sak5)
{
	$('#ad').each(function(){ $(this).attr("href", tautklan5); });
	document.querySelector(".macemanapula").style.display="unset";
	document.querySelector(".atas").style.display="none";
	document.querySelector(".ke5").style.display="unset";
	document.querySelector(".lampuijo").style.display="none";
	function bukases(){
			document.querySelector(".link2").style.display="unset";
			document.querySelector(".pembukalink2").style.display="none";
	}
	var nasi = Base64.decode(beras5);
	var tautan = Base64.decode(nasi);
	function gakbetah(){ 
	window.open(tautan); 
	}
	
}

var kontlink = Base64.decode(beras1), kontlinked = Base64.decode(kontlink).replace("http://","").replace("https://",""), kontlinkedfix = encodeURIComponent(kontlinked); 
function betah(){ 
	window.open('https://exe.io/st?api=6064b08f527bb1c8bc62da3880641d0631aff380&url='+kontlinked); 
}
