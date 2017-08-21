package cn.edu.jit.controller;

import cn.edu.jit.po.*;
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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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
    @RequestMapping("getInfo.do")
    public @ResponseBody StudentPoJo getInfo(String studentId){
        return studentService.getById(studentId);
    }

    @RequestMapping("changePassword.do")
    public @ResponseBody ExtSimpleResponse changePassword(String studentId,String oldPassword,String newPassword){
        Student s = studentService.checkStudentLogin(studentId,oldPassword);
        if(s!=null){
            s.setPassword(newPassword);
            studentService.updateByPrimaryKeySelective(s);
            return new ExtSimpleResponse(true);
        }else{
            return new ExtSimpleResponse(false);
        }
    }

    @RequestMapping("getScoreById.do")
    public @ResponseBody Integer getScoreById(String studentId,int questionId){
        StudentMaxScoreView s = studentService.getScoreByStudentId(studentId,questionId);
        return s==null ? 0:s.getScore();
    }

    @RequestMapping("getSubmission.do")
    public @ResponseBody Grid getSubmission(String studentId,Page page){
        Grid grid = new Grid();
        grid.setData(studentService.getSubmissionByStudentId(studentId,page));
        grid.setTotal(studentService.getSubmissionByStudentIdCount(studentId));
        return grid;
    }

    @RequestMapping("getScoreDistribution.do")
    public @ResponseBody
    Grid getScoreDistribution(int classId, int questionId){
        ScoreDistribution scoreDistribution = studentService.getScoreDistribution(classId, questionId);
        List<ScoreDistributionPoJo> list = new ArrayList<>();
        float count = scoreDistribution.getFcount();
        list.add(new ScoreDistributionPoJo("60分以下",scoreDistribution.getAcount(),100*scoreDistribution.getAcount()/count));
        list.add(new ScoreDistributionPoJo("60分-70分",scoreDistribution.getBcount(),100*scoreDistribution.getBcount()/count));
        list.add(new ScoreDistributionPoJo("70分-80分",scoreDistribution.getCcount(),100*scoreDistribution.getCcount()/count));
        list.add(new ScoreDistributionPoJo("80分-90分",scoreDistribution.getDcount(),100*scoreDistribution.getDcount()/count));
        list.add(new ScoreDistributionPoJo("90分-100分",scoreDistribution.getEcount(),100*scoreDistribution.getEcount()/count));
        return new Grid(list);
    }

}
