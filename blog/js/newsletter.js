$(document).ready(function(e){
	if($("#newsletterForm").length > 0){
		$("#newsletterForm").validate({
			rules: {
	           	email: {
	                required: true,
	                email: true
	            },
	        },
	        messages: {
	            email: "Please complete this required field.",
	        },
	        submitHandler: function(form) {
	          form.submit();
	        }
	    });
	}
});