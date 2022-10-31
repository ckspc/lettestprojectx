const TestUser = require('../model/TestModel')

exports.createUser = (req, res) => {
  const { username, password, name, surname } = req.body;
  TestUser.create( { username, password, name, surname } ,(err,testuser)=>{
    if(err){
      res.json(400).json({error:err})
    }else{
      res.json(200).json({message:"add user complete"})
    }
  })
};
