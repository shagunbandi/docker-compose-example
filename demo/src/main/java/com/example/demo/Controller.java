package com.example.demo;

import java.util.Date;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping
public class Controller {

	@GetMapping
	public String printHello() {
		return "Response From Backend - " + new Date().toString();
	}

}
