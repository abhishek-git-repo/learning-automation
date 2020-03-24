export class AccountCreation{
  constructor(){}
createAccount(){
let jsforce=require('jsforce');
let conn = new jsforce.Connection({

  loginUrl : 'https://login.salesforce.com/'
});
let username='vertika96@metacube.com';
let password='Salesforce@1996';
//let securityToken='mfF9HKviYRimydJ0ISPLSVx6';

conn.login(username, password, function(err, userInfo) {
if (err) {
    return console.error(err);
 }
conn.sobject("Account").create({ Name : 'My Account' }, function(err, ret) {
   
    if (err || !ret.success) { return console.error(err, ret); }
    console.log("Created record id : " + ret.id);   
  });
  

});

}
}
   