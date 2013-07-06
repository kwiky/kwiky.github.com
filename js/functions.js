var photo_matrix = [1, 4, 4, 
    				1, 1, 1]
					
$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});

$('a[href^="#"]').click(function(){  
    var the_id = $(this).attr("href");  
    $('html, body').animate({  
        scrollTop:$(the_id).offset().top - 80
    }, 'slow');  
    return false;  
});

$.fn.photography = function(flickrId, matrice) {  
	var element = $(this);
	var columns = 3;
	var random = Math.floor((Math.random()*100)+1);
	$.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?id='+flickrId+'&tags=forwebsite&lang=fr-fr&format=json&jsoncallback=?&random=' + random, function(data){
		var p = 0;
		for (var i=0; i < matrice.length; i++) {
			if (i % columns == 0) {
				line = $("<div/>").addClass("row-fluid").appendTo(element);
			}
			var col = $("<div/>").addClass('span4').appendTo(line);
			
			for (var j=0; j < matrice[i]; j++) {
				var clazz = 'big';
				if (matrice[i] == 4) clazz = 'small';
				var item = data.items[p];				
			
				if (item != undefined) {
					var src = item.media.m.replace("_m.jpg", ".jpg");
					var big = item.media.m.replace("_m.jpg", "_b.jpg");
					
					var a = $("<a/>").attr("href", big).attr("rel", "gallery1").attr("title", item.title).addClass('fancybox ' + clazz).appendTo(col);
					var img = $("<img/>").attr("src", src).attr("alt", '').appendTo(a);
				}
				
				p++;
			}
		}
	});
}

$.fn.development = function(columns) {
	var size = 12 / columns;
	var element = $(this);
	$.getJSON('skills.json', function(data) {
		var i = 0;
		$.each(data.items, function(j, item){
			if (i % columns == 0) {
				div = $("<div/>").addClass("row-fluid").appendTo(element);
			}
			var skill = $("<div/>").addClass('skill span' + size).appendTo(div);
			var h4  = $("<h4>").html(item.title).appendTo(skill);
			var p   = $("<p>").html(item.text).appendTo(skill);
			var note = $("<div>").addClass('note').appendTo(skill);
			var progress = $("<div>").addClass("progress progress-success progress-striped active").appendTo(note);
			var bar = $("<div>").addClass("bar").attr("style", "width:" + item.percent + "%").appendTo(progress);
			var score = $("<div>").addClass('score').html(item.percent / 10).append("/10").appendTo(note);
			i++;
		});
	});
}

$.fn.about = function() {
	var element = $(this);
	$.getJSON('about.json', function(data) {
		var h2 = $("<h2/>").html(data.title).appendTo(element);
		var p = $("<p/>").addClass('lead').html(data.text).appendTo(element);
	});
}

$('#development').development(2);

$('#about .span8').about();

$('#photography').photography('7264550@N03', photo_matrix);