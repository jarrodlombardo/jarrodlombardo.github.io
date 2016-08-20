function updateCounter(name) {
    var count = $("input[name='"+name+"[]']:checked").length;
    if(count>0){
        $("#"+name+" .counter").text(count);
    }else{
        $("#"+name+" .counter").text('0');
    }
}

$(document).ready(function(){

    //Randomize question order
    var $ul = $('#questions')
    var $liArr = $ul.children('li');
    $liArr.sort(function(a,b){
        var temp = parseInt( Math.random()*10 );
        var isOdd = temp%2;
        var isHigh = temp>5 ? 1 : -1;
        return( isOdd*isHigh );
    }).appendTo($ul);

    updateCounter("upholder");
    updateCounter("questioner");
    updateCounter("rebel");
    updateCounter("obliger");
})

$("input.u:checkbox").on("change", function() {
    updateCounter("upholder");
});
$("input.q:checkbox").on("change", function() {
    updateCounter("questioner");
});
$("input.r:checkbox").on("change", function() {
    updateCounter("rebel");
});
$("input.o:checkbox").on("change", function() {
    updateCounter("obliger");
});
