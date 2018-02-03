$(document).ready(function() {
	setTimeout(loadingScreen, 50);

	setFleche();

	$(".cd-single-point").click(function() {
		var idVille = $(this).id;
	});

	$(".cd-single-point").hover(
		function() {
			var ville = $(this).attr("id").split("-")[1];
			$(this).find("span").velocity({
			width: "+=10",
			});
			$(this).find("span").show();
			updateCityDes(ville);

		}, function() {
			var ville = $(this).attr("id").split("-")[1];
			$(this).find("span").velocity({
				width: "-=10"
			});
			$(this).find("span").hide();
			hideCityDes(ville);
		});



});

function loadingScreen() {
    //Configure le flottage de la flèche du bas pour changer de page
    $("#loading-screen").hide(function() {

    	$("#fullpage").css("visibility","visible");
    });
}

function setFleche() {
    //Configure le flottage de la flèche du bas pour changer de page
    $('.flecheBas').jqFloat({
        width: 0,
        height: 18,
        speed: 400
    });

    $('.flecheBas').click(function() {
        $.fn.fullpage.moveSectionDown();
    });
}

function setCityDes(id) {
    $("section.categorie-des").css("opacity","0");
    $("section.categorie-des").css("z-index","0");

    
    $("div.cat" + id).addClass("active-des");
    $("section.cat" + id).addClass("active-des");
    $("section.cat" + id).css("z-index","2");
    
    $("section.cat" + id).velocity({
        opacity: 1,
        left: "-=50"
    });
    
}

function updateCityDes(id) {
    $("#survolez-ville").hide();
    $("p#des-" + id).show();
}

function hideCityDes(id) {
	$("p#des-" + id).hide();
    $("#survolez-ville").show();
}