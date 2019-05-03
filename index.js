
window.onload=function() {

    // 获取页面可见区宽和高
    var width = document.documentElement.clientWidth;

    var height = document.documentElement.clientHeight;

    // alert("当前浏览器可见区 宽度:" + width + " 高度:" + height);

    // 设置 cover_div 的宽和高

    var cover_div = document.getElementById("cover_div");

    cover_div.style.width = width + "px";

    cover_div.style.height = height + "px";

    // 设置 cover_div_bar 的宽和高

    var bar_div = document.getElementById("bar_div");

    bar_div.style.width = width + "px";

    bar_div.style.height = (height * 0.1) + "px";

    bar_div.style.display = "none";

    // 设置 main_div 的宽和高

    var main_div = document.getElementById("main_div");

    main_div.style.width = width + "px";

    main_div.style.height = (height * 0.9) + "px";

    main_div.style.top = (height * 0.1) + "px";

    // 设置 list_div 的宽和高

    var list_div = document.getElementById("list_div");

    list_div.style.width = (width * 0.35) + "px";

    list_div.style.height = (height * 0.9) + "px";

    // 设置 content_div 的宽和高

    var content_div = document.getElementById("content_div");

    content_div.style.width = (width * 0.65) + "px";

    content_div.style.height = (height * 0.9) + "px";

}

