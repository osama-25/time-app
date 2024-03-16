var moment = require('moment');
var momenttz = require('moment-timezone');
var modal = require('micromodal');
modal.init();

window.onload = function displaydate(){
    date();
    setInterval(date, 1000);
}

function date(){
    var myDate = new Date();
    var mycooldate = moment(myDate).format("LTS");

    var h1 = document.getElementById('time');

    h1.innerHTML = mycooldate;
}

function showmodal(){
    modal.show('modal-1');
}
window.showmodal = showmodal;

function changetimezone(){
    var dd = document.getElementById('timezones');
    var selected = dd.options[dd.selectedIndex].value;
    if(selected == "0"){
        momenttz.tz.setDefault('Etc/GMT+0');
    }
    else if(selected == "1"){
        momenttz.tz.setDefault('Etc/GMT-1');
    }
    else if(selected == "2"){
        momenttz.tz.setDefault('Etc/GMT-2');
    }
    else{
        momenttz.tz.setDefault('Etc/GMT-3');
    }
}
window.changetimezone = changetimezone;