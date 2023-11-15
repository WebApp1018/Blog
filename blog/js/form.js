$(document).ready(function(e){
	if($("#contactForm").length > 0){
		$("#contactForm").validate({
			errorPlacement: function (error, e) {
	            e.parents('.form-input').append(error);
	        },
	        rules: {
	            firstname: "required",
	            lastname: "required",
	            company: "required",
	            jobtitle: "required",
	            email: {
	                required: true,
	                email: true
	            },
	            services_of_interest: "required",
	        },
	        messages: {
	            firstname: "Please complete this required field.",
	            lastname: "Please complete this required field.",
	            company: "Please complete this required field.",
	            jobtitle: "Please complete this required field.",
	            email: "Please complete this required field.",
	            services_of_interest: "Please complete this required field."
	        },
	        submitHandler: function(form) {
	          form.submit();
	        }
	    });
	}
});