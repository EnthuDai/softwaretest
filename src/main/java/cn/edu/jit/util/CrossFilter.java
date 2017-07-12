package cn.edu.jit.util;

/**
 * Created by dxy on 17-2-17.
 */
import java.io.IOException;


import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;


public class CrossFilter implements Filter {
    private static final boolean debug = true;
    private FilterConfig filterConfig = null;


    public void init(FilterConfig filterConfig) throws ServletException {
        this.filterConfig = filterConfig;
        if (filterConfig != null) {
            if (debug) {
                log("CrossFilter:Initializing filter");
            }
        }

    }

    @Override
    public String toString() {
        if (filterConfig == null) {
            return ("CrossFilter()");
        }
        StringBuffer sb = new StringBuffer("CrossFilter(");
        sb.append(filterConfig);
        sb.append(")");
        return (sb.toString());
    }

    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        if (debug) {
            log("CrossFilter:doFilter()");
        }

        if(response instanceof HttpServletResponse){
            HttpServletResponse alteredResponse = ((HttpServletResponse)response);
            // I need to find a way to make sure this only gets called on 200-300 http responses
            // TODO: see above comment
            addHeadersFor200Response(alteredResponse);
        }
        doBeforeProcessing(request, response);

        try {
            chain.doFilter(request, response);
        } catch (Throwable t) {
            t.printStackTrace();
        }

        doAfterProcessing(request, response);

    }

    public void destroy() {

    }

    private void doBeforeProcessing(ServletRequest request, ServletResponse response)
            throws IOException, ServletException {
        if (debug) {
            log("CrossFilter:DoBeforeProcessing");
        }

    }

    private void doAfterProcessing(ServletRequest request, ServletResponse response)
            throws IOException, ServletException {
        if (debug) {
            log("CrossFilter:DoAfterProcessing");
        }
    }

    private void addHeadersFor200Response(HttpServletResponse response){
        //TODO: externalize the Allow-Origin
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
        response.addHeader("Access-Control-Allow-Headers", "X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
        response.addHeader("Access-Control-Max-Age", "1728000");
    }

    private void log(String msg) {
        filterConfig.getServletContext().log(msg);
    }

}