const Product = require('../models/product');
const path = require('path');
const productController = {
    getProducts: (req,res) => {
        Product.find({}).exec((err, product) => {
            if(err) return res.status(500).send({message:'Error al devolver data'});
            if(!product) return res.status(404).send({message: 'No existen productos'});
            return res.status(200).send({product});
        });
    },
    saveProduct:(req,res) => {
        var product=new Product();
        var params=req.body;
        product.name=params.name;
        product.description=params.description;
        product.price=params.price;
        product.type=params.type;
        product.size=params.size;
        product.image=null;
        product.save((err,productStored)=>{
            if(err) return res.status(500).send({message:'Error al guardar'});
            if(!productStored) return res.status(404).send({message:'No se hapodidio guardar el producto'});
            return res.status(200).send({product:productStored});
        })
    },
    getProduct:(req,res) => {
        var productId=req.params.id;
        if(productId==null) return res.status(404).send({message:'El producto no existe'});
        Product.findById(productId,(err, product)=>{
            if(err) return res.status(500).send({message:'Error al devolver los datos'}); 
            if(!product) return res.status(404).send({message:'El producto no existe'}); 
            return res.status(200).send({product});
        });
    },
    deleteProduct:(req,res) => {
        var productId=req.params.id;
        Product.findByIdAndRemove(productId,(err, productRemove)=>{
            if(err) return res.status(500).send({message:'Error al eliminar los datos'}); 
            if(!productRemove) return res.status(404).send({message:'No se puede eliminar'}); 
            return res.status(200).send({book:productRemove});
        });
    },
    updateProduct:(req,res) => {
        var productId=req.params.id;
        var update=req.body;
        Product.findByIdAndUpdate(productId,update,{new:true},(err,productUpdate)=>{
            if(err) return res.status(500).send({message:'Error al actualizar los datos'}); 
            if(!productUpdate) return res.status(404).send({message:'No existe para actualizar'}); 
            return res.status(200).send({product:productUpdate});
        });
    }
}
module.exports = productController;