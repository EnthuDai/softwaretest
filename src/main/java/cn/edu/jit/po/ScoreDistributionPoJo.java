package cn.edu.jit.po;

public class ScoreDistributionPoJo {
    String score;
    int count;
    float proportion;

    public ScoreDistributionPoJo() {
    }

    public ScoreDistributionPoJo(String score, int count, float proportion) {
        this.score = score;
        this.count = count;
        this.proportion = proportion;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public float getProportion() {
        return proportion;
    }

    public void setProportion(float proportion) {
        this.proportion = proportion;
    }
}
