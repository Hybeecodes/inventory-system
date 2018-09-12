const mongoose = require('mongoose');
const Schema = mongoose.Schema;

UserSchema = new Schema({
    firstname: {
        type:String,
        required: true
    },
    lastname: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    role: {
        type:Number,
        required:true
    }
})

EquipmentTypeSchema = new Schema({
    typeName:{
        type: String,
        required: true
    }
})

EquipmentSchema = new Schema({
    typeId:{
        type:Schema.Types.ObjectId,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    condition:{
        type:String,
        enum:['good','bad'],
        required:true
    },
    allocatedTo:{
        type:Schema.Types.ObjectId,
        required:false
    }
})

OfficeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    managerId:{
        type:Schema.Types.ObjectId,
        required:false
    }
})


const EquipmentType = mongoose.model('EquipmentType',EquipmentTypeSchema);
const Equipment = mongoose.model('Equipment',EquipmentSchema);
const User = mongoose.model('User',UserSchema);
const Office = mongoose.model('Office',OfficeSchema);

module.exports.User = User;
module.exports.EquipmentType = EquipmentType;
module.exports.Equipment = Equipment;
module.exports.Office = Office;
