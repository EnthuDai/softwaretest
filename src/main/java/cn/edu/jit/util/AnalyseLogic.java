package cn.edu.jit.util;

import cn.edu.jit.po.LogicSubmission;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AnalyseLogic {

    public List<LogicSubmission> statementCoverage;

    public List<LogicSubmission> branchCoverage;

    public List<LogicSubmission> conditionaCoverage;

    public List<LogicSubmission> branchConditionCoverage;

    public List<LogicSubmission> conditionalAssemblyCoverage;

    public List<LogicSubmission> pathCoverage;

    public AnalyseLogic() {
    }

    public AnalyseLogic(String statement, String branch, String condition,
                        String branchCondition, String conditionAssemble, String path){
        this.statementCoverage = parse(statement,1);
        this.branchCoverage = parse(branch,2);
        this.conditionaCoverage = parse(condition,3);
        this.branchConditionCoverage = parse(branchCondition,4);
        this.conditionalAssemblyCoverage  = parse(conditionAssemble,5);
        this.pathCoverage = parse(path,6);
    }

    private List<LogicSubmission> parse(String str, int type){
        List<LogicSubmission> list  = new ArrayList<>();
        String[] split = str.split("[;；]");
        for(String item : split){
            String[] sp = item.split("[,，]");
            try{
                int n1 = Integer.parseInt(sp[0]);
                int n2 = Integer.parseInt(sp[1]);
                list.add(new LogicSubmission(n1,n2,type));
            }catch (Exception e){
                e.printStackTrace();
            }
        }
        return list;
    }


    public boolean[] code = new boolean[6];
    private int statementCoverageAnalyse(int x,int y){
        if(x<1||x>100){
            code[0] = true;
            return -1;
        }
        if(y<1 || y>100){
            code[1] = true;
            return -1;
        }
        int max,min,result=1;
        if(x>=y){
            code[2] = true;
            max = x;
            min = y;
        }else{
            code[3] = true;
            max = y;
            min = x;
        }
        for(int n=1;n<min;n++){
            if(min%n == 0 && max%n==0){
                if(n>result){
                    code[4] = true;
                    result  = n;
                }
            }
        }
        code[5] = true;
        return result;
    }

    public boolean getStatementCoverage(){
        for(LogicSubmission logicSubmission : statementCoverage){
            this.statementCoverageAnalyse(logicSubmission.getX(),logicSubmission.getY());
        }
        for(boolean item : code){
            if(!item)    return false;
        }
        return true;
    }

    private boolean[] branch = new boolean[10];
    public int branchCoverageAnalyse(int x,int y){
        if(x<1||x>100){
            branch[0] = true;
            return -1;
        }else{
            branch[1] = true;
        }
        if(y<1 || y>100){
            branch[2] = true;
            return -1;
        }else{
            branch[3] = true;
        }
        int max,min,result=1;
        if(x>=y){
            branch[4] = true;
            max = x;
            min = y;
        }else{
            branch[5] = true;
            max = y;
            min = x;
        }
        for(int n=1;n<min;n++){
            if(min%n == 0 && max%n==0){
                branch[6] = true;
                if(n>result){
                    branch[8] = true;
                    result  = n;
                }else{
                    branch[9]=true;
                }
            }else {
                branch[7]=true;
            }
        }
        return result;
    }

    public boolean getBranchCoverage(){
        for(LogicSubmission logicSubmission : branchCoverage){
            this.branchCoverageAnalyse(logicSubmission.getX(),logicSubmission.getY());
        }
        for(boolean item : branch){
            if(!item)    return item;
        }
        return true;
    }

    boolean condition[] = new boolean[16];
    private int conditionaCoverageAnalyse(int x,int y){
        if(x<1||x>100){
            if(x<1) condition[0]=true;
            if(x>=1) condition[1]=true;
            if(x>100)   condition[2] =true;
            if(x<=100)   condition[3] =true;
            return -1;
        }else{
            condition[1]=true;
            condition[3] =true;
        }
        if(y<1 || y>100){
            if(y<1) condition[4]=true;
            if(y>=1) condition[5]=true;
            if(y>100)   condition[6] =true;
            if(y<=100)   condition[7] =true;
            return -1;
        }else{
            condition[5]=true;
            condition[7] =true;
        }
        int max,min,result=1;
        if(x>=y){
            condition[8] = true;
            max = x;
            min = y;
        }else{
            condition[9] =true;
            max = y;
            min = x;
        }
        for(int n=1;n<min;n++){
            if(min%n == 0 && max%n==0){
                condition[10] = true;
                condition[12] = true;
                if(n>result){
                    condition[14] = true;
                    result  = n;
                }else{
                    condition[15] = true;
                }
            }else{
                if(min%n==0)    condition[10] = true;
                else    condition[11] = true;
                if(max%n==0) condition[12] = true;
                else    condition[13] = true;
            }
        }
        return result;
    }

    public boolean getConditionaCoverage(){
        for(LogicSubmission logicSubmission : conditionaCoverage){
            this.conditionaCoverageAnalyse(logicSubmission.getX(),logicSubmission.getY());
        }
        for(boolean item : condition){
            if(!item)    return false;
        }
        return true;
    }
    
    boolean[] branchContion = new boolean[26];
    int branchConditionalCoverageAnalyse(int x,int y){
        if(x<1||x>100){
            branchContion[16] = true;
            if(x<1) branchContion[0]=true;
            if(x>=1) branchContion[1]=true;
            if(x>100)   branchContion[2] =true;
            if(x<=100)   branchContion[3] =true;
            return -1;
        }else{
            branchContion[17] = true;
            branchContion[1]=true;
            branchContion[3] =true;
        }
        if(y<1 || y>100){
            branchContion[18] = true;
            if(y<1) branchContion[4]=true;
            if(y>=1) branchContion[5]=true;
            if(y>100)   branchContion[6] =true;
            if(y<=100)   branchContion[7] =true;
            return -1;
        }else{
            branchContion[19] = true;
            branchContion[5]=true;
            branchContion[7] =true;
        }
        int max,min,result=1;
        if(x>=y){
            branchContion[20] = true;
            branchContion[8] = true;
            max = x;
            min = y;
        }else{
            branchContion[21] = true;
            branchContion[9] =true;
            max = y;
            min = x;
        }
        for(int n=1;n<min;n++){
            if(min%n == 0 && max%n==0){
                branchContion[22] = true;
                branchContion[10] = true;
                branchContion[12] = true;
                if(n>result){
                    branchContion[24] = true;
                    branchContion[14] = true;
                    result  = n;
                }else{
                    branchContion[25] = true;
                    branchContion[15] = true;
                }
            }else{
                branchContion[23] = true;
                if(min%n==0)    branchContion[10] = true;
                else    branchContion[11] = true;
                if(max%n==0) branchContion[12] = true;
                else    branchContion[13] = true;
            }
        }
        return result;
    }
    public boolean getBranchConditionalCoverage(){
        for(LogicSubmission logicSubmission : branchConditionCoverage){
            branchConditionalCoverageAnalyse(logicSubmission.getX(),logicSubmission.getY());
        }
        for(boolean item : branchContion){
            if(!item) return false;
        }
        return true;
    }


    boolean conditionalAssemble[] = new boolean[4];
    public int conditionalAssemblyCoverageAnalyse(int x,int y){
        if(x<1||x>100){
            return -1;
        }
        if(y<1 || y>100){
            return -1;
        }
        int max,min,result=1;
        if(x>=y){
            max = x;
            min = y;
        }else{
            max = y;
            min = x;
        }
        for(int n=1;n<min;n++){
            if(min%n == 0 && max%n==0){
                conditionalAssemble[0]=true;
                if(n>result){
                    result  = n;
                }
            }else{
                if(min%n != 0 && max%n == 0) conditionalAssemble[1] =true;
                if(min%n != 0 && max%n != 0) conditionalAssemble[2] =true;
                if(min%n == 0 && max%n != 0) conditionalAssemble[3] =true;
            }
        }
        return result;
    }
    public boolean getConditionalAssemblyCoverate(){
        for(LogicSubmission logicSubmission : conditionalAssemblyCoverage){
            branchConditionalCoverageAnalyse(logicSubmission.getX(),logicSubmission.getY());
        }
        for(boolean item : branchContion){
            if(!item) return false;
        }
        return true;
    }

    public String pathAnalyse(int x,int y){
        StringBuffer sb = new StringBuffer("");
        if(x<1||x>100){
            sb.append('a');
            return sb.toString();
        }
        if(y<1 || y>100){
            sb.append('b');
            return sb.toString();
        }
        int max,min,result=1;
        if(x>=y){
            sb.append('c');
            max = x;
            min = y;
        }else{
            sb.append('d');
            max = y;
            min = x;
        }
        for(int n=1;n<min;n++){//只需要路径包含 fg  fh  e就满足了条件
            if(min%n == 0 && max%n==0){
                sb.append('f');
                if(n>result){
                    sb.append('g');
                    result  = n;
                }else {
                    sb.append('h');
                }
            }else{
                sb.append('e');
            }
        }
        return sb.toString();
    }

    public boolean getPathCoverage(){
        /**
         * 用b+数字代表数组中的值
         * b0 是否包含路径a
         * b1 是否包含路径b
         * b2 包含c且包含fg
         * b3 包含c且包含fh
         * b4 包含c且包含e
         * b5 包含d且包含fg
         * b6 包含d且包含fh
         * b7 包含d且包含e
         */
        boolean[] b = new boolean[8];
        for(LogicSubmission item : pathCoverage){
            String str = pathAnalyse(item.getX(),item.getY());
            if(!b[0]&&str.contains("a"))   b[0] = true;
            else if(!b[1]&&str.contains("b")) b[1] = true;
            else if(str.contains("c")){
                if(str.contains("fg"))  b[2] = true;
                if(str.contains("fh"))  b[3] = true;
                if(str.contains("e"))  b[4] = true;
            }else if(str.contains("d")){
                if(str.contains("fg"))  b[5] = true;
                if(str.contains("fh"))  b[6] = true;
                if(str.contains("e"))  b[7] = true;
            }
        }
        for(boolean item : b){
            if(!item)   return false;
        }
        return true;
    }

    public Map<String ,Object> getResult(){
        int count = 0;
        Map<String ,Object> map = new HashMap<>();
        map.put("statementScore",this.getStatementCoverage());
        map.put("branchScore",this.getBranchCoverage());
        map.put("conditionScore",this.getConditionaCoverage());
        map.put("branchConditionScore",this.getBranchConditionalCoverage());
        map.put("conditionAssembleScore",this.getConditionalAssemblyCoverate());
        map.put("pathScore",this.getPathCoverage());
        if(this.getStatementCoverage()) count++;
        if(this.getBranchCoverage()) count++;
        if(this.getConditionaCoverage()) count++;
        if(this.getBranchConditionalCoverage()) count++;
        if(this.getConditionalAssemblyCoverate()) count++;
        if(this.getPathCoverage()) count++;

        List<LogicSubmission> list = new ArrayList<>();
        list.addAll(statementCoverage);
        list.addAll(branchCoverage);
        list.addAll(conditionaCoverage);
        list.addAll(branchConditionCoverage);
        list.addAll(conditionalAssemblyCoverage);
        list.addAll(pathCoverage);
        map.put("data",list);
        map.put("score",count*100/6);
        return map;
    }

}
