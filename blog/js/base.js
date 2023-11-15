$(window).on("load",function(e){
    $("body").addClass("show-page");
    wow = new WOW({
        boxClass:     'wow',     
        animateClass: 'animated', 
        offset:       0, 
        mobile:       false, 
        live:         true
    });
    wow.init();
});
$(document).ready(function(e){
    if ($(window).scrollTop() >= 10) {
        if($(window).width() > 0){
            $('header').addClass('sticky');
        }
        else{
            $('header').removeClass('sticky');
        }
    }
    $(window).scroll(function () {
       var scroll = $(window).scrollTop();
       if (scroll >= 10) {
            $('header').addClass('sticky');
        }
        else {
            $('header').removeClass('sticky');
        }
    });

    $(document).on("click",".colse-cookie",function(e){
        $(".sec-cookie").hide();
    });
    $(document).on("click",".top-bar-close",function(e){
        $("body").addClass("hide-top-bar");
    });

    $(document).on("click",".haschild a",function(e){
        e.preventDefault();
        if($(this).parents(".haschild").find(".submenu").css("display") == "none"){
            $(".menu > ul > li").removeClass("active");
            $(this).parents("li").addClass("active");
            $(".submenu").hide();
            $(this).parents(".haschild").find(".submenu").slideDown();
        }
        else{
            $(this).parents("li").removeClass("active");
            $(this).parents(".haschild").find(".submenu").hide();
        }
    });
    $(document).click(function() {
        var container = $(".haschild");
        if (!container.is(event.target) && !container.has(event.target).length) {
            $(".submenu").slideUp();
            $(".menu > ul > li").removeClass("active");
        }
    });
    $(document).on("click",".toggleMenu",function(e){
        $(this).toggleClass("active")
        $("body").toggleClass("show");
    });

    /*-------- custome dropdown start --------*/
    var inputvalue;
    $(document).on("click",".searchInput",function() {
        $(this).removeAttr("readonly");
        if($(this).parents(".dropSearch").find(".listbox").css("display") != "block"){
            $(this).parents(".dropSearch").find(".listbox").slideDown(10);
        }
    });
    $(document).on("click",".dropSearchInput i",function() {
        $(this).parents(".dropSearchInput").find(".searchInput").click();
        $(this).parents(".dropSearchInput").find(".searchInput").focus();
    });
    $(document).on("keyup",".searchInput",function() {
        var searchValue = $(this).val();
        inputvalue = $(this);
        searchDrop(searchValue)
    });
    function searchDrop(searchTerm) {
        if (searchTerm == '') {
            $(".listbox li").show()
        } else {
        $(inputvalue).parents(".dropSearch").find(".listbox li").each(function() {
            var currentText = $(this).attr("data-id");
            currentText = currentText.toUpperCase();
            searchTerm = searchTerm.toUpperCase();
            if (currentText.indexOf(searchTerm) >= 0) {
                $(this).show();
            }
            else{
                $(this).hide();
            }
        });
      }
    }
    $(document).on("click",".listbox li",function() {
        var thistext = $(this).text();
        $(this).parents(".dropSearch").find(".searchInput").val(thistext);
        $(this).parents(".dropSearch").find(".searchInput").attr("readonly","readonly");
        $(".listbox").slideUp(10);
        $(".listbox li").css("display","block");
    });
    $(document).mouseup(function(e) 
    {
        var container = $(".listbox");
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            $(".searchInput").attr("readonly","readonly");
            $(".listbox").slideUp(10);
            $(".listbox li").css("display","block");
        }
    });
    /*-------- custome dropdown end --------*/
});