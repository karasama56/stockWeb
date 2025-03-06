package com.example.stock.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api")
public class StockController {

    private final RestTemplate restTemplate;

    public StockController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/exchangeReport/BWIBBU_ALL")
    public ResponseEntity<String> getStockData() {
        String url = "https://api.example.com/exchangeReport/BWIBBU_ALL"; // 替換為實際的外部 API URL
        String response = restTemplate.getForObject(url, String.class);
        return ResponseEntity.ok(response);
    }
}