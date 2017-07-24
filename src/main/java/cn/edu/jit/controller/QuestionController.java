package cn.edu.jit.controller;

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
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("question")
public class QuestionController {

    @Autowired
    QuestionService questionService;

    @RequestMapping("rqts.do")
    public @ResponseBody  Map rqts(String data, HttpSession session){
        Map map = questionService.rqtsAnalyse(data);
        int count = (int)map.get(AnalyseDate.FG);
        int score = count*100/AnalyseDate.ALL;
        Student user = (Student)session.getAttribute("student");
        System.out.println(user.getId());
        questionService.rqtsSave((List<RqtsSubmission>) map.get(AnalyseDate.RQTS_DATE),user.getId(),score);
        return map;
    }
}
