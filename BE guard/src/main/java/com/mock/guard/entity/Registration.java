package com.mock.guard.entity;



import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.sql.Timestamp;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "tbl_registration")
public class Registration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "SerivceID")
    private Integer serviceId;

    @Column(name = "CustomerID")
    private Integer customerId;

    @Column(name = "Requirement")
    private String requirement;

    @Column(name = "ManQuantity")
    private Integer manQuantity;

    @Column(name = "WomanQuantity")
    private Integer womanQuantity;

    @Column(name = "Status")
    private String status;

    @Column(name = "Location")
    private String location;

    @Column(name = "Interview_time")
    private Timestamp interviewTime;

    @Column(name = "Interview_Location")
    private Timestamp interviewLocation;

    @Column(name = "CreateAt")
    private Timestamp createAt;
}
