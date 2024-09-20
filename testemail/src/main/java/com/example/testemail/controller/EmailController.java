package com.example.testemail.controller;

import com.example.testemail.service.SendEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {
    @Autowired
    private SendEmailService sendEmailService;

    @GetMapping("sendEmail")
    public String sendEmail(){
        sendEmailService.sendEmail("nguyenhuutrong11133@gmail.com", "Test body", "Test subject");
        return "send successfully";
    }
}
