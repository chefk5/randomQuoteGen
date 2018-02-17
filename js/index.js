$('#gen').click(function(){
	$('.well').css('visibility', 'visible');
    $.getJSON("https://talaikis.com/api/quotes/random/", function(result){
       $('#quote').text('"'+result["quote"]+'"');
       $('#author').text(result["author"]);
    });
});
	function tweet() {
		var link = "https://twitter.com/intent/tweet?text="+$('#quote').text()+"  - "+$('#author').text();
		window.open(link);
	}