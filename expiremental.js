function val(){var h=["0.0.0.0:0","128.0.0.0:1","192.0.0.0:2","224.0.0.0:3","240.0.0.0:4","248.0.0.0:5","252.0.0.0:6","254.0.0.0:7","255.0.0.0:8","255.128.0.0:9","255.192.0.0:10","255.224.0.0:11","255.240.0.0:12","255.248.0.0:13","255.252.0.0:14","255.254.0.0:15","255.255.0.0:16","255.255.128.0:17","255.255.192.0:18","255.255.224.0:19","255.255.240.0:20","255.255.248.0:21","255.255.252.0:22","255.255.254.0:23","255.255.255.0:24","255.255.255.128:25","255.255.255.192:26","255.255.255.224:27","255.255.255.240:28","255.255.255.248:29","255.255.255.252:30","255.255.255.254:31","255.255.255.255:32"];var w=document.form.submask.value,f=document.form.ip.value.split(".");function e(A,B){var C=A.filter(function(D,E){return new RegExp("\\b"+B+"\\b").test(D)})[0];return C?C.split(":"):-1}var u=e(h,w),c=u[0];cidr=u[1],submaskSplit=c.split(".");function v(){for(var B=0;B<submaskSplit.length;B++){if(submaskSplit[B]!=="255"){var A=submaskSplit[B];index=submaskSplit.indexOf(A);break;return index}}}v();function y(E){if(E%8!==0){var D=(Math.pow(2,(8-(E%8)))),C=((Math.floor(f[index]/D))*D);var B=(C+(D-1)),A=[C,B];return A}else{var D=128,C=((Math.floor(f[index]/D))*D);var B="255",A=[C,B];return A}}function k(C,B){if(index===0){var E=C+".0.0.0",D=B+".255.255.255",A=null;theBigString=[E,D];return theBigString}if(index===1){var E=f[0]+"."+C+".0.0",D=f[0]+"."+B+".255.255",A=null;theBigString=[E,D];return theBigString}if(index===2){var E=f[0]+"."+f[1]+"."+C+".0",D=f[0]+"."+f[1]+"."+B+".255",A=null;theBigString=[E,D];return theBigString}if(index===3){var E=f[0]+"."+f[1]+"."+f[2]+"."+C,D=f[0]+"."+f[1]+"."+f[2]+"."+B,A=null;theBigString=[E,D];return theBigString}}function d(A){if(index===0){return(Math.floor(Math.pow(2,A)))+" subnets"}if(index===1){return(Math.floor(Math.pow(2,(A-8))))+" subnets"}if(index===2){return(Math.floor(Math.pow(2,(A-16))))+" subnets"}if(index===3){return(Math.floor(Math.pow(2,(A-24))))+" subnets"}}function j(A){if(!A){return"No IP Entered"}if((A>=0)&&(A<128)){return"Class A"}if((A>=128)&&(A<192)){return"Class B"}if((A>=192)&&(A<224)){return"Class C"}if((A>=224)&&(A<240)){return"Class D"}if((A>=240)&&(A<256)){return"Class E"}}function b(B){var A=[(255-submaskSplit[0]),(255-submaskSplit[1]),(255-submaskSplit[2]),(255-submaskSplit[3])];wildcardArray=A.join(".");return wildcardArray}function s(A){A=A||0;if(A>=2){A=(Math.pow(2,(32-A))-2)}return A}var o=s(cidr),r=d(cidr);var t=j(f[0]);var g=y(parseInt(cidr,10));var l=k(g[0],g[1]),n=l[0];var i=l[1];var p=b(c);function a(){var C=theBigString[0].split("."),B=theBigString[1].split(".");var D=(parseInt(C[3],10)+1),A=(parseInt(B[3],10)-1);joinThemStringz=C[0]+"."+C[1]+"."+C[2]+"."+D+" - "+B[0]+"."+B[1]+"."+B[2]+"."+A;return joinThemStringz}a();document.getElementById("tablecidr").innerHTML=cidr;document.getElementById("tablesubmask").innerHTML=c;document.getElementById("tableipclass").innerHTML=t;document.getElementById("tablenumhosts").innerHTML=o+" hosts ("+(o-2)+" usable)";document.getElementById("tablenetworkid").innerHTML=n;document.getElementById("tablebroadcastaddress").innerHTML=i;document.getElementById("tablenumsubnets").innerHTML=r;document.getElementById("tablewildcardmask").innerHTML=p;document.getElementById("tablenetworkrange").innerHTML=a();var q=a();document.getElementById("hidden").innerHTML="cidr number: "+cidr+" submask: "+c+" class: "+t+" hosts: "+o+" usable hosts: "+(o-2)+" network id "+n+" broadcast address: "+i+" subnets: "+r+" wildcard: "+p+" network range: "+q;var x=[["name1","city1","some other info"],["name2","city2","more info"]];var m="data:text/csv;charset=utf-8,";x.forEach(function(B,A){dataString=B.join(",");m+=A<B.length?dataString+"\n":dataString});function z(){var A=document.getElementById("tablecidr"),B=document.getElementById("tablenumhosts");A.innerHTML="/"+A.innerHTML;B.innerHTML=B.innerHTML.replace(/\B(?=(\d{3})+(?!\d))/g,",")}z()}function downloadInnerHtml(){var a=document.getElementById("hidden").innerHTML;var b=document.createElement("a");mimeType="text/plain";b.setAttribute("download","subnetting.txt");b.setAttribute("href","data:"+mimeType+";charset=utf-8,"+encodeURIComponent(a));b.click()};