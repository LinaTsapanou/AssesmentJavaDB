package com.azure.AssesmentDB.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.azure.AssesmentDB.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

}
