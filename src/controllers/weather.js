const express = require('express');
const Success = require('../handlers/succesHandler');
const {weatherByCoordinates: weatherByCoordinatesService,
    weatherByCityId: weatherByCityIdService} = require('../services/weatherService');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const weatherByCoordinates = async (req, res) => {   
    try{
    const {lon, lat} = req.query;

    const weather = await weatherByCoordinatesService(lon, lat);
    const succes = new Success(weather);
    res.json(succes);
    }catch(err){
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

 const weatherByCityId  = async (req, res) => {   
    try{
    const id = req.params.id;
    const city = req.params.city;
    const weather = await weatherByCityIdService(city, id);
    const succes = new Success(weather);
    res.json(succes);
    }catch(err){
        next(err);
    }
};




module.exports = {    
    weatherByCoordinates,
    weatherByCityId    
}