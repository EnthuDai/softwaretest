package cn.edu.jit.service;

import cn.edu.jit.po.ChangeSubmission;
import cn.edu.jit.po.RqtsSubmission;

import java.util.List;
import java.util.Map;

public interface QuestionService {

    public Map rqtsAnalyse(String data);

    public void rqtsSave(List<RqtsSubmission> list,String userId,int score);

    public Map zlqAnalyse(String data);

    public void changeSave(List<ChangeSubmission> list, String userId, int score);

}
