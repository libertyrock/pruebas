//var globalvar="";

// **************************************
// ************* Functions **************
// **************************************
function sndsvr(command, params, func) {
    $.ajax({
        data: params,
        url: command,
        type: 'post',
        success: function (response) {
            func(response);
        }
    });
}

// **************************************
// ************* Events *****************
// **************************************
function events() {
    $('#id').on("click",id_click);
}

function id_click() {
    var params = { id: id, var1: var1};
    sndsvr('id.php', params, function (response) {
        var jres= JSON.parse(response);
    });
}

// **************************************
// ************* Init *******************
// **************************************
$(function () {
    events();
});
