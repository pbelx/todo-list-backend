//sql functions go here
const db = require('./db')

conn = db.conn

function print(msg) {
    console.log(msg)
}

//                                                              *get all notes
function getall(req, res) {

    squery = "select * from notes"

    conn.query(squery, (err, results) => {

        if (err) {
            print(err)
        } else {
            print(results)
            res.send(results)
            print("bye bye")
        } 
    })
}
//                                                                      *insert func
function insertnote(req, res) {

    var nts = req.body.note
    sql = "insert into notes (note) values (?);"
    conn.query(sql, [nts], (err, result) => {
        if (err) {
            print(err)
        } else {
            print(result)
        }
    })
    
    res.send("200 ok boss")
}

//                                                      ***delete note function
function delnote(req, res) {
    var nts = req.body.id
    sql = "delete from notes where id = ?;"
    conn.query(sql, [nts], (err, result) => {
        if (err) {
            print(err)
        } else {
            print(result)
        }
    })
    // print(nts)
    
    res.send("note " +nts + " deleted")
}

module.exports = {
    getall,insertnote,delnote
}