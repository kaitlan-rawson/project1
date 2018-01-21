let locations = [];
let id = 0;

module.exports = {

    get: (req,res)=>{
        res.status(200).send('Get working')
    
    }

    post: (req,res)=>{
        id++
        let newLoc ={
            id: id,
            pic: req.body.pic
        }
        res.status.(200).send('Post working')
    }
}