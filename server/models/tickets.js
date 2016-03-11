'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ticket = sequelize.define('Ticket', {
    device_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {args: true, msg: "Device type cannot be empty"}
      }
    },
    device_serial_no: DataTypes.STRING,
    device_model: DataTypes.STRING,
    device_screen_size: DataTypes.STRING,
    contact_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Contact name cannot be empty"}
      }
    },
    contact_email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Contact email cannot be empty"},
        isEmail: {args: true, msg: "Contact email is not a valid email"}
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Ticket;
};
