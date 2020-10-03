$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Kabul&units=metric&appid=f15d8c2958b29bc98d15e51675291134",function (data) {
    
    // var icon = "http://api.openweathermap.org/img/w/"+data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);//tempeture
    var weather = data.weather[0].main; //weather status
    var icon = data.weather[0].icon;
        console.log(data);

    $("#icon1").attr("src","icons/" +icon+ ".svg");
    $("#temp").text(temp);
    $("#states").text(weather);


});

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Kunduz&units=metric&appid=f15d8c2958b29bc98d15e51675291134",function (data) {
    
    // var icon = "http://api.openweathermap.org/img/w/"+data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);//tempeture
    var weather = data.weather[0].main; //weather status
    var icon = data.weather[0].icon;

    $("#ku_icon").attr("src","icons/" +icon+ ".svg");
    $("#ku_temp").text(temp);
    $("#ku_states").text(weather);
});

// mazar data
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Mazar&units=metric&appid=f15d8c2958b29bc98d15e51675291134",function (data) {
    
    // var icon = "http://api.openweathermap.org/img/w/"+data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);//tempeture
    var weather = data.weather[0].main; //weather status
    var icon = data.weather[0].icon;

    $("#mz_icon").attr("src","icons/" +icon+ ".svg");
    $("#mz_temp").text(temp);
    $("#mz_status").text(weather);
});

// parwan data
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Parwan&units=metric&appid=f15d8c2958b29bc98d15e51675291134",function (data) {
    
    // var icon = "http://api.openweathermap.org/img/w/"+data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);//tempeture
    var weather = data.weather[0].main; //weather status
    var icon = data.weather[0].icon;

    $("#pr_icon").attr("src","icons/" +icon+ ".svg");
    $("#pr_temp").text(temp);
    $("#pr_status").text(weather);
});

// herat data
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Herat&units=metric&appid=f15d8c2958b29bc98d15e51675291134",function (data) {
    
    // var icon = "http://api.openweathermap.org/img/w/"+data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);//tempeture
    var weather = data.weather[0].main; //weather status
    var icon = data.weather[0].icon;

    $("#he_icon").attr("src","icons/" +icon+ ".svg");
    $("#he_temp").text(temp);
    $("#he_status").text(weather);
});

// Badakhshan data
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Herat&units=metric&appid=f15d8c2958b29bc98d15e51675291134",function (data) {
    
    // var icon = "http://api.openweathermap.org/img/w/"+data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);//tempeture
    var weather = data.weather[0].main; //weather status
    var icon = data.weather[0].icon;

    $("#bd_icon").attr("src","icons/" +icon+ ".svg");
    $("#bd_temp").text(temp);
    $("#bd_status").text(weather);
});



