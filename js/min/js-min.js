$(document).ready(function(){$.fn.equalCols=function(){var o=0;$(this).each(function(){var t=$(this).height();t>o&&(o=t)}),$(this).height(o)},$(".listas-pago").equalCols(),$(".expand-one,.closer-a").click(function(o){o.stopPropagation(),$(".content-one").slideToggle("slow")}),$(".expand-two,.closer-b").click(function(o){o.stopPropagation(),$(".content-two").slideToggle("slow")}),$("a").click(function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top}),!1})});