package cn.edu.jit.po;

public class ClassesPoJo extends Classes {
    public int count;

    public ClassesPoJo(Classes classes){
        this.setId(classes.getId());
        this.setMajor(classes.getMajor());
        this.setName(classes.getName());
        this.setSession(classes.getSession());
    }

    public ClassesPoJo(Classes classes,int count){
        this.setId(classes.getId());
        this.setSession(classes.getSession());
        this.setMajor(classes.getMajor());
        this.setName(classes.getName());
        this.setCount(count);
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
