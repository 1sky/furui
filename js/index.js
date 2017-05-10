$(function(){
	var  _wenzi   =   $('#wenzilunbo .right-a'),
		 _tixi    =   $('.tixi .tixi-lu div'),
		 _content =   $('.tixi .content'),
		 _bor     =   $('.kid .kid-width a'),
		 _bor_p   =   $('.kid .kid-width .kid-b p'),
		 _fora    =   $('.youshi .youshi-width .zhuanye .right .top .top-a a'),
		 _forb    =   $('.youshi .youshi-width .zhuanye .right .bottom p')
		
	
	_wenzi.on('mousemove',function(){
		var index = $(this).index();
		_wenzi.removeClass('right-red');
		$(this).addClass('right-red');
	})
	
//	$("img.lazy").lazyload();
	
	_tixi.on('click',function(){
		var index = $(this).index();
		_tixi.removeClass('tixi-div');
		$(this).addClass('tixi-div');
		_content.removeClass('active-div');
		_content.eq(index).addClass('active-div')
	})
	
	_bor.on("click",function(){
		var index = $(this).index();
		_bor.removeClass('active-red');
		$(this).addClass('active-red');
		_bor_p.removeClass('active-wenzi');
		_bor_p.eq(index).addClass('active-wenzi')
	})
	_fora.on("click",function(){
		var index = $(this).index();
		_fora.removeClass('active-red');
		$(this).addClass('active-red');
		_forb.removeClass('active-wenzi');
		_forb.eq(index).addClass('active-wenzi')
	})
	
//	div垂直居中

//	    $(".learn .learn-width").css({ 
//	        left: ($(window).width() - $(".mydiv").outerWidth())/2, 
//	        margin-top: ($(".learn").height() - $(".learn .learn-width").outerHeight())/2 
//	    });        
//	});


	
	
})

