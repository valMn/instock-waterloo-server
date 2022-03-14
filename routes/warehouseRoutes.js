const router = require("express").Router();

const warehouseController = require("../controllers/warehouseController");


//! SORT WILL HAPPEN on GET route using params e.g.
// /warehouse ? sort_cat=category & sort=asc

//GET("/")
// TaskBack-End: API to GET List of All Warehouses
// J2W-10Medium-
router.get("/", warehouseController.getWarehousesList);


//GET("/:wId")
// TaskBack-End: API to GET a Single Warehouse
// J2W-11Medium-

//POST("/")
// TaskBack-End: API to POST/CREATE a New Warehouse
// J2W-12Medium-

//PATCH("/:wId")
// TaskBack-End: API to PUT/PATCH/EDIT a Warehouse
// J2W-14Medium-

//DELETE("/:wId")
// TaskBack-End: API to DELETE a Warehouse
// J2W-15Medium

module.exports = router;
