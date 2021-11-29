auto.waitFor();

var { password } = hamibot.env;
var { select } = hamibot.env;

function scroll() {
    if (select == 'a') {
        swipe(500, 1700, 500, 300, 10);
    } else {
        swipe(500, 300, 500, 1700, 10);
    }
}

function findAndClick(num) {
    var number = text(num).findOne().bounds();
    return click(number.centerX(), number.centerY());
}

function input_password() {
    for (var i = 0; i < password.length; i++) {
        switch(password[i]) {
            case '1': findAndClick('1'); break;
            case '2': findAndClick('2'); break;
            case '3': findAndClick('3'); break;
            case '4': findAndClick('4'); break;
            case '5': findAndClick('5'); break;
            case '6': findAndClick('6'); break;
            case '7': findAndClick('7'); break;
            case '8': findAndClick('8'); break;
            case '9': findAndClick('9'); break;
            case '0': findAndClick('0'); break;
            default: toast("密码输入错误");
                exit();
        }
    }
}

function turnOn() {
  while(!device.isScreenOn()) {
  	device.wakeUpIfNeeded();
  	scroll();
  	if(password) {
    	while (!text('1').exists()) 
    	  scroll();
    	input_password();
  	}
	}
}

function backWXHome(){
  while (!text('通讯录').exists()) {
    id('eh').click();
  }
}

function waitFindAndClick(target) {
  text(target).waitFor();
  return findAndClick(target);
}

turnOn();
home();
launchApp("微信");
backWXHome();
waitFindAndClick("通讯录");


while(!text("山东师范大学e校园").exists()) swipe(500, 300, 500, 1700, 10);
waitFindAndClick("山东师范大学e校园");

while(!click("疫情防控")){
	swipe(500, 1700, 500, 300, 10);
};

sleep(5000);

while(!click("提 交")){
  while(!text("提 交").exists()) swipe(500, 1700, 500, 300, 10);
  var finish = findAndClick("提 交");
  if(finish) break;
};

text("提交成功！").waitFor();

back();
back();

text("疫情防控").waitFor();
back();

text("通讯录").waitFor();
back();