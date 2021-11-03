var MODEL = (function(){
    var homeContent = ``;

    var _changePageContent = function(pageName){
        let contentName = pageName + "Content";
        $("#app").html(eval(contentName));
        initListeners();

        if (pageName == "home"){
            $("#nav").addClass("home-nav");
            $("#nav-logo").addClass("logo-white");
            $("#nav-logo").removeClass("logo");
        } else {
            $("#nav-logo").addClass("logo");
            $("#nav").removeClass("home-nav");
            $("#nav-logo").removeClass("logo-white");
        };
    };

    return {
        changePageContent: _changePageContent,
    };
})();