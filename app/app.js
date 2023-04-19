import { changeRoute, routes } from '../model/model.js'

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).ready(function (){
    initURLListener();
})