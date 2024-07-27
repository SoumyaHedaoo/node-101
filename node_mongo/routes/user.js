const express = require("express");
const { getAlluser ,
        createNewUser,
        xgetUserById,
        xupdateUserById,
        xxId

      } = require("../controller/user.js")

const router=express.Router();



//for desktop
router
    .route("/")
    .get(getAlluser)
    .post(createNewUser)

router
    .route("/:id")
    .get(xgetUserById)
    .patch(xupdateUserById)
    .delete(xxId)

module.exports = router;