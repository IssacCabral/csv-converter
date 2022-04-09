import { Router } from "express";
const router = Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/mostradados', (req, res) => {
    let option = req.body.option
    let arquivo = req.body.arquivo

    console.log(option, arquivo)
    res.render('mostradados')
})

export default router