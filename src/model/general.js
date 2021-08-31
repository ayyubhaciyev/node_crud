const DB = require("../db/connection");
const moment = require("moment");
exports.iscileriGetir = (result) =>{


    DB.query("SELECT * FROM isciler", (err,res) =>{

        if(err) result(null,err);
        else{
            if(res.length === 0){
                result(null,{
                    data:"Isci_tapilmadi",
                    status:true
                });
            }else{
                result(null,res);
            }
        }
    });
};

exports.isciElave = async(adsoyad,vezife,maas) =>{

    return new Promise((resolve,reject) =>{


        const query = `INSERT INTO isciler (adsoyad,vezife,maas,tarix) VALUES (?,?,?,?)`;
        const date = moment().local().format("YYYY-MM-DD HH:MM:SS");
        const filter = [adsoyad,vezife,maas,date];

        DB.query(query,filter, async(err,result,fields) =>{
            if(err){
                resolve(err);
                return 0;
            }
            if(result === undefined || !result || result.length===0){
                resolve(0);
                return 0;
            }
            resolve(1);
            return 1;
        });


    });

};

exports.isciSil = async(id) =>{

    return new Promise((resolve,reject) =>{


        const query = `DELETE FROM isciler where id = ?`;
        const filter = [id];

        DB.query(query,filter, async(err,result,fields) =>{
            if(err){
                resolve(err);
                return 0;
            }
            if(result === undefined || !result || result.length===0){
                resolve(0);
                return 0;
            }
            resolve(1);
            return 1;
        });


    });

};

exports.isciRedakte = async(id,adsoyad,vezife,maas) =>{

    return new Promise((resolve,reject) =>{

        console.log(id,adsoyad,vezife,maas);
        const query = `UPDATE isciler SET adsoyad = ?, vezife = ? , maas = ?  where id = ?`;
        const filter = [adsoyad,vezife,maas,id];

        DB.query(query,filter, async(err,result,fields) =>{
            if(err){
                resolve(err);
                return 0;
            }
            if(result === undefined || !result || result.length===0){
                resolve(0);
                return 0;
            }
            resolve(1);
            return 1;
        });


    });

};