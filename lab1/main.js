let imageURL_Array = [
    "拉麵.jpg",
    "漢堡.jpg",
    "滷肉飯.jpg",
    "水餃.jpg"
];


$(function(){
    $("input").on("click",function(){
        // alert("Hi");
        // $("h1").text("Hello");
        var numberOfListItem = $("li").length;
        // 3
        // 0 ~ 1 => 0 ~ 3
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        console.log(randomChildNumber);
        $("h2").text($("li").eq(randomChildNumber).text());
        // change image -> change image element's src
        $("img").attr("src",imageURL_Array[randomChildNumber]);
    });
});