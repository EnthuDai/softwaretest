package cn.edu.jit.po;

public class ChangeSubmission {

    public ChangeSubmission(Integer price, Integer payment) {
        this.price = price;
        this.payment = payment;
    }
    public ChangeSubmission(){

    }

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column change_submission.id
     *
     * @mbggenerated
     */
    private Integer id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column change_submission.submission_id
     *
     * @mbggenerated
     */
    private Integer submissionId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column change_submission.price
     *
     * @mbggenerated
     */
    private Integer price;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column change_submission.payment
     *
     * @mbggenerated
     */
    private Integer payment;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column change_submission.id
     *
     * @return the value of change_submission.id
     *
     * @mbggenerated
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column change_submission.id
     *
     * @param id the value for change_submission.id
     *
     * @mbggenerated
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column change_submission.submission_id
     *
     * @return the value of change_submission.submission_id
     *
     * @mbggenerated
     */
    public Integer getSubmissionId() {
        return submissionId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column change_submission.submission_id
     *
     * @param submissionId the value for change_submission.submission_id
     *
     * @mbggenerated
     */
    public void setSubmissionId(Integer submissionId) {
        this.submissionId = submissionId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column change_submission.price
     *
     * @return the value of change_submission.price
     *
     * @mbggenerated
     */
    public Integer getPrice() {
        return price;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column change_submission.price
     *
     * @param price the value for change_submission.price
     *
     * @mbggenerated
     */
    public void setPrice(Integer price) {
        this.price = price;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column change_submission.payment
     *
     * @return the value of change_submission.payment
     *
     * @mbggenerated
     */
    public Integer getPayment() {
        return payment;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column change_submission.payment
     *
     * @param payment the value for change_submission.payment
     *
     * @mbggenerated
     */
    public void setPayment(Integer payment) {
        this.payment = payment;
    }

    public String toString(){
        return "price:"+this.price+" ,payment:"+this.payment;
    }
}