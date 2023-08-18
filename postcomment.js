const express = require("express");
const router = express.Router();
const postcomment = require("../model/postcomment");
const mongoose = require("mongoose");
const Auth = require('../Middleware/auth');
const path = require("path");


router.post('/postcomment', (req, res) => {

    console.log("postlike entered");
    //var response = "Nothing";

    var RecipeId = req.body.RecipeId;

    var UserId = req.body.UserId;
    var Comment = req.body.Comment;
    var Rate = req.body.Rate;



    var newpostcomment = new postcomment(
        {
            'RecipeId': RecipeId,

            'UserId': UserId,
            'Comment': Comment,
            'Rate': Rate
        }
    );
    console.log("REQUEST-->" + newpostcomment);

    newpostcomment.save().then(function () {
        response = "You gave a review on the post"
        console.log(response);
        res.send(response);
    }).catch(function (e) {
        response = "Error"
        console.log(response);
        res.send(e);
    })

})
router.get('/getselectedreciperate/:id', function (req, res) {
    uid = req.params.id.toString();
    postcomment.find({ RecipeId: uid }).then(function (recipe) {
        res.send(recipe);
    }).catch(function (e) {
        res.send(e)
    });
});




module.exports = router;