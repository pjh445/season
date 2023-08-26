$(document).ready(function(){			
			let href = this.location.href;
			let i = href.substr(-1);
			("nav a").removeClass("active");
			$("nav li").eq( i ).children().addClass("active");
						
			

});//////전체 끝