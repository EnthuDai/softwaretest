package cn.edu.jit.controller;

import cn.edu.jit.po.Test;
import cn.edu.jit.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by dxy on 2017/7/7.
 */
@Controller
public class TestController {

    @Autowired
    TestService testService;


    @RequestMapping("/test")
    public @ResponseBody Test test(int id){
        System.out.println(id);
        return testService.selectById(id);
    }
}
