var express = require("express");
var router = express.Router();
var Product = require("./../models/product");

const ITEMS_PER_PAGE = 3;

var productList = new Array();
for (var i = 0; i < 4; i++) {
    var product = new Product();
    product.Id = i;
    product.Name = "Nhu Quynh " + i;
    product.Picture = "https://giadinh.mediacdn.vn/296230595582509056/2022/2/20/avatar1645331108136-16453311087022028227818.jpeg";
    product.Price = 2000 + i;
    productList.push(product);
}

router.get("/", function (req, res) {
    const page = parseInt(req.query.page) || 1;
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const productArray = productList.slice(startIndex, endIndex);
    const totalPages = Math.ceil(productList.length / ITEMS_PER_PAGE);
    const newProduct = null;
    res.render('product/index.ejs', { productList: productArray, newProduct, totalPages, currentPage: page });
});

router.get("/addProduct", function (req, res) {
    res.render("product/addProduct.ejs");
});

router.post("/addProduct", function (req, res) {
    var addProduct = new Product();
    addProduct.Id = req.body.Id;
    addProduct.Name = req.body.Name;
    addProduct.Picture = req.body.Picture;
    addProduct.Price = req.body.Price;
    productList.push(addProduct);
    console.log("---Sản phẩm mới thêm---\nId: " + addProduct.Id + "\nName: " + addProduct.Name + "\nPicture: " + addProduct.Picture + "\nPrice: " + addProduct.Price);
    res.redirect("/product");
});

router.get("/editProduct/:Id", function (req, res) {
    var findProduct = productList.find(productList => productList.Id === parseInt(req.params.Id))
    res.render("product/editProduct.ejs", { findProduct: findProduct });
});

router.post("/editProduct", function (req, res) {
    var findProduct = productList.find(productList => productList.Id === parseInt(req.body.Id))
    findProduct.Name = req.body.Name;
    findProduct.Picture = req.body.Picture;
    findProduct.Price = req.body.Price;


    res.redirect("/product");
});

router.get('/deleteProduct/:Id', (req, res) => {
    var findProduct = productList.find(productList => productList.Id === parseInt(req.params.Id))
    let index = productList.indexOf(findProduct);
    productList.splice(index, 1);
    console.log("ID sản phẩm vừa xóa: " + req.params.Id)
    res.redirect("/product");
});

module.exports = router;