var mybutton=document.getElementById("myBtn");function scrollFunction(){document.body.scrollTop>20||document.documentElement.scrollTop>20?mybutton.style.display="block":mybutton.style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){scrollFunction()};const hamburger=document.querySelector(".hamburger"),navMenu=document.querySelector(".nav-menu"),navLink=document.querySelectorAll(".nav-link"),navBar=document.querySelector(".navbar");function mobileMenu(){hamburger.classList.toggle("active"),navMenu.classList.toggle("active"),navBar.classList.toggle("nav-bg-active")}function closeMenu(){hamburger.classList.remove("active"),navMenu.classList.remove("active"),navBar.classList.remove("nav-bg-active")}function scrollFunction(){document.body.scrollTop>50||document.documentElement.scrollTop>50?document.getElementById("logo").style.maxWidth="25%":document.getElementById("logo").style.maxWidth="35%"}hamburger.addEventListener("click",mobileMenu),navLink.forEach(a=>a.addEventListener("click",closeMenu)),jQuery("#lang-switcher").find(".ui-dropdown-list-trigger").each(function(){jQuery(this).click(function(){jQuery(this).parent().toggleClass("active")})}),$(function(){var a=$("html");function b(){for(var a=0;a<c.length;a++){var b=$(c[a]);b.isOnScreen()?b.addClass("in-view"):b.removeClass("in-view")}}"ontouchstart"in window||a.addClass("noTouch"),"ontouchstart"in window&&a.addClass("isTouch"),"ontouchstart"in window&&a.addClass("isTouch"),(document.documentMode||/Edge/.test(navigator.userAgent))&&(-1===navigator.appVersion.indexOf("Trident")?a.addClass("isEDGE"):a.addClass("isIE isIE11")),-1!==navigator.appVersion.indexOf("MSIE")&&a.addClass("isIE"),-1!=navigator.userAgent.indexOf("Safari")&& -1==navigator.userAgent.indexOf("Chrome")&&a.addClass("isSafari"),$.fn.isOnScreen=function(){var a=$(this).offset().top,c=a+$(this).outerHeight(),b=$(window).scrollTop(),d=b+$(window).height();return c>b&&a<d};var c=document.querySelectorAll("*[data-animate-in], *[data-detect-viewport]"),d=!1;$(window).on("resize scroll",function(){d||(d=!0,b(),setTimeout(function(){d=!1},100))}),$(document).ready(function(){setTimeout(function(){b()},500);for(var a=0;a<c.length;a++){var d=0,e=$(c[a]);d=c[a].getAttribute("data-animate-in-delay")?c[a].getAttribute("data-animate-in-delay")/1e3+"s":0,e.css("transition-delay",d)}})}),$(window).scroll(function(){$(window).scrollTop()>100?$(".navbar").addClass("bg-scrolling"):$(".navbar").removeClass("bg-scrolling")}),window.onscroll=function(){scrollFunction()};var interval=setInterval(function(){4==document.getElementById("vid").readyState&&(document.getElementById("vid").play(),clearInterval(interval))},2e3)