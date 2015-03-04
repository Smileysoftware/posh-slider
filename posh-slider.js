$(document).ready(function(){
		
		timer = 5000; // How often the system will auto change the view in milliseconds
		wrapper = '.big';  // Class of the container element
		fadeOutTime = 0; // Time in milliseconds that the fadeouts take
		fadeInTime = 500;  // Time in milliseconds that the fadins take
		activeClass = 'activated'; //The class name the activated element gets

		//##################### No dicking below here #####################//
		var c = 1;
		$(wrapper).attr('rel' , c);
		t = $(".js_block").length
		active = true;
		$('*[data-js_block="1"').addClass(activeClass);


		$('.js_block_item_2').hide();
		$('.js_block_item_3').hide();

		$('a.js_block').mouseenter(function(){

			var w = $(this).data('js_block');
			var i = '.js_block_item_' + w;
			cu = $(wrapper).attr('rel');

			if ( w != cu ){
				$('li.js_block_item').fadeOut(fadeOutTime);
				$(i).fadeIn(fadeInTime);
				c = $(wrapper).attr('rel' , i);
				$(wrapper).attr('rel' , w);

				activator( i );
			}
			active = false;

		}).mouseout(function(){
			active = true;
		});

		$(wrapper).mouseover(function() {
		    active = false;
		  })
		  .mouseout(function() {
		    active = true;
		  });

		window.setInterval(function(){
		      
		   if ( active == true ){
		   		autoInc();
		   }
		   

		}, timer);

		function autoInc(){

			cu = $(wrapper).attr('rel');

			if ( cu == t ){
				next = parseInt(1);
			} else {
				next = parseInt(cu) + parseInt(1);
			}

			cu = $(wrapper).attr('rel' , next);

			var i = '.js_block_item_' + next;

			$('li.js_block_item').fadeOut(fadeOutTime);
			$(i).fadeIn(fadeInTime);

			activator( i );

		}

		function activator( index ){
			
			var index = index.replace( '.js_block_item_' , '');
			$('.js_block').removeClass(activeClass);

			$('*[data-js_block="'+index+'"').addClass(activeClass);
		}



	});
