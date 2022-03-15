const { v4: uuidv4 } = require("uuid");
const { readFile, writeFile } = require("../utils/helpers");
const path = require("path");

const warehouseJSONPath = path.join(__dirname, "../data/warehouses.json");
const warehouseList = readFile(warehouseJSONPath);

class Warehouse {
  constructor() {}

  //! TODO RESET WAREHOUSES METHOD
  //! TODO RESET INVENTORIES METHOD

  static getWarehousesList = () => {
    console.log("warehouse model");
    return warehouseList;
  };

  // TODO: J2W-11
  static findById = (warehouseId) => {
    return warehouseList.some((warehouse) => warehouse.id === warehouseId);
  };

  static getWarehouseById = (warehouseId) => {
    return warehouseList.find((warehouse) => warehouse.id === warehouseId);
  };
}

module.exports = Warehouse;
