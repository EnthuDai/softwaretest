package cn.edu.jit.mapper;

import cn.edu.jit.po.SubmissionQuestionView;

import java.util.List;
import java.util.Map;

public interface SubmissionQuestionViewMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table submission_question_view
     *
     * @mbggenerated
     */
    int insert(SubmissionQuestionView record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table submission_question_view
     *
     * @mbggenerated
     */
    int insertSelective(SubmissionQuestionView record);

    public List selectSubmissionByStudentId(Map map);

    int selectSubmissionByStudentIdCount(String studentId);
}