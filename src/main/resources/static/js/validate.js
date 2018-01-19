$(document).ready(function() {
    function getLen($id) {
        var myValue = $('#' + $id).val();
        return len = myValue.length;
    }

    $(".help-block").hide();
    //手机号码验证(+)
    $("#phone").focus(function () {
        var len = getLen('phone');
        // var len=getLen(phone);
        // alert(len);
        if (len == 0) {
            $("#phone_error").hide();
            $("#phone_null").show();
            $("#telephone").addClass("has-error");
        }
        $("#phone").keyup(function () {
            var value = $("#phone").val();
            var len = getLen('phone');
            var pattern = /^1[34578]\d{9}$/;
            if (len !== 0) {
                $("#phone_null").hide();
                {
                    if (!pattern.test(value)) {
                        $("#phone_error").show();
                        $("#telephone").addClass("has-error");
                    }
                    if (pattern.test(value)) {
                        $("#telephone").removeClass("has-error");
                        $("#phone_error").hide();
                        $("#telephone").addClass("has-success");
                    }
                }
            }
            if (len === 0) {
                $("#phone_error").hide();
                $("#phone_null").show();
                $("#telephone").addClass("has-error");
            }
        });
    });
    //昵称验证
    $("#username").focus(function () {
        var len = getLen('username');
        if (len == 0) {
            $("#username_error").hide();
            $("#username_null").show();
            $("#name").addClass("has-error");
        }
        $("#username").keyup(function () {
            var value = $("#username").val();
            var len = getLen('username');
            var pattern = /([A-Za-z0-9]{2,20})|([\u4e00-\u9fa5]{2,10})|([\u4e00-\u9fa5][\w\W]{2})/;
            if (len !== 0) {
                $("#username_null").hide();
                {
                    if (!pattern.test(value)) {
                        $("#username_error").show();
                        $("#name").addClass("has-error");
                    }
                    if (pattern.test(value)) {
                        $("#name").removeClass("has-error");
                        $("#username_error").hide();
                        $("#name").addClass("has-success");
                    }
                }
            }
            if (len === 0) {
                $("#username_error").hide();
                $("#username_null").show();
                $("#name").addClass("has-error");
            }
        });

    });
    //密码验证
    $("#password1").focus(function () {
        var len = getLen('password1');
        if (len == 0) {
            $("#psw1_error").hide();
            $("#psw1_null").show();
            $("#psw1").addClass("has-error");
        }
        $("#password1").keyup(function () {
            var value = $("#password1").val();
            var len = getLen('password1');
            var pattern = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
            if (len !== 0) {
                $("#psw1_null").hide();
                {
                    if (!pattern.test(value)) {
                        $("#psw1_error").show();
                        $("#psw1").addClass("has-error");
                    }
                    if (pattern.test(value)) {
                        $("#psw1").removeClass("has-error");
                        $("#psw1_error").hide();
                        $("#psw1").addClass("has-success");
                    }
                }
            }
            if (len === 0) {
                $("#psw1_error").hide();
                $("#psw1_null").show();
                $("#psw1").addClass("has-error");
            }
        });

    });
    //确认密码验证
    $("#password2").focus(function () {
        var len = getLen('password2');
        if (len == 0) {
            $("#psw2_error").hide();
            $("#psw2_null").show();
            $("#psw2").addClass("has-error");
        }
        $("#password2").keyup(function () {
            var value = $("#password2").val();
            var value_first = $("#password1").val();
            var len = getLen('password2');
            if (len !== 0) {
                $("#psw2_null").hide();
                {
                    if (value !== value_first) {
                        $("#psw2_error").show();
                        $("#psw2").addClass("has-error");
                    }
                    if (value === value_first) {
                        $("#psw2").removeClass("has-error");
                        $("#psw2_error").hide();
                        $("#psw2").addClass("has-success");
                    }
                }
            }
            if (len === 0) {
                $("#psw2_error").hide();
                $("#psw2_null").show();
                $("#psw2").addClass("has-error");
            }
        });

    });
    //图片验证码验证
    $("#image_code").focus(function () {
        var len = getLen('image_code');
        if (len == 0) {
            $("#code1_error").hide();
            $("#code1_null").show();
            $("#img_code").addClass("has-error");
        }
        $("#image_code").keyup(function () {
            var value = $("#image_code").val();

            var len = getLen('image_code');
            if (len !== 0) {
                $("#code1_null").hide();
                {
                    $.ajax({
                        type: "POST",
                        url: "/",
                        dataType: 'json',
                        data: {
                            "image_code": $("#image_code").val()
                        },
                        success: function (data) {
                            if (data == 0) {
                                $("#code1_error").show();
                                $("#img_code").addClass("has-error");
                            }
                            if (data == 1) {
                                $("#img_code").removeClass("has-error");
                                $("#code1_error").hide();
                                $("#img_code").addClass("has-success");
                            }
                        }
                    })
                }
            }
            if (len === 0) {
                $("#code1_error").hide();
                $("#code1_null").show();
                $("#img_code").addClass("has-error");
            }
        });
    });
    //短信验证码验证(+)
    $("#message_code").focus(function () {
        var len = getLen('image_code');
        if (len == 0) {
            $("#code2_error").hide();
            $("#code2_null").show();
            $("#msg_code").addClass("has-error");
        }
        $("#message_code").keyup(function () {
            var value = $("#message_code").val();
            var value_code1 = '1234';
            var len = getLen('message_code');
            if (len !== 0) {
                $("#code2_null").hide();
                {

                    $.ajax({
                        type: "POST",
                        url: "/",
                        dataType: 'json',
                        data: {
                            "message_code": $("#message_code").val()
                        },
                        success: function (data) {
                            if (data == 0) {
                                $("#code2_error").show();
                                $("#msg_code").addClass("has-error");
                            }
                            if (data == 1) {
                                $("#msg_code").removeClass("has-error");
                                $("#code2_error").hide();
                                $("#msg_code").addClass("has-success");
                            }
                        }
                    })
                }
            }
            if (len === 0) {
                $("#code2_error").hide();
                $("#code2_null").show();
                $("#msg_code").addClass("has-error");
            }
        });

    });
    //账号用户名验证(+)
    $("#account").focus(function () {
        var len = getLen('account');
        if (len == 0) {
            $("#account_null").show();
            $("#account_login").addClass("has-error");
        }
        $("#account").keyup(function () {
            var len = getLen('account');
            var value = $("#account").val();
            if (len !== 0) {
                $("#account_null").hide();
                {
                    //未找到该用户
                    $.ajax({
                        type: "POST",
                        url: "/",
                        dataType: 'json',
                        data: {
                            "account": $("#account").val()
                        },
                        success: function (data) {
                            if (data == 0) {
                                $("#account_error").show();
                                $("#account_login").addClass("has-error");
                            }
                            if (data == 1) {
                                $("#account_login").removeClass("has-error");
                                $("#account_error").hide();
                                $("#account_login").addClass("has-success");
                            }
                        }
                    })
                }
            }
            if (len === 0) {
                $("#account_error").hide();
                $("#account_null").show();
                $("#account_login").addClass("has-error");
            }
        });
    });
    //密码验证(+)
    $("#password3").focus(function () {
        var len = getLen('password3');
        if (len == 0) {
            $("#psw3_null").show();
            $("#password_login").addClass("has-error");
        }
        $("#password3").keyup(function () {
            var len = getLen('password3');
            var value = $("#password3").val();
            if (len !== 0) {
                $("#psw3_null").hide();
                {
                    //密码不匹配！
                    $.ajax({
                        type: "POST",
                        url: "/",
                        dataType: 'json',
                        data: {
                            "password3": $("#password3").val()
                        },
                        success: function (data) {
                            if (data == 0) {
                                $("#psw3_error").show();
                                $("#password_login").addClass("has-error");
                            }
                            if (data == 1) {
                                $("#password_login").removeClass("has-error");
                                $("#code2_error").hide();
                                $("#password_login").addClass("has-success");
                            }
                        }
                    })
                }
            }
            if (len === 0) {
                $("#psw3_error").hide();
                $("#psw3_null").show();
                $("#password_login").addClass("has-error");
            }
        });
    });
    $('.btn1').on('click', function () {
        if ($("#register_form.form-group").hasClass("has-error")) {
            alert("请正确填写信息!");
        }
        else{
            $.ajax({
                type:"POST",
                dataType:"json",
                url:"/doRegister",
                data:{
                    "phone":$('#phone').val(),
                    // "image_code":$('#image_code').val(),
                    "message_code":$('#message_code').val()
                },
                success:function (data) {
                    if(data == 0){
                        alert('注册成功！请登录！');
                        // $('#mySign').modal('hide');
                        // $('#myLogin').modal('show');
                    }
                    else if(data == 1) {
                        alert('验证码错误！')
                    }else{
                        alert('该用户已存在！')
                    }
                },
                error:function () {
                    alert('注册失败！请重试')
                }
            })
        }
    });
    $('.btn2').on('click', function () {
        if ($("#register_form.form-group").hasClass("has-error")) {
            alert("请正确填写信息!");

        }
        else{
            $.ajax({
                type:"POST",
                url:"/doLogin",
                dataType:'json',
                data:{
                    "account":$('#account').val(),
                    "password3":$('#password3').val()
                },
                success:function (data) {
                    if(data == 0){
                        alert("登录成功！");
                    }
                    else if(data==1){
                        alert("账号和密码不匹配！");
                    }
                    else{
                        alert("账号不存在，请先注册！");
                    }
                },
                error:function(){
                    alert("登录失败，请重试！");
                }
            })
        }
    });
});
