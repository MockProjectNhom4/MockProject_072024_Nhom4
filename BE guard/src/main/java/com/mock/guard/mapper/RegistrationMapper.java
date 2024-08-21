package com.mock.guard.mapper;

import com.mock.guard.dto.request.RegistrationCreateRequest;
import com.mock.guard.dto.request.RegistrationUpdateRequest;
import com.mock.guard.dto.response.RegistrationResponse;
import com.mock.guard.entity.Registration;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface RegistrationMapper {
//    Registration toRegistration(Registration request);

    Registration toRegistration(RegistrationCreateRequest request);

    RegistrationResponse toRegistrationResponse (Registration user);
    void updatetoRegistration(@MappingTarget Registration user, RegistrationUpdateRequest
            request);
}
