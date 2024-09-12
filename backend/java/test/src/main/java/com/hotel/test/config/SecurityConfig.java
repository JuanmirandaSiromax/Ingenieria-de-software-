package com.hotel.test.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable);
        http.authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/register*", "/login", "/login-error").permitAll()
                .requestMatchers("/admin/**").hasRole("administrador")
                .requestMatchers("/operador/**").hasRole("empleado")
                .requestMatchers("/cliente/**").hasRole("cliente")
                .anyRequest().authenticated());

        return http.build();
    }
}