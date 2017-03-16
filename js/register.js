$(function(){
	var count=localStorage.count;
	// console.log(count);
	$(".content_left p span").text(localStorage.getItem("tel"+count));

	// 产生随机数
	$("#txt").text(generateRandomCode());

	// 点击等待30秒
	$("#btn3").click(function(){
		$("#txt").text(generateRandomCode());
	});

	// 验证收到的验证码是否正确
	$("#btn2").click(function(){
		if($("#txt").text()!=$("#mytxt").val()){
			$("#txt").text(generateRandomCode());
			return;
		}else{
			$("#btn2").val("正在提交中...");
			setTimeout(function(){
			location="success.html";
			}, 3000);	
		}
	});


	$("#btn3").click(function(){
		num=5;
		$("#btn3 span").text(num+"秒");
		timer=setInterval(countDown, 1000);
	});
	function countDown(){
		num--;
		$("#btn3").prop("disabled",true);
		if(num>0){
			$("#btn3 span").text(num+"秒");
		}else if(num==0){
			$("#btn3 span").text("");
			$("#btn3").prop("disabled",false);
			clearInterval(timer);
		}else{
			return;
		}
	}


});
function generateRandomCode(){
	str=""
	for(var i=1;i<=4;i++){
		var n=parseInt(Math.random(i)*10);
		str+=n;
	}
		return str;
}