let listComments=[];

function startApp(){
    document.getElementById('comment-list').innerHTML='';
    let comment=document.getElementById("input-send").value;
    listComments.push(comment);
    listComments.map((element,i)=>{
    document.getElementById('comment-list').innerHTML += `
            <h5>${element}</h5>
            <button onclick="deleteComment(${i})">Eliminar</button>
            <hr>
        `
    })
}
function deleteComment(item){
    listComments.splice(item,1);
    document.getElementById('comment-list').innerHTML='';
    listComments.map((element,i)=>{
        document.getElementById('comment-list').innerHTML += `
            <div id='${i}'>
                <h5>${element}</h5>
                <button onclick="deleteComment(${i})">Eliminar</button>
                <hr>
            </div>
            `
        })



}


