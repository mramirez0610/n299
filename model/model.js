var routes = ["home", "about", "products", "contact"];

function changeRoute(){
    let hash = window.location.hash;
    let pageID = hash.replace("#", "");

    if (pageID != ""){
        $.get(`pages/${pageID}.html`, function(content){
            $("#app").html(content);
        });
    } else {
        $.get(`pages/home.html`, function(content){
            $("#app").html(content);
        });
    };
};

export {routes, changeRoute};