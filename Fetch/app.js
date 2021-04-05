

var courseAPI = 'http://localhost:3000/course';

function start(){
    // getCourse(function(couser){
    //     console.log(couser);
    // });

    getCourse(renderCouser);
    
    handleCreateForm();
}

start();

//functions

function getCourse(callback){
    fetch(courseAPI)
        .then(function(response){
            return response.json();
        })

        .then(callback);
}

function renderCouser(couser){
    var listCousesBlock = document.querySelector("#list-couser");

    var htmls = couser.map(function(coursers){
        return `
                <li>
                    <h3>${coursers.title}</h3>
                    <p>${coursers.author}</p>
                </li>
            `
    });

    var content = htmls.join("");

    listCousesBlock.innerHTML = content;

}

function handleCreateForm(){
    document.getElementById("btn-create").onclick = function() {
            console.log("tesst");
    };

}