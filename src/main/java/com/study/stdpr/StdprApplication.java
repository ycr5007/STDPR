package com.study.stdpr;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

// exclude = SecurityAutoConfiguration.class : Spring Security Login 자동연결 제거
@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class StdprApplication {

    public static void main(String[] args) {
        SpringApplication.run(StdprApplication.class, args);
    }

}
