package com.example.kalkulator.controller;
import com.example.kalkulator.KalkulatorApplication;
import com.example.kalkulator.service.KalkulatorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

import static java.lang.String.valueOf;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RequestMapping("/calculate")
public class KalkulatorController {

    @Autowired
    private KalkulatorService kalkulatorService;
    @GetMapping("/{regnestykke}")
    public ResponseEntity<String> Calculate(@PathVariable String regnestykke) {
        Logger logger = LoggerFactory.getLogger(KalkulatorApplication.class);
        try {
            return ResponseEntity.ok(valueOf(kalkulatorService.regnUt(regnestykke)));
        }catch (Exception e){
            logger.warn(e.getMessage());
        }
        return ResponseEntity.badRequest().build();
    }
}


