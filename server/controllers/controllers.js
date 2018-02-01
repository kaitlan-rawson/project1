let locations = []
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
        traveled: false
    }
    locations.push(Obj)
    res.status(200).send(locations)
    },


    delete: (req,res)=>{
        console.log('id',req.params.id)
        locations = locations.filter((val,index)=>{
            return val.id!=req.params.id
        })
        console.log(locations)
    res.status(200).send('Deleted')
    },

put: (req,res)=>{ 
    locations = locations.map((val)=>{
        console.log(val.id,req.params.id)
        if(val.id == req.params.id){ 
            console.log(true)
            val.traveled = true
        }
        return val
    })
        res.status(200).send(locations)
}
}
