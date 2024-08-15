package com.mock.guard.controller;

import com.mock.guard.entity.Registration;
import com.mock.guard.service.RegistrationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/request")
public class RequestController {

    @Autowired
    private RegistrationService service;

    @GetMapping("/helo")
    public String helo() {
        return "check health api ";
    }

    //get all registration
    @GetMapping
    public List<Registration> getAll() {
        return service.getRegistration();

    }

    // get by id
    @GetMapping("/{id}")
    public ResponseEntity<Registration> get(@PathVariable(name = "id") Integer id) {
        Registration product = service.getRegistrationById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    // insert new
    @PostMapping
    public ResponseEntity<Registration> create(@RequestBody @Valid Registration item) {

        return new ResponseEntity<>(service.createRegistration(item), HttpStatus.CREATED);
    }

    // update
    @PutMapping("/{id}")
    public ResponseEntity<Registration> update(@PathVariable(name ="id") Integer id, @RequestBody Registration item) {
        Registration itemUpdate = service.updateRegistration(id, item);
        return new ResponseEntity<>(itemUpdate, HttpStatus.OK);
    }

    // delete
    @DeleteMapping("/{id}")
    public ResponseEntity<Registration> delete(@PathVariable Integer id) {
        service.deleteRegistration(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
