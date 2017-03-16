
$(function(){
	var ok1=false;
	var ok2=false;
	var ok3=false;
	var ok4=false;
	var ok5=false;
// localStorage.clear();
console.log(localStorage);
	$("#btn").click(function(){
		console.log("aaa");
		if(!(ok1 && ok2 && ok3 && ok4 && ok5)){
			alert("请按要求输入");
			return;
		}
		var count=localStorage.count;
		if(!count){
			count=1;
		}else{
			count++;
		}
		localStorage.setItem("tel"+count,$("#tel").val());
		localStorage.setItem("password"+count,$("#password").val());
		localStorage.setItem("email"+count,$("#email").val());
		localStorage.setItem("count",count);
		$("#btn").val("正在提交中...");
		setTimeout(function(){
			$("#doForm").submit();
		}, 3000);
		
		// $("#doForm").submit();
		// location.href="enter.html";
	});

//验证手机号码
	$("#tel").blur(function(){
		var reg=/^1[\d]{10}$/;
		var tel=$("#tel").val();
		var count=localStorage.count;
		
		for(var i=0;i<=count;i++){
			var tele=localStorage.getItem("tel"+i);
			if(tele==$("#tel").val()){
				$("#telError").css("display","inline-block");
				$("#telError").text("手机号已存在");
				ok1=false;
				return;
			}
		}
		if(reg.test(tel)){
			$("#telInfo1").css("display","inline-block");
			$("#telInfo2").hide();
			$("#telError").hide();
			$("#tel").removeClass("error1").addClass("ok1");
			ok1=true;
		}else{
			$("#telInfo2").css("display","inline-block");
			$("#telInfo1").hide();
			$("#telError").css("display","inline-block");
			$("#tel").addClass("error1");
			ok1=false;
			$("#telInfo2").click(function(){
			$("#tel").val("");
		});
		}
	});

// 验证密码
	$("#password").blur(function(){
		var reg=/^[a-zA-Z$][\w$-]{4,12}[a-zA-Z$]$/;
		var password=$("#password").val();
		if(reg.test(password)){
			$("#passwordInfo1").css("display","inline-block");
			$("#passwordInfo2").hide();
			$("#passwordError").hide();
			$("#password").removeClass("error1").addClass("ok1");
			ok2=true;
		}else{
			$("#passwordInfo2").css("display","inline-block");
			$("#passwordInfo1").hide();
			$("#passwordError").css("display","inline-block");
			$("#password").addClass("error1");
			ok2=false;
			$(".error").click(function(){
				$("#password").val("");
			});
		}
	});

// 两次密码是否一致
	$("#repassword").blur(function(){
		var password=$("#password").val();
		var repassword=$("#repassword").val();
		if(password==repassword){
			$("#repasswordInfo1").css("display","inline-block");
			$("#repasswordInfo2").hide();
			$("#repasswordError").hide();
			$("#repassword").removeClass("error1").addClass("ok1");
			ok3=true;
		}else{
			$("#repasswordInfo2").css("display","inline-block");
			$("#repasswordInfo1").hide();
			$("#repasswordError").css("display","inline-block");
			$("#repassword").addClass("error1");
			ok3=false;
			$(".error").click(function(){
				$("#repassword").val("");
			});
		}
	});

//验证邮箱
	$("#email").blur(function(){
		var reg=reg=/^\w+@\w+(\.[a-z]{2,3}){1,2}$/i;
		var email=$("#email").val();
		if(reg.test(email)){
			$("#emailInfo1").css("display","inline-block");
			$("#emailInfo2").hide();
			$("#emailError").hide();
			$("#email").removeClass("error1").addClass("ok1");
			ok4=true;
		}else{
			$("#emailInfo2").css("display","inline-block");
			$("#emailInfo1").hide();
			$("#emailError").css("display","inline-block");
			$("#email").addClass("error1");
			ok4=false;
			$(".error").click(function(){
				$("#email").val("");
			});		
		}
	});


	// 验证码验证
	$("#code").blur(function(){
		var str="nodick";
		if($(this).val().toLowerCase()==str){
			$("#codeInfo1").css("display","inline-block");
			$("#codeInfo2").hide();
			$("#codeError").hide();
			$("#code").removeClass("error1").addClass("ok1");
			ok5=true;
		}else{
			$("#codeInfo2").css("display","inline-block");
			$("#codeInfo1").hide();
			$("#codeError").css("display","inline-block");
			$("#code").addClass("error1");
			ok5=false;
			$(".error").click(function(){
				$("#code").val("");
			});		
		}
	});


	// 我同意
	$("input[type=checkbox]").click(function(){
		if($("input[type=checkbox]").prop("checked")){
			$("#btn").prop("disabled",false);
			$("#btn").css("background-color","#ff9000");		
		}else{
			$("#btn").prop("disabled",true);
			$("#btn").css("background-color","#ccc");
		}
	});


// success页面
	var count=localStorage.count;
	$("#username").text(localStorage.getItem("tel"+count));
	
	$("#enter").click(function(){
		$(".bg").show();
		$(".aler").show();	

	});
	$(".bg").click(function(){
		$(".bg").hide();
		$(".aler").hide();	
	});

	$(".aler ul li:first-child").addClass("on");
	$(".aler_left").show();
	$(".aler ul li").each(function(index){
		$(this).click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".aler .wrap div").hide().eq(index).show();
		});
	});

	
	$("#aler_btn1").click(function(){
		var count=localStorage.count;
		for(var i=1;i<=count;i++){
			var tel=localStorage.getItem("tel"+i);
			var password=localStorage.getItem("password"+i);
			if(($(".aler_left #phone").val()==tel)&&($(".aler_left #pwd").val()==password)){
				console.log("aaa");
				$("#doform3").submit();
				return;
			}
		}
		$(".aler .aler_left form .error2").show();
		
	});


});







