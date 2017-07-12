package cn.edu.jit.util;

/**
 * Created by dxy on 2017/7/11.
 */
public class ExtSimpleResponse {

    boolean success;

    public ExtSimpleResponse(boolean success){
        this.success = success;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }
}
