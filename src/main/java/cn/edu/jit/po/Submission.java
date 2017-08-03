package cn.edu.jit.po;

import java.util.Date;

public class Submission {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column submission.id
     *
     * @mbggenerated
     */
    private Integer id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column submission.student_id
     *
     * @mbggenerated
     */
    private String studentId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column submission.question_id
     *
     * @mbggenerated
     */
    private Integer questionId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column submission.score
     *
     * @mbggenerated
     */
    private Integer score;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column submission.submit_time
     *
     * @mbggenerated
     */
    private Date submitTime;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column submission.id
     *
     * @return the value of submission.id
     *
     * @mbggenerated
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column submission.id
     *
     * @param id the value for submission.id
     *
     * @mbggenerated
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column submission.student_id
     *
     * @return the value of submission.student_id
     *
     * @mbggenerated
     */
    public String getStudentId() {
        return studentId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column submission.student_id
     *
     * @param studentId the value for submission.student_id
     *
     * @mbggenerated
     */
    public void setStudentId(String studentId) {
        this.studentId = studentId == null ? null : studentId.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column submission.question_id
     *
     * @return the value of submission.question_id
     *
     * @mbggenerated
     */
    public Integer getQuestionId() {
        return questionId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column submission.question_id
     *
     * @param questionId the value for submission.question_id
     *
     * @mbggenerated
     */
    public void setQuestionId(Integer questionId) {
        this.questionId = questionId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column submission.score
     *
     * @return the value of submission.score
     *
     * @mbggenerated
     */
    public Integer getScore() {
        return score;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column submission.score
     *
     * @param score the value for submission.score
     *
     * @mbggenerated
     */
    public void setScore(Integer score) {
        this.score = score;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column submission.submit_time
     *
     * @return the value of submission.submit_time
     *
     * @mbggenerated
     */
    public Date getSubmitTime() {
        return submitTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column submission.submit_time
     *
     * @param submitTime the value for submission.submit_time
     *
     * @mbggenerated
     */
    public void setSubmitTime(Date submitTime) {
        this.submitTime = submitTime;
    }
}