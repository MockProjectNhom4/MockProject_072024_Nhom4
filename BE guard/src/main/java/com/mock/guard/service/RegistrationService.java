package com.mock.guard.service;

import com.mock.guard.dto.request.RegistrationCreateRequest;
import com.mock.guard.dto.request.RegistrationUpdateRequest;
import com.mock.guard.dto.response.RegistrationResponse;
import com.mock.guard.entity.Registration;
import com.mock.guard.exception.AppException;
import com.mock.guard.exception.ErrorCode;
import com.mock.guard.mapper.RegistrationMapper;
import com.mock.guard.repository.RegistrationRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class RegistrationService {
    RegistrationRepository registrationRepository;
    RegistrationMapper mapper;
    // get
    public List<RegistrationResponse> getRegistrations() {


        return registrationRepository.findAll().stream().map(mapper::toRegistrationResponse).toList();
    }

    // get by id
    public RegistrationResponse getRegistrationById(int id) {

        return mapper.toRegistrationResponse(registrationRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.ITEM_NOT_EXISTED)));

    }

    //create
    public RegistrationResponse createRegistration(RegistrationCreateRequest request) {

//        if (registrationRepository.existsById(request.getId()))
//            throw new AppException(ErrorCode.ITEM_EXISTED);


        Registration user = mapper.toRegistration(request);

        return mapper.toRegistrationResponse(registrationRepository.save(user));
    }

    // update
    public RegistrationResponse updateRegistration(Integer id, RegistrationUpdateRequest request) {

        Registration registration = registrationRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.ITEM_NOT_EXISTED));

        mapper.updatetoRegistration(registration, request);

        return mapper.toRegistrationResponse(registrationRepository.save(registration));

    }

    // delete
    public boolean deleteRegistration(int id) {

        registrationRepository.findById(id)
                .orElseThrow(() -> new AppException(ErrorCode.ITEM_NOT_EXISTED));

        registrationRepository.deleteById(id);
        return true;
    }


}
