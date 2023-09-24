const pg = require("pg")
const { dbUser, dbHost, db, dbPassword, dbPort } = require("../constants")
const {Pool} = pg

class Database{

    table = "stake"

    constructor(){
        this.pool = new Pool({
            user: dbUser,
            host: dbHost,
            database: db,
            password: dbPassword,
            port: dbPort,
        })
    }

    getAll(address){
        let sql = `SELECT * FROM ${this.table} WHERE "Address" = '${address}' `
        return new Promise( (resolve,reject) =>{
            this.pool.query(sql, (err,res) => {
                if(err) reject(err)
                else resolve(res.rows)
            })
        } )
    }

    addRow(data){
        return new Promise( (resolve,reject) => {

            const sql = `INSERT INTO ${this.table} ("Id","Address","Data") VALUES ($1, $2, $3)`
            const {tokenId,address} = data
            this.pool.query(sql, [tokenId,address,JSON.stringify(data)], (err, res)=>{
                if(err) reject(err)
                else resolve({...data})
            })

        } )
    }

    deleteRow(id){
        return new Promise( (resolve,reject) => {

            const sql = `DELETE FROM ${this.table} WHERE "Id" = $1`
            this.pool.query(sql, [id], (err, res)=>{
                if(err) reject(err)
                else resolve(res.rows)
            })

        } )
    }



}

module.exports = { Database }