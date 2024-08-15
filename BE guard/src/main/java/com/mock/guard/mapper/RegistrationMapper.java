package com.mock.guard.mapper;

import com.mock.guard.entity.Registration;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RegistrationMapper {
    Registration toUser(Registration request);
}
