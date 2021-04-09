export default {
   env : process.env.NODE_ENV || 'development',
   port : process.env.PORT || 3000,
   API_URL: "http://localhost:3000",
   MONGO_URI: "mongodb+srv://form19:form19lovesit@cluster0.ilhg1.mongodb.net/form19?retryWrites=true&w=majority",
   JWT_SECRET: "mysecret",
   DB:{
      DEFAULT_COUNT : 0,
      DEFAULT_CONTENT_TYPE : 1,  //1-images 2- videos
      DEFAULT_TRUE: true,
      DEFAULT_FALSE: false,
      DEFAULT_ACCOUNT_TYPE: 0, // -1 - ADMIN SIDE  0 - Normal , 1- Google, 2- Facebook
      GENDER:{
         MALE : 1,
         FEMALE: 2,
         OTHER: 3
      },
      BADGETS: {
         NOOBIE: 1,
         PRO: 2 
      },
      CRAWLED_TYPE : {
         DEFAULT : 0,
         FB : 1,
         GAG: 2
      },
      AGE_GROUP:{
         ONE : 1, //18 - 20
         TWO : 2, //20 - 30
         THREE : 3, //30 - 40
         FOUR : 4, //40 - 50+
      }
   }
}

