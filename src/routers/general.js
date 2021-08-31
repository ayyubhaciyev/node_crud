const router = require("express").Router();

const generalController = require("../controller/general");


router.get('/',generalController.iscileriGetir);
router.get('/isci-sil/:id',generalController.isciSil);

router.post('/isci-elave',generalController.isciElave);
router.post('/isci-redakte',generalController.isciRedakte);


module.exports = router;