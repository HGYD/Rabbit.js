module.exports = {
  "user_id": {
    "type": "varchar(20)",
    "allowNull": false,
    "defaultValue": null,
    "primaryKey": false,
    "comment": null
  },
  "brand": {
    "type": "varchar(30)",
    "allowNull": true,
    "defaultValue": null,
    "primaryKey": false,
    "comment": null
  },
  "price_low": {
    "type": "int(11)",
    "allowNull": true,
    "defaultValue": null,
    "primaryKey": false,
    "comment": null
  },
  "emission": {
    "type": "varchar(50)",
    "allowNull": true,
    "defaultValue": null,
    "primaryKey": false,
    "comment": null
  },
  "location": {
    "type": "varchar(50)",
    "allowNull": true,
    "defaultValue": null,
    "primaryKey": false,
    "comment": null
  },
  "series": {
    "type": "varchar(40)",
    "allowNull": false,
    "defaultValue": null,
    "primaryKey": false,
    "comment": null
  },
  "price_high": {
    "type": "int(11)",
    "allowNull": false,
    "defaultValue": null,
    "primaryKey": false,
    "comment": null
  },
  "subscribe_date": {
    "type": "timestamp",
    "allowNull": false,
    "defaultValue": "CURRENT_TIMESTAMP",
    "primaryKey": false,
    "comment": null
  },
  "ID": {
    "type": "varchar(40)",
    "allowNull": false,
    "defaultValue": "",
    "primaryKey": true,
    "comment": null
  }
}