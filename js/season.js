$(document).ready(function(){			
			
			let href = $(location).attr("href");
			let i = href.substr(-1);
			console.log( i );
			$("nav a").removeClass("active");
			$("nav li").eq( i ).children().addClass("active");
			
 

});//////전체 끝