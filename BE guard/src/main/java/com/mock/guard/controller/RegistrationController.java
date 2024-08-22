package com.mock.guard.controller;

import com.mock.guard.dto.request.RegistrationCreateRequest;
import com.mock.guard.dto.request.RegistrationUpdateRequest;
import com.mock.guard.dto.response.ApiResponse;
import com.mock.guard.dto.response.RegistrationResponse;
import com.mock.guard.service.RegistrationService;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/request")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class RegistrationController {

    private RegistrationService service;

    @GetMapping("/helo")
    public String helo() {
        return "check health api ";
    }

    //get all registration
    @GetMapping
    public ApiResponse<List<RegistrationResponse>> getAll() {

        return ApiResponse.<List<RegistrationResponse>>builder().result(service.getRegistrations()).build();
    }

    // get by id
    @GetMapping("/{id}")
    public ApiResponse<RegistrationResponse> get(@PathVariable(name = "id") Integer id) {
        return ApiResponse.<RegistrationResponse>builder().result(service.getRegistrationById(id)).build();

    }

    // insert new
    @PostMapping
    public ApiResponse<RegistrationResponse> create(@RequestBody @Valid RegistrationCreateRequest request) {

        return ApiResponse.<RegistrationResponse>builder().result(service.createRegistration(request)).build();
    }

    // update
    @PutMapping("/{id}")
    public ApiResponse<RegistrationResponse> update(@PathVariable(name = "id") Integer id, @RequestBody RegistrationUpdateRequest request) {

        return ApiResponse.<RegistrationResponse>builder().result(service.updateRegistration(id, request)).build();
    }

    // delete
    @DeleteMapping("/{id}")
    public ApiResponse<String> delete(@PathVariable Integer id) {

        if(!service.deleteRegistration(id)){
            return ApiResponse.<String>builder().result("Delete failed").build();
        }
        return ApiResponse.<String>builder().result("Registration has been deleted").build();
    }
    // pagination, sort, search, filter ...
    // 2: result: request, response
    // 3: document api integrated
    // 1: customize http, message response,
    // 4: validation: check type, min, max, space, ...

    // http://localhost:8080/swagger-ui/index.html
}
