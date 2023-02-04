package com.back.newsletter.service;

import com.back.newsletter.pojo.Todo;

import java.util.List;

public interface TodoService {

    void createTodo(Todo todo);

    void updateTodo(Todo todo, Long id);

    void deleteTodo(Long id);

    Todo getTodoById(Long id);

    List<Todo> getAllTodos();


}
