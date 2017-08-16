package cn.edu.jit.util;

import cn.edu.jit.po.LogicSubmission;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class AnalyseLoginTest {

    @Test
    public void testPathCoverage(){
        AnalyseLogic al = new AnalyseLogic();
        List<LogicSubmission> list = new ArrayList<>();
        LogicSubmission logicSubmission1 = new LogicSubmission(89,21);
        LogicSubmission logicSubmission2 = new LogicSubmission(21,3);
        list.add(logicSubmission1);
        list.add(logicSubmission2);
        list.add(new LogicSubmission(21,6));
        list.add(new LogicSubmission(9,21));
        list.add(new LogicSubmission(0,21));
        list.add(new LogicSubmission(9,221));
        al.pathCoverage = list;
        boolean b = al.getPathCoverage();
        System.out.println(b);
    }

    @Test
    public void testStatement(){
        AnalyseLogic al = new AnalyseLogic();
        List<LogicSubmission> list = new ArrayList<>();
        list.add(new LogicSubmission(0,0));
        list.add(new LogicSubmission(1,0));
        list.add(new LogicSubmission(2,3));
        list.add(new LogicSubmission(3,2));
        list.add(new LogicSubmission(6,4));
        al.statementCoverage = list;
        boolean b = al.getStatementCoverage();
        System.out.println(b);
    }

    @Test
    public void testBranch(){
        AnalyseLogic al = new AnalyseLogic();
        List<LogicSubmission> list = new ArrayList<>();
        list.add(new LogicSubmission(0,0));
        list.add(new LogicSubmission(1,0));
        list.add(new LogicSubmission(2,3));
        list.add(new LogicSubmission(3,2));
        list.add(new LogicSubmission(6,4));
        al.branchCoverage = list;
        boolean b = al.getBranchCoverage();
        System.out.println(b);
    }

    @Test
    public void getConditionaCoverage(){
        AnalyseLogic al = new AnalyseLogic();
        List<LogicSubmission> list = new ArrayList<>();
        list.add(new LogicSubmission(0,0));
        list.add(new LogicSubmission(1001,0));
        list.add(new LogicSubmission(1,0));
        list.add(new LogicSubmission(1,1001));
        list.add(new LogicSubmission(2,3));
        list.add(new LogicSubmission(3,2));
        list.add(new LogicSubmission(6,4));
        list.add(new LogicSubmission(21,17));
        al.conditionaCoverage = list;
        boolean b = al.getConditionaCoverage();
        System.out.println(b);
    }

    @Test
    public void getConditionalAssemblyCoverageAnalyse(){
        AnalyseLogic al = new AnalyseLogic();
        List<LogicSubmission> list = new ArrayList<>();
        list.add(new LogicSubmission(0,0));
        list.add(new LogicSubmission(1001,0));
        list.add(new LogicSubmission(1,0));
        list.add(new LogicSubmission(1,1001));
        list.add(new LogicSubmission(2,3));
        list.add(new LogicSubmission(3,2));
        list.add(new LogicSubmission(6,4));
        list.add(new LogicSubmission(21,17));
        al.conditionalAssemblyCoverage = list;
        boolean b = al.getConditionalAssemblyCoverate();
        System.out.println(b);
    }

    @Test
    public void getBranchConditionalCoverage(){
        AnalyseLogic al = new AnalyseLogic();
        List<LogicSubmission> list = new ArrayList<>();
        list.add(new LogicSubmission(0,0));
        list.add(new LogicSubmission(1001,0));
        list.add(new LogicSubmission(1,0));
        list.add(new LogicSubmission(1,1001));
        list.add(new LogicSubmission(2,3));
        list.add(new LogicSubmission(3,2));
        list.add(new LogicSubmission(6,4));
        list.add(new LogicSubmission(21,17));
        al.branchConditionCoverage = list;
        boolean b = al.getBranchConditionalCoverage();
        System.out.println(b);
    }
}
