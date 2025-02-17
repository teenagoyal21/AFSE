const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


router.get("/:email", async(req, res)=>{
    const {email} = req.params;
    const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
    })
    res.json({user});
})

router.post("/", async(req, res)=>{
    const {email, name, password} = req.body;
    let newUser = await prisma.user.create({
        data: {
            email: email,
            name: name,
            password: password
        }
    })
    res.json({newUser});
})

router.delete("/:email", async(req, res)=>{
    const {email} = req.params;
    const deleteUser = await prisma.user.delete({
        where: {
          email: email,
        },
    })
    res.send("user deleted");
})

router.put("/:email", async(req, res)=>{
    const {email} = req.params;
    const updateUser = await prisma.user.update({
        where: {
          email: email,
        },
        data: {
          name: "Viola the Magnificent",
        }
    })
    res.send({updateUser});
})

module.exports = router;