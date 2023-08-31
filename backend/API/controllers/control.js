const mongoose = require("mongoose");
const axios = require('axios');
const Bebida = require("../models/bebida");
const Shot = require("../models/shot");


module.exports = {

    postBebida: async (req, res, next) => {

        console.log(req.body);
        const newBeb = new Bebida({
            nome: req.body.nome,
            imagem: req.body.imagem,
            ingredientes: req.body.ingredientes,
            preco: req.body.preco,
        });
        newBeb.save();

        res.status(200).json();
    
      },
      postShot: async (req, res, next) => {

        const newShot = new Shot({
            nome: req.body.nome,
            imagem: req.body.imagem,
            ingredientes: req.body.ingredientes,
            preco: req.body.preco,
            numeroshot: req.body.numeroshot,
        });
        newShot.save();

        res.status(200).json();
    
      },
        getRoleta: async (req, res, next) => {
            try {
                const randomShots = await Shot.aggregate([{ $sample: { size: 10 } }]);
                res.status(200).json(randomShots);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal server error' });
            }
        },
        getBingo: async (req, res, next) => {
            try {
                const randomShots = await Shot.aggregate([{ $sample: { size: 10 } }]);
                const randomBebidas = await Bebida.find().limit(4);
                const bingoData = { shots: randomShots, bebidas: randomBebidas };
                res.status(200).json(bingoData);
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal server error' });
        }
    },
      getShots: async (req, res, next) => {

        Shot.find().then(result => {
            console.log(result);
            res.status(200).json(result);
          })

    
      },
      getBebida: async (req, res, next) => {

        Bebida.find().then(result => {
            console.log(result);
            res.status(200).json(result);
          })

    
      },
   
  }