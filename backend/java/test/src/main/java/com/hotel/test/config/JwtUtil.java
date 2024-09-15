package com.hotel.test.config;

import java.util.Date;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

@Component
public class JwtUtil {

    private final SecretKey secretKey = Jwts.SIG.HS256.key().build();

    private final long JWT_TOKEN_VALIDITY = 1000 * 60 * 60 * 10; // 10 horas

    // Obtener el nombre de usuario del token JWT
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    // Obtener la fecha de expiración del token JWT
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    // Obtener un solo claim del token JWT
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    // Obtener todos los claims del token JWT
    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                   .verifyWith(secretKey)
                   .build()
                   .parseSignedClaims(token)
                   .getPayload();
    }

    // Verificar si el token ha expirado
    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Generar un token JWT para un usuario
    public String generateToken(UserDetails userDetails) {
        return createToken(userDetails);
    }

    private String createToken(UserDetails userDetails) {
        String role = userDetails.getAuthorities().iterator().next().getAuthority();

        return Jwts.builder()
                   .subject(userDetails.getUsername())
                   .claim("role", role)
                   .issuedAt(new Date(System.currentTimeMillis()))
                   .expiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY))
                   .signWith(secretKey)
                   .compact();
    }

    // Validar el token JWT
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
