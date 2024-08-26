const snacks = require('../models/snack');

const mongoose = require('mongoose');

// mongoose.connect('mongodb://0.0.0.0:27017/snacksProj');

const viewSnacks = async (req, res) => {
    const snacksView = await snacks.find({});
    res.json(snacksView);
}

const createSnack = (req, res) => {
    // console.log("entering")
    const { item, desc, calories } = req.body;
    // console.log(item);
    const rr = snacks.create({ item, desc, calories });
    // console.log(rr);
    res.json({ status: 'successful' });

}
const changeSnack = async(req, res) => {
    const { newDesc, newCalories, item } = req.body;

    // console.log(oldSnack,newSnack);
    // console.log(newDesc, newCalories, item)

    const rr = await snacks.updateOne({
        item: item
    }, {

        $set: { desc: newDesc,
                calories: newCalories }
    })
    // console.log(rr);
    res.json({ status: "changed" });
}

const deleteSnack = async (req, res) => {
    const { item } = req.body
    const tt = item;
    // console.log(tt);
    //const snackToDelete = snacks.find({item : item})
    const rr = await snacks.deleteOne({ item:tt })//.then(()=>{console.log("deleted succ")})


    // ({item: item});
    //(snackToDelete)
    //console.log(rr);
    res.json({ status: "deleted" })
}

module.exports = { viewSnacks, createSnack, changeSnack, deleteSnack };