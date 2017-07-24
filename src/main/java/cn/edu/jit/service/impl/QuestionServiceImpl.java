package cn.edu.jit.service.impl;

import cn.edu.jit.mapper.RqtsSubmissionMapper;
import cn.edu.jit.mapper.SubmissionMapper;
import cn.edu.jit.po.RqtsSubmission;
import cn.edu.jit.po.Submission;
import cn.edu.jit.service.QuestionService;
import cn.edu.jit.util.AnalyseDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class QuestionServiceImpl implements QuestionService {

    public static final int RQTS = 1;

    @Autowired
    SubmissionMapper submissionMapper;

    @Autowired
    RqtsSubmissionMapper rqtsSubmissionMapper;

    @Override
    public Map rqtsAnalyse(String data) {
        AnalyseDate ad  = new AnalyseDate(data);
        Map map = ad.getAnalyseResult();
        return map;
    }

    @Override
    public void rqtsSave(List<RqtsSubmission> list,String studentId,int score) {
        Submission submission = new Submission();
        submission.setQuestionId(RQTS);
        submission.setStudentId(studentId);
        submission.setScore(score);
        submission.setSubmitTime(new Date(System.currentTimeMillis()));
        submissionMapper.insert(submission);

        for (RqtsSubmission item:list) {
            item.setSubmissionId(submission.getId());
            rqtsSubmissionMapper.insert(item);
        }
    }
}
