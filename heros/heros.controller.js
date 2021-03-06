const Heros = require('./heros.dao')

exports.createHero = function(req,res,next){
    var hero = {
        name : req.body.name,
        description : req.body.description
    }

    Heros.create(hero, function(err, hero){
        if(err){
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hero created succefully"
        })
    })
}

exports.getHeros = function(req,res,next){
    Heros.get({},(err,heros)=>{
        if(err)
            res.json({
                error :err
            })
        res.json({
            heros : heros
        })
    })
}

exports.getHero = function(req,res,next){
    Heros.get({name : req.params.name}, (err,heros)=>{
        if(err)
            res.json({
                error : err
            })
        res.json({
            heros : heros
        })
    })
}

exports.updateHero = function(req,res,next){
    var hero = {
        name : req.body.name,
        description : req.body.description
    }

    Heros.update({_id : req.params.id}, hero, function(err,hero){
        if(err)
            res.json({
                error : err
            })
        res.json({
            message : "hero updated succefully"
        })
    })
}

exports.removeHero = function(req,res,next){
    Heros.delete({_id : req.params.id}, (err, hero)=>{
        if(err){
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hero deleted succefully"
        })
    })
}