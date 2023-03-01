package com.example.kalkulator.service;

import com.example.kalkulator.KalkulatorApplication;
import org.mariuszgromada.math.mxparser.Expression;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static java.lang.Double.NaN;

public class KalkulatorService {
    Logger logger = LoggerFactory.getLogger(KalkulatorApplication.class);
    public Double regnUt(String regnestykke) throws Exception {
        Double Answer;
        try {
            Expression e = new Expression(regnestykke);
            Answer = e.calculate();
        } catch (Exception e) {
            throw new Exception("Skjedde noe feil med utregningen");
        }
        if(Double.isNaN(Answer)){
            throw new Exception("Ikke et tall");
        }
        logger.info("Svaret er " + Answer);
        return Answer;
    }
}
