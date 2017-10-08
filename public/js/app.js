$("#submit").on("click", function(event) {
		event.preventDefault();

		var taco = {
			name: $('#name').val().trim()
		};

    $.post("/api/tacos", taco).then(function(res) {
	    window.location = '/';
    });
    
});
