const generalModel = require('../model/general');

const iscileriGetir = async(req,res) =>{


    generalModel.iscileriGetir((err,isciler)=>{

        if(err){
            res.status(404).json(err);
        }
        else{
            // console.log(isciler);
            res.render("home",{
                isciler
            });
        }



    });


}

const isciElave = async(req,res) => {
    console.log(req.body);

    const addEmp = await generalModel.isciElave(req.body.adsoyad,req.body.vezife,req.body.maas);
    if(addEmp){
        res.redirect("/");
    }else{
        res.status(404).json({
            'message':"Error"
        });
    }

}


const isciSil  = async (req,res) =>{
    console.log(req.params.id);

    const deleteEmp = await generalModel.isciSil(req.params.id);

    if(deleteEmp){
        res.redirect("/");
    }else{
        res.status(404).json({
            'message':"Error"
        });
    }

};

const isciRedakte  = async (req,res) =>{
    console.log(req.body);

    const editEmp = await generalModel.isciRedakte(req.body.edit_id,req.body.edit_adsoyad,req.body.edit_vezife,req.body.edit_maas);

    if(editEmp){
        res.redirect("/");
    }else{
        res.status(404).json({
            'message':"Error"
        });
    }

};


module.exports = {
    iscileriGetir,
    isciElave,
    isciSil,
    isciRedakte
};