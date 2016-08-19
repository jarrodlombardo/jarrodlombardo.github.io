function updateCounter(name) {
    var count = $("input[name='"+name+"[]']:checked").length;
    if(count>0){
        $("#"+name+" .counter").text(count);
    }else{
        $("#"+name+" .counter").text('0');
    }
}

$(function() {
    $('#upholder .counter').text('0');
    $('#questioner .counter').text('0');
    $('#rebel .counter').text('0');
    $('#obliger .counter').text('0');

    updateCounter("upholder");
    updateCounter("questioner");
    updateCounter("rebel");
    updateCounter("obliger");
})

$("#upholder_ul input:checkbox").on("change", function() {
    updateCounter("upholder");
});
$("#questioner_ul input:checkbox").on("change", function() {
    updateCounter("questioner");
});
$("#rebel_ul input:checkbox").on("change", function() {
    updateCounter("rebel");
});
$("#obliger_ul input:checkbox").on("change", function() {
    updateCounter("obliger");
});
