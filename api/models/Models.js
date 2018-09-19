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
const EquipmentType = mongoose.model('EquipmentType',EquipmentTypeSchema);


EquipmentSchema = new Schema({
    typeId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'EquipmentType',
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
    isAllocated:{
        type:Boolean,
        required:true,
        default: false
    },
    allocatedTo:{
        type:Schema.Types.ObjectId,
        required:false,
        ref: 'Office'
    }
})

OfficeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    managerId:{
        type:Schema.Types.ObjectId,
        required:false,
        ref: 'User'
    }
})

AllocationSchema = new Schema({
    equipmentId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref: 'Equipment'
    },
    officeId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref: 'Office'
    },
    allocation_time:{
        type:Date,
        required:true,
        default:Date.now()
    }

})
/// please work

const Equipment = mongoose.model('Equipment',EquipmentSchema);
const User = mongoose.model('User',UserSchema);
const Office = mongoose.model('Office',OfficeSchema);
const Allocation = mongoose.model('Allocation',AllocationSchema);

module.exports.User = User;
module.exports.EquipmentType = EquipmentType;
module.exports.Equipment = Equipment;
module.exports.Office = Office;
module.exports.Allocation = Allocation;
