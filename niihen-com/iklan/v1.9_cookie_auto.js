function GetCookie (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}
function SetCookie (name, value) {
var argv = SetCookie.arguments;
var argc = SetCookie.arguments.length;
var expires = (argc > 2) ? argv[2] : null;
var path = (argc > 3) ? argv[3] : null;
var domain = (argc > 4) ? argv[4] : null;
var secure = (argc > 5) ? argv[5] : false;
document.cookie = name + "=" + escape (value) +
((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
((path == null) ? "" : ("; path=" + path)) +
((domain == null) ? "" : ("; domain=" + domain)) +
((secure == true) ? "; secure" : "");
}
function DeleteCookie (name) {
var exp = new Date();
exp.setTime (exp.getTime() - 1);
var cval = GetCookie (name);
document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}
var expDays = 1;
var exp = new Date();
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));
function amt()
{
var count = GetCookie('count')
if(count == null) {
SetCookie('count','1')
return 1
}
else {
var newcount = parseInt(count) + 1;
DeleteCookie('count')
SetCookie('count',newcount,exp)
return count
}
}
function getCookieVal(offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
var hitunganviewnya = amt();
console.log(hitunganviewnya);



var num = hitunganviewnya;
   //document.write("Number = "+num+"<br>");
   if(num == 10) { 
      window.location='https://s.zlink1.com/d.php?z=4767250';
   } else if(num % 5 == 0) {
      //document.write('Number is even!');
      //window.location='https://s.zlink1.com/d.php?z=4767250';
      //window.location='https://www.profitablecpmgate.com/d935uuk9?key=155feaf5ca9d2b1dcba49fd42bcef5b8'; 
      
      var _cpp = _cpp || [];
      _cpp['source_id'] = '95572';
      _cpp['pop_type'] = '10';
      _cpp['onePer'] = '0';
      _cpp['freq'] = '20';
      _cpp['fb'] = '10';
      var scriptxGHEAs = document.createElement('script');
      scriptxGHEAs.setAttribute('async', 'true');
      scriptxGHEAs.setAttribute('src', 'https://cdn1.adcdnx.com/s/adp1v3.js');
      document.head.appendChild(scriptxGHEAs);   

   } else {
      //document.write('Number is odd!');    
      
      var scriptxGHEAs = document.createElement('script');
      scriptxGHEAs.setAttribute('data-admpid', '41805');
      scriptxGHEAs.setAttribute('src', 'https://js.wpadmngr.com/static/adManager.js');
      document.head.appendChild(scriptxGHEAs);   
      
}

