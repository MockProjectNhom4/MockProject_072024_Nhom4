package com.mock.guard.service;

import com.mock.guard.entity.Registration;
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

    // get
    public List<Registration> getRegistration() {
        return registrationRepository.findAll();
    }

    // get by id
    public Registration getRegistrationById(int id) {
        return registrationRepository.findById(id).orElse(null);
    }

    //create
    public Registration createRegistration(Registration registration) {
        return registrationRepository.save(registration);
    }

    // update
    public Registration updateRegistration(int id, Registration registration) {
        Registration existingRegistration = getRegistrationById(id);
        if (existingRegistration == null) {
            return null;
        }

        return registrationRepository.save(registration);
    }

    // delete
    public boolean deleteRegistration(int id) {
        Registration existingRegistration = getRegistrationById(id);
        if (existingRegistration == null) {
            return false;
        }
        registrationRepository.deleteById(id);
        return true;

    }
}
