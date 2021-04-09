import User from '../models/users.model'
import jwt from 'jsonwebtoken'
import CONFIG from '../../config';



export default class { 

    test(req, res){
		// console.log("this is it");
		res.send(req.body)
	}

	async create(req, res){
		console.log(req.body)
		const name = req.body.name,
			  email = req.body.email,
			  password = (req.body.password).trim();
		if(name!=='' && email!=='' && password!==''){
			 const exits = await User.findOne({$or: [
			  {email}, {name}
			 ]})
			 if(exits){
				 let errorMsg = " already exits";
				 if(exits.name==name){
				 errorMsg = "username "+exits.name+errorMsg
				 }else{
				 errorMsg = "email "+exits.email+errorMsg
				 }
				 return res.status(401).send({
					 error: errorMsg
				 })
			 }
			 try{
			  const user = new User({name, email, password}),
					result = await user.save();
			  //CREATE JWT TOKEN
			  const jwtToken =jwt.sign({data: result}, CONFIG.JWT_SECRET, { expiresIn: 24*60*60 });
			  console.log(jwtToken);
			  return res.status(200).send({
					  data: result,
					  token: jwtToken
			  })
			 }catch(e){
				  return res.status(401).send({
					   error: e
				  })
			 }
		}else{
			 return res.status(401).send({
			  error: `please enter all the required fields`
			 })
		}
	}
}

