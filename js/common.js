
$(document).ready(function() {

//        三角样式
    var hrefSp = window.location.href.split("/");
    if (hrefSp.length > 0) {
        var pathName = window.location.pathname.toString().toLowerCase();
        if(pathName.indexOf('package_list') > -1){
            $(".nav_tc").siblings().removeClass('nav-on');
            $(".nav_tc").addClass('nav_tc nav-on');
        }else if(pathName.indexOf('organ_list') > -1){
            $(".nav_jg").siblings().removeClass('nav-on');
            $(".nav_jg").addClass('nav_jg nav-on');
        }else if(pathName.indexOf('package_detail') > -1){
            $(".nav_tc").siblings().removeClass('nav-on');
            $(".nav_tc").addClass('nav_jg nav-on');
        }else{
            $(".nav_index").siblings().removeClass('nav-on');
            $(".nav_index").addClass('nav_index nav-on');
        }

        if(pathName.indexOf('order_time') > -1){
            $(".shopping_nav>li").siblings().removeClass('shopping_nav_on');
            $("#3").addClass('shopping_nav_on');
        }else if(pathName.indexOf('pay') > -1){
            $(".shopping_nav>li").siblings().removeClass('shopping_nav_on');
            $("#2").addClass('shopping_nav_on');
        }else{
            $(".shopping_nav>li").siblings().removeClass('shopping_nav_on');
            $("#1").addClass('shopping_nav_on');
        }

    }


});