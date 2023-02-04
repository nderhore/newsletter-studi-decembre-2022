package com.back.newsletter.repository;

import com.back.newsletter.pojo.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long>{
}
