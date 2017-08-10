package cn.edu.jit.controller;

import cn.edu.jit.po.Classes;
import cn.edu.jit.po.Student;
import cn.edu.jit.po.StudentPoJo;
import cn.edu.jit.service.StudentService;
import cn.edu.jit.util.ExtSimpleResponse;
import cn.edu.jit.util.Grid;
import cn.edu.jit.util.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * Created by dxy on 2017/7/11.
 */
@Controller
@RequestMapping("student")
public class StudentController {

    @Resource(name = "studentServiceImpl")
    StudentService studentService;

    @RequestMapping("login.do")
    public @ResponseBody ExtSimpleResponse studentLogin(String id , String password, HttpSession session){
        Student student = studentService.checkStudentLogin(id,password);
        if(student != null) {
            session.setAttribute("student", student);
            return new ExtSimpleResponse(true);
        } else{
            return new ExtSimpleResponse(false);
        }
    }

    @RequestMapping("logout.do")
    public @ResponseBody ExtSimpleResponse studentLogout(HttpSession session){
        try {
            session.removeAttribute("student");
            return new ExtSimpleResponse(true);
        }catch (Exception e){
            return new ExtSimpleResponse(false);
        }
    }

    @RequestMapping("isLogin.do")
    public @ResponseBody String isLogin(HttpSession session){
        Object stu =  session.getAttribute("student");
        if(stu==null)
            return null;
        else
            return ((Student)stu).getId();
    }

    @RequestMapping("selectByClass.do")
    public @ResponseBody Grid selectByClass(Classes classes ,Page page){
        Grid grid = new Grid();
        grid.setTotal(studentService.getPoJoCount(classes));
        grid.setData(studentService.getPoListByClass(classes, page));
        return grid;
    }

    @RequestMapping("create.do")
    public @ResponseBody ExtSimpleResponse create(@RequestBody StudentPoJo pojo ){
        Student s = new Student();
        s.setId(pojo.getStudentId());
        s.setClasses(pojo.getClassId());
        s.setName(pojo.getStudentName());
        return new ExtSimpleResponse(studentService.insertSelective(s));
    }

    @RequestMapping("delete.do")
    public @ResponseBody ExtSimpleResponse delete(@RequestBody StudentPoJo pojo ){
        Student s = new Student();
        s.setId(pojo.getStudentId());
        return new ExtSimpleResponse(studentService.delete(s));
    }
    @RequestMapping("update.do")
    public @ResponseBody ExtSimpleResponse update(@RequestBody StudentPoJo pojo ){
        Student s = new Student();
        s.setId(pojo.getStudentId());
        s.setClasses(pojo.getClassId());
        s.setName(pojo.getStudentName());
        return new ExtSimpleResponse(studentService.updateByPrimaryKeySelective(s));
    }

    @RequestMapping("getScore.do")
    public @ResponseBody Grid getScore(Page page,Integer session,String major,String classId,String className,Integer questionId){
        Map<String ,Object> map = new HashMap<>();
        map.put("start",page.getStart());
        map.put("limit", page.getLimit());
        map.put("major", major);
        map.put("session", session);
        map.put("classId",classId);
        map.put("className",className);
        map.put("questionId",questionId);
        Grid grid = new Grid();
        grid.setData(studentService.getMaxScore(map));
        grid.setTotal(studentService.getMaxScoreCount(map));
        return grid;
    }

}
