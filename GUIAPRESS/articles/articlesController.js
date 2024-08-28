const express = require('express');
const router = express.Router();
const Category = require('../categories/category')
const slugify = require('slugify')
const Article = require('./article')

router.get('/articles', (req, res) => {
    res.send('ROTA DE ARTIGOS');
})

router.get('/admin/articles/new', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/articles/new', {categories: categories});
    })
})

router.post('/articles/save', (req,res) => {
    var title = req.body.title;
    var body = req.body.body;
    var categoryId = req.body.category;
    if(title != undefined && body != undefined){
        Article.create({
            title: title,
            slug: slugify(title),
            body: body,
            categoryId: categoryId
        }).then(() => {
            res.redirect('/admin/articles');
        })}
})

module.exports = router;