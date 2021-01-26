const dbs = require("./sqlfns")
//                                                  **main page fnc
function get(req,res){
    res.send("get request")
}

//                                                  **getall notes func
function getnotes(req,res){
    // res.send("got all notes")
    dbs.getall(req,res)
}
//                                                  **add note func active func
function addnote(req,res){
    // res.send("got all notes")
    dbs.insertnote(req,res)
}
//                                                  **delete note func
function delnote(req,res){
    dbs.delnote(req,res)
}


module.exports = {
    get,getnotes,addnote,delnote
}