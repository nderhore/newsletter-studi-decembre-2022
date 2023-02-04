package com.back.newsletter.service.impl;

import com.back.newsletter.pojo.Todo;
import com.back.newsletter.repository.TodoRepository;
import com.back.newsletter.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepository todoRepository;


    @Override
    public void createTodo(Todo todo) {
        todoRepository.save(todo);
    }

    @Override
    public void updateTodo(Todo todo, Long id) {
        Todo todoToUpdate = todoRepository.findById(id).orElse(null);
        if(todoToUpdate != null) {
        todoToUpdate.setTitle(todo.getTitle());
        todoToUpdate.setDescription(todo.getDescription());
        todoToUpdate.setAdresse(todo.getAdresse());
        todoToUpdate.setDone(todo.isDone());
        todoRepository.save(todoToUpdate);
        }
    }

    @Override
    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }

    @Override
    public Todo getTodoById(Long id) {
        return todoRepository.findById(id).orElse(null);
    }

    @Override
    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }
}
