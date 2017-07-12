package cn.edu.jit.controller;

import cn.edu.jit.po.Student;
import cn.edu.jit.service.StudentService;
import cn.edu.jit.util.ExtSimpleResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

/**
 * Created by dxy on 2017/7/11.
 */
@Controller
public class StudentController {

    @Resource(name = "studentServiceImpl")
    StudentService studentService;

    @RequestMapping(name = "studentLogin.do")
    @ResponseBody
    public ExtSimpleResponse studentLogin(String id , String password, HttpSession session){
        Student student = studentService.checkStudentLogin(id,password);
        if(student != null) {
            session.setAttribute("student", student);
            return new ExtSimpleResponse(true);
        } else{
            return new ExtSimpleResponse(false);
        }
    }

}
