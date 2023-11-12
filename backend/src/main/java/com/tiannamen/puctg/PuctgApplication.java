package com.tiannamen.puctg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class PuctgApplication {

	public static void main(String[] args) {
		SpringApplication.run(PuctgApplication.class, args);
	}

}
