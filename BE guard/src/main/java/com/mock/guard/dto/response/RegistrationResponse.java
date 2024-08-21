package com.mock.guard.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.sql.Timestamp;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RegistrationResponse {
    private Integer id;
    private Integer serviceId;

    private Integer customerId;

    private String requirement;

    private Integer manQuantity;

    private Integer womanQuantity;

    private String status;

    private String location;

    private Timestamp interviewTime;

    private String interviewLocation;

    private Timestamp createAt;

    private Boolean deleted;
}
