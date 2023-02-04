package com.back.newsletter.ws;

import com.back.newsletter.pojo.Todo;
import com.back.newsletter.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoWs {

    @Autowired
    private TodoService todoService;

    @PostMapping
    public void createTodo(@RequestBody Todo todo) {
        todoService.createTodo(todo);
    }

    @PutMapping("/{id}")
    public void updateTodo(@RequestBody Todo todo, @PathVariable Long id) {
        todoService.updateTodo(todo, id);
    }

    @DeleteMapping("/{id}")
    public void deleteTodo(@PathVariable Long id) {
        todoService.deleteTodo(id);
    }

    @GetMapping("/{id}")
    public Todo getTodoById(@PathVariable Long id) {
        return todoService.getTodoById(id);
    }

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }


}
