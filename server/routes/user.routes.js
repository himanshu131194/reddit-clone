import userController from '../controllers/user.controller'

let userObj = new userController();

export default (router)=>{

    router.post('/users', userObj.create);

    // router.post('/social-login', userController.loginWithSocial);
    
    // router.get('/users/:id', userController.authenticate, userController.list);

    // router.get('/users', userController.authenticate, userController.list);

    // router.post('/validate', userController.authenticate, userController.validate);

    // router.post('/login', userController.login);

    // router.get('/logout', userController.logout);

    return router;
}
