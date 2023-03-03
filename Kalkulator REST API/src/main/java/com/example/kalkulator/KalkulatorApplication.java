package com.example.kalkulator;

import com.example.kalkulator.service.KalkulatorService;
import org.mariuszgromada.math.mxparser.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


import static java.lang.String.valueOf;

@SpringBootApplication
public class KalkulatorApplication {


	public static void main(String[] args) {
		SpringApplication.run(KalkulatorApplication.class, args);
		License.iConfirmNonCommercialUse("EmilOO");
	}

	//Controller

	//Service


}



