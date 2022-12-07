package com.azure.AssesmentDB.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.azure.AssesmentDB.model.User;
import com.azure.AssesmentDB.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/LinaTsapanouTable")
public class UserController {
	@Autowired
	UserService userService;

	@GetMapping()
	public ResponseEntity<List<User>> findAll() {
		List<User> users = this.userService.findAll();
		return new ResponseEntity<>(users, HttpStatus.OK);
	}

	@PostMapping()
	public ResponseEntity<User> save(@RequestBody User user) {

		this.userService.save(user);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
}