const express = require('express');
const router = express.Router();

// models
const User = require('../models/Models').User;
const Equipment = require('../models/Models').Equipment;
const EquipmentType = require('../models/Models').EquipmentType;
const Office = require('../models/Models').Office;

// passport middlewares
const passport =  require('../passport').passport;
const opts = require('../passport').opts;
const jwt = require("jsonwebtoken");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// const opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
// opts.secretOrKey = 'SECRET_KEY'; //normally store this in process.env.secret

const options = {};

// passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
//     console.log(jwt_payload.email);
//     if (jwt_payload.email === "nacoss@gmail.com") {
//         return done(null, true)
//     }
//     return done(null, false)
// }));

// opts.jwtFromRequest = ExtractJwt.fromUrlQueryParameter('token');
// opts.secretOrKey = 'secret';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';

router.post('/login',(req,res,next)=>{
    let { email, password } = req.body;
    console.log(req.body);
    User.find({email:email,password:password}).then((user)=>{
        console.log(user);
        if(user.length>0){
            var payload = {user: user};
            var token = jwt.sign(payload, opts.secretOrKey);
            res.status(200).json({status:1,message:user,token:token});
        }else{
            res.json({status:0,message:'Invalid Email and Password'})
        }
    }).catch((err)=>{
        console.log(err);
    })
});

router.post('/protected',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.send('nice');
})

router.post('/addUser',(req,res)=>{
    const newUser = {
        firstname: 'Niyi',
        lastname: 'Obi',
        email:'nacoss@gmail.com',
        password: '1234',
        role: 1
    };
    User.create(newUser).then((user)=>{
        console.log(user);
    }).catch((err)=>{
        console.log(err);
    })
})

// CRUD endpoints for equipments
router.post('/equipment',(req,res,next)=>{
    const newEquipment = {
        typeId: req.body.typeId,
        name: req.body.equipmentName,
        condition: req.body.condition
    };
    Equipment.create(newEquipment).then((equipment)=>{
        res.status(201).json({status:1,message:equipment});
    }).catch((err)=>{
        res.status(500).json({status:0,mesage:err});
    })
})

router.get('/equipmentCount',(req,res)=>{
    Equipment.count({},(err,equip)=>{
        if(err){
            res.status(500).json({status:0,mesage:err});
        }else{
            res.status(200).json({status:1,message:equip});
        }
    })
});

router.get('/equipments',(req,res,next)=>{
    Equipment.find({},{}).populate('typeId','typeName').exec((err,equipments)=>{
        if(err){
            res.status(500).json({status:0,message:"Sorry, error fetching data"});
        }
        if(equipments){
            res.status(200).json({status:1,message:equipments});
        }
    });
});

router.put('/updateEquipment',(req,res,next)=>{
    const typeId = req.body.typeId;
    const name = req.body.equipmentName;
    const condition = req.body.condition;
    const equipmentId = req.body.equipmentId;

    Equipment.findOneAndUpdate({_id:equipmentId},{$set:{typeId:typeId,name:name,condition:condition}},(err,equipment)=>{
        if(err){
            res.status(500).json({status:0,message:err})
        }else{
            res.status(202).json({status:1,message:equipment});
        }
    })
})

router.delete('/deleteEquipment',(req,res,next)=>{
    const equimentId = req.query.equimentId;
    Equipment.findByIdAndRemove(equimentId).then((equipment)=>{
        res.status(200).json({status:1,message:equipment});
    }).catch((err)=>{
        res.status(500).json({status:0,message:err});
    })
})

// CRUD Endpoints For EquipmentTypes

router.post('/addEquipmentType',(req,res,next)=>{
    const newEquipmentType = {
        typeName: req.body.typeName
    };
    EquipmentType.create(newEquipmentType).then((equipment_type)=>{
        res.status(201).json({status:1,message:equipment_type});
    }).catch((err)=>{
        res.status(500).json({status:0,mesage:err});
    })
})

router.get('/getAllEquipmentTypes',(req,res,next)=>{
    EquipmentType.find({},{}).exec((err,equipment_types)=>{
        if(err){
            res.status(500).json({status:0,message:"Sorry, error fetching data"});
        }
        if(equipments){
            res.status(200).json({status:1,message:equipment_types});
        }
    });
});

router.get('/equipmentTypeCount',(req,res)=>{
    EquipmentType.count({},(err,equip)=>{
        if(err){
            res.status(500).json({status:0,mesage:err});
        }else{
            res.status(200).json({status:1,message:equip});
        }
    })
});

router.put('/updateEquipmentType',(req,res,next)=>{
    const typeName = req.body.typeName;
    const typeId = req.body.typeId;

    EquipmentType.findOneAndUpdate({_id:typeId},{$set:{typeId:typeId,typeName:typeName}},(err,equipment_type)=>{
        if(err){
            res.status(500).json({status:0,message:err})
        }else{
            res.status(202).json({status:1,message:equipment_type});
        }
    })
})

router.delete('/deleteEquipment',(req,res,next)=>{
    const typeId = req.query.typeId;
    EquipmentType.findByIdAndRemove(typeId).then((equipment_type)=>{
        res.status(200).json({status:1,message:equipment_type});
    }).catch((err)=>{
        res.status(500).json({status:0,message:err})
    })
})

// CRUD endpoints for office

router.post('/addOffice',(req,res,next)=>{
    const newOffice = {
        name: req.body.name
    };
    Office.create(newOffice).then((office)=>{
        res.status(201).json({status:1,message:office});
    }).catch((err)=>{
        res.status(500).json({status:0,mesage:err});
    })
})

router.get('/officeCount',(req,res)=>{
    Office.count({},(err,equip)=>{
        if(err){
            res.status(500).json({status:0,mesage:err});
        }else{
            res.status(200).json({status:1,message:equip});
        }
    })
});

router.get('/getAllOffices',(req,res,next)=>{
    Office.find({},{}).exec((err,offices)=>{
        if(err){
            res.status(500).json({status:0,message:err});
        }
        if(offices){
            res.status(200).json({status:1,message:offices});
        }
    });
});

router.put('/updateOffice',(req,res,next)=>{
    const name = req.body.name;
    const officeId = req.body.officeId;

    Office.findOneAndUpdate({_id:officeId},{$set:{name:name}},(err,office)=>{
        if(err){
            res.status(500).json({status:0,message:err})
        }else{
            res.status(202).json({status:1,message:office});
        }
    })
})

router.delete('/deleteOffice',(req,res,next)=>{
    const officeId = req.query.officeId;
    Office.findByIdAndRemove(typeId).then((office)=>{
        res.status(200).json({status:1,message:office});
    }).catch((err)=>{
        res.status(500).json({status:0,message:err});
    });
});

module.exports = router;