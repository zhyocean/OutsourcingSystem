package com.zhy.controller.loginandregister.check;

import com.zhy.service.mybatis.UserRegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * @author: zhangocean
 * @Date: Created in 15:08 2018/1/25
 * Describe: 检查登录密码
 */
@Controller
public class CheckLoginPassword {

    @Autowired
    UserRegisterService userRegisterService;

    @PostMapping("/checkLoginPassword")
    public int checkLoginPassword(HttpServletRequest request){

        String phone = request.getParameter("");
        String password = request.getParameter("password3");

        if(userRegisterService.passwordIsRight(phone, password)){
            return 1;
        }
        return 0;
    }


}