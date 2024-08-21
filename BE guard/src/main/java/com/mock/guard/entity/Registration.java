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

    @Column(name = "serivceid")
    private Integer serviceId;

    @Column(name = "customerid")
    private Integer customerId;

    @Column(name = "requirement")
    private String requirement;

    @Column(name = "manquantity")
    private Integer manQuantity;

    @Column(name = "womanquantity")
    private Integer womanQuantity;

    @Column(name = "status", length = 100)
    private String status;

    @Column(name = "location")
    private String location;

    @Column(name = "interview_time")
    private Timestamp interviewTime;

    @Column(name = "interview_Location")
    private String interviewLocation;

    @Column(name = "createat")
    private Timestamp createAt;

    @Column(name= "deleted")
    private  Boolean deleted;
}
