package cn.edu.jit.mapper;

import cn.edu.jit.po.Submission;

public interface SubmissionMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table submission
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table submission
     *
     * @mbggenerated
     */
    int insert(Submission record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table submission
     *
     * @mbggenerated
     */
    int insertSelective(Submission record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table submission
     *
     * @mbggenerated
     */
    Submission selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table submission
     *
     * @mbggenerated
     */
    int updateByPrimaryKeySelective(Submission record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table submission
     *
     * @mbggenerated
     */
    int updateByPrimaryKey(Submission record);
}