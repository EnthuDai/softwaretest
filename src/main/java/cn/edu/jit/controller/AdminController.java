package cn.edu.jit.controller;

import cn.edu.jit.po.Administrator;
import cn.edu.jit.service.AdministratorService;
import cn.edu.jit.util.ExtSimpleResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("admin")
public class AdminController {

    @Autowired
    AdministratorService administratorService;

    @RequestMapping("login.do")
    public @ResponseBody ExtSimpleResponse login(Administrator ad, HttpSession session){
        if(administratorService.check(ad)){
            session.setAttribute("admin",ad);
            return new ExtSimpleResponse(true);
        }else
            return new ExtSimpleResponse(false);
    }
}
