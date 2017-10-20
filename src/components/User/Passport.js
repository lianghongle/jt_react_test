
export default class Passport
{
     constructor()
     {
         this.islogin=false;//是否登录
     }

     //typescript
     login(uname, upass, callback)
     {
         if(uname === "123" && upass === "123") //如果登录成功
         {
             this.islogin = true;
             callback();
         }
         else
         {
             alert("登录失败");
         }
     }
}