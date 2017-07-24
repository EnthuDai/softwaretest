package cn.edu.jit.service;

import cn.edu.jit.po.RqtsSubmission;

import java.util.List;
import java.util.Map;

public interface QuestionService {

    public Map rqtsAnalyse(String data);

    public void rqtsSave(List<RqtsSubmission> list,String userId,int score);

}
