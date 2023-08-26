$(document).ready(function(){
	
			let act;
			$("nav li").eq(act).children().addClass("active");
			
			
			let address = location.hef = "spring.html?act=" + act;	
			$("nav a").click(function(act){
				console.log( act );
				if( act  == 0 ){						
						$("nav li").eq(0).children().addClass("active");						
				}
			});
				
				/*				
				let i = $(this).parent().index();
				let season;
				let act;
				switch(i){
					case 0 : season = "spring.html?act=" + 0; break;
					case 0 : season = "spring.html?act=" + 1; break;
					case 0 : season = "spring.html?act=" + 2; break;
					case 0 : season = "spring.html?act=" + 3;
				}
				location.hef = season;	
				$("nav li a").removeClass("active");		
			*/
			//location.href="/경로?보낼변수명=" + 값;

});//////전체 끝