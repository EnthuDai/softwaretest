package cn.edu.jit.mapper;

import cn.edu.jit.po.ChangeSubmission;

public interface ChangeSubmissionMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table change_submission
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table change_submission
     *
     * @mbggenerated
     */
    int insert(ChangeSubmission record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table change_submission
     *
     * @mbggenerated
     */
    int insertSelective(ChangeSubmission record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table change_submission
     *
     * @mbggenerated
     */
    ChangeSubmission selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table change_submission
     *
     * @mbggenerated
     */
    int updateByPrimaryKeySelective(ChangeSubmission record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table change_submission
     *
     * @mbggenerated
     */
    int updateByPrimaryKey(ChangeSubmission record);
}