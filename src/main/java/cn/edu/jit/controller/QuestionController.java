package cn.edu.jit.controller;

import cn.edu.jit.po.ChangeSubmission;
import cn.edu.jit.po.RqtsSubmission;
import cn.edu.jit.po.Student;
import cn.edu.jit.service.QuestionService;
import cn.edu.jit.util.AnalyseDate;
import cn.edu.jit.util.ExtSimpleResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("question")
public class QuestionController {

    @Autowired
    QuestionService questionService;

    @RequestMapping("rqts.do")
    public @ResponseBody  Map rqts(String data, HttpSession session){
        if(session==null||session.getAttribute("student")==null) {
            Map map = new HashMap();
            map.put("success",false);
            return map;
        }
        Student user = (Student)session.getAttribute("student");
        Map map = questionService.rqtsAnalyse(data);
        int count = (int)map.get(AnalyseDate.FG);
        float score = count*100/(float)AnalyseDate.ALL;
        System.out.println(user.getId());
        questionService.rqtsSave((List<RqtsSubmission>) map.get(AnalyseDate.RQTS_DATE),user.getId(),(int)score);
        map.put("score",(int)score);
        map.put("success",true);
        return map;
    }

    @RequestMapping("zlq.do")
    public @ResponseBody Map zlq(String data, HttpSession session){
        if(session==null||session.getAttribute("student")==null) {
            Map map = new HashMap();
            map.put("success",false);
            return map;
        }
        Student user = (Student)session.getAttribute("student");
        Map map = questionService.zlqAnalyse(data);

        questionService.changeSave((List<ChangeSubmission>)map.get("data"),user.getId(),(int)map.get("score"));
        map.put("success",true);
        return map;
    }
}
