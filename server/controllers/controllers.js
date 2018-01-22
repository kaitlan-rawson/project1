let locations = [{
    location: 'https://pixabay.com/get/eb32b40a21f4093ed95c4518b74b4190e276ead104b0144093f6c270a5e8b4_640.jpg',
    id: 0,
    traveled: false,
}];
let id = 0;

module.exports = {

    get: (req,res)=>{

        res.status(200).send(locations)
    
    },

    post: (req,res)=>{
    id++
    var Obj= {
        id: id,
        location: req.body.location,
        traveled: req.body.traveled
    }
    locations.push(Obj)
    res.status(200).send('Post working')
    }

// delete: (req,res)=>{
//     res.status(200).send('Deleted')
// }

// update: (req,res)=>{
        // res.status(200).send('Updated')
// }
}
