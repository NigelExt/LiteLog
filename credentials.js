function passWord() {
var testV = 1;
var pass1 = prompt('Enter License Key','');
while (testV < 3) {
if (!pass1) history.go(-1);
if (pass1.toLowerCase() == "7y4nyx0hzzijrs4i7gq8nr%qh3o689i2dxu2zsc62pzii$qmm5b") { alert('License Key Authenticated successfully!'); window.open('app.html'); break; }

testV+=1;
var pass1 =
prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3) history.go(-1); return " ";

}