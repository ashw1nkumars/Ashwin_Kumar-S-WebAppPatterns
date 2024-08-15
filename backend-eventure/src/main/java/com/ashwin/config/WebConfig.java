package com.ashwin.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Allow all paths
                .allowedOrigins("http://localhost:3000")  // Allow requests from this origin
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Allow specific methods
                .allowedHeaders("*")  // Allow all headers
                .allowCredentials(true);  // Allow credentials (cookies, etc.)
    }
}