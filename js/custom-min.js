$((function(){"use strict";$(window).on("load",(function(){var o=$(".portfolioContainer");o.isotope({filter:".staffing",animationOptions:{duration:750,easing:"linear",queue:!1}}),$(".portfolioFilter a").on("click",(function(){$(".portfolioFilter .current").removeClass("current"),$(this).addClass("current");var t=$(this).attr("data-filter");return o.isotope({filter:t,animationOptions:{duration:750,easing:"linear",queue:!1}}),!1}))})),$(window).on("load",(function(){$(".loder").delay(1e3).fadeOut(1e3)})),$(window).scroll((function(){var o=$(this).scrollTop(),t=$(".sticky-top");o>=100?$(t).addClass("nav-bg"):$(t).removeClass("nav-bg"),o>50?$(".backtotop").fadeIn(500):$(".backtotop").fadeOut(500)})),$("body").scrollspy({target:".navbar",offset:50})}));