package com.azure.AssesmentDB.service;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.azure.AssesmentDB.model.User;
import com.azure.AssesmentDB.repository.UserRepository;


@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public void save(User user) {
    	userRepository.save(user);
    }
}
