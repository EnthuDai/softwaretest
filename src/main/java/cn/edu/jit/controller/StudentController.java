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
 *
 * Created by dxy on 2017/7/11.
 */
@Controller
public class StudentController {

    @Resource(name = "studentServiceImpl")
    StudentService studentService;

    @RequestMapping("student/login.do")
    public @ResponseBody ExtSimpleResponse studentLogin(String id , String password, HttpSession session){
        Student student = studentService.checkStudentLogin(id,password);
        if(student != null) {
            session.setAttribute("student", student);
            return new ExtSimpleResponse(true);
        } else{
            return new ExtSimpleResponse(false);
        }
    }

    @RequestMapping("student/logout.do")
    public @ResponseBody ExtSimpleResponse studentLogout(HttpSession session){
        try {
            session.removeAttribute("student");
            return new ExtSimpleResponse(true);
        }catch (Exception e){
            return new ExtSimpleResponse(false);
        }
    }

    @RequestMapping("student/isLogin.do")
    public @ResponseBody String isLogin(HttpSession session){
        Object stu =  session.getAttribute("student");
        if(stu==null)
            return null;
        else
            return ((Student)stu).getId();
    }
}
