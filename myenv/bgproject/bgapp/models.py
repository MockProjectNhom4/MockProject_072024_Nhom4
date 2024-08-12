# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Sysdiagrams(models.Model):
    name = models.CharField(max_length=128)
    principal_id = models.IntegerField()
    diagram_id = models.AutoField(primary_key=True)
    version = models.IntegerField(blank=True, null=True)
    definition = models.BinaryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'sysdiagrams'
        unique_together = (('principal_id', 'name'),)


class TblPayment(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    contractid = models.ForeignKey('TblContract', models.DO_NOTHING, db_column='ContractID', blank=True, null=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    paymentstatus = models.BooleanField(db_column='PaymentStatus', blank=True, null=True)  # Field name made lowercase.
    details = models.TextField(db_column='Details', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_Payment'


class TblBackgound(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=500, blank=True, null=True)  # Field name made lowercase.
    story = models.TextField(db_column='Story', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    evaluate = models.CharField(db_column='Evaluate', max_length=5, blank=True, null=True)  # Field name made lowercase.
    link = models.CharField(db_column='Link', max_length=255, blank=True, null=True)  # Field name made lowercase.
    guardid = models.ForeignKey('TblBodyguard', models.DO_NOTHING, db_column='GuardID', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_backgound'


class TblBodyguard(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    userid = models.ForeignKey('TblUser', models.DO_NOTHING, db_column='UserID', blank=True, null=True)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=15, blank=True, null=True)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=255, blank=True, null=True)  # Field name made lowercase.
    experience = models.IntegerField(db_column='Experience', blank=True, null=True)  # Field name made lowercase.
    gender = models.SmallIntegerField(db_column='Gender', blank=True, null=True)  # Field name made lowercase.
    dateofbirth = models.DateField(db_column='DateOfBirth', blank=True, null=True)  # Field name made lowercase.
    hiredate = models.DateField(db_column='HireDate', blank=True, null=True)  # Field name made lowercase.
    education = models.TextField(db_column='Education', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    salary = models.DecimalField(db_column='Salary', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_bodyguard'


class TblBodyguardEquipment(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    equipmentid = models.ForeignKey('TblEquipment', models.DO_NOTHING, db_column='EquipmentID', blank=True, null=True)  # Field name made lowercase.
    starttime = models.DateTimeField(db_column='StartTime', blank=True, null=True)  # Field name made lowercase.
    endtime = models.DateTimeField(db_column='EndTime', blank=True, null=True)  # Field name made lowercase.
    workscheduleid = models.ForeignKey('TblWorkSchedule', models.DO_NOTHING, db_column='WorkScheduleID', blank=True, null=True)  # Field name made lowercase.
    guardid = models.IntegerField(db_column='GuardID', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_bodyguard_equipment'


class TblCertificate(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=500, blank=True, null=True)  # Field name made lowercase.
    description = models.TextField(db_column='Description', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    startdate = models.DateField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    enddate = models.DateField(db_column='EndDate', blank=True, null=True)  # Field name made lowercase.
    link = models.CharField(db_column='Link', max_length=500, blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_certificate'


class TblCertificateBodyguard(models.Model):
    guardid = models.OneToOneField(TblBodyguard, models.DO_NOTHING, db_column='GuardID', primary_key=True)  # Field name made lowercase. The composite primary key (GuardID, CertificateID) found, that is not supported. The first column is selected.
    certificateid = models.ForeignKey(TblCertificate, models.DO_NOTHING, db_column='CertificateID')  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_certificate_bodyguard'
        unique_together = (('guardid', 'certificateid'),)


class TblContract(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    registrationid = models.IntegerField(db_column='RegistrationID', blank=True, null=True)  # Field name made lowercase.
    serivceid = models.ForeignKey('TblService', models.DO_NOTHING, db_column='SerivceID', blank=True, null=True)  # Field name made lowercase.
    customername = models.CharField(db_column='CustomerName', max_length=255, blank=True, null=True)  # Field name made lowercase.
    customerphone = models.CharField(db_column='CustomerPhone', max_length=20, blank=True, null=True)  # Field name made lowercase.
    customeremail = models.CharField(db_column='CustomerEmail', max_length=255, blank=True, null=True)  # Field name made lowercase.
    customeraddress = models.CharField(db_column='CustomerAddress', max_length=500, blank=True, null=True)  # Field name made lowercase.
    startdate = models.DateField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    enddate = models.DateField(db_column='EndDate', blank=True, null=True)  # Field name made lowercase.
    status = models.CharField(db_column='Status', max_length=6, blank=True, null=True)  # Field name made lowercase.
    linkcontract = models.CharField(db_column='LinkContract', max_length=255, blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_contract'


class TblContractDetail(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    contractid = models.ForeignKey(TblContract, models.DO_NOTHING, db_column='ContractID', blank=True, null=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    link = models.CharField(db_column='Link', max_length=255, blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_contract_detail'


class TblCustomer(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=255, blank=True, null=True)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=20, blank=True, null=True)  # Field name made lowercase.
    user_name = models.CharField(db_column='USER_NAME', max_length=200, blank=True, null=True)  # Field name made lowercase.
    password = models.CharField(db_column='PASSWORD', max_length=500, blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_customer'


class TblDayoff(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    guardid = models.ForeignKey(TblBodyguard, models.DO_NOTHING, db_column='GuardID', blank=True, null=True)  # Field name made lowercase.
    leavestarttime = models.DateTimeField(db_column='LeaveStartTime', blank=True, null=True)  # Field name made lowercase.
    numberofdays = models.IntegerField(db_column='NumberOfDays', blank=True, null=True)  # Field name made lowercase.
    isapproved = models.CharField(db_column='IsApproved', max_length=10, blank=True, null=True)  # Field name made lowercase.
    approverid = models.ForeignKey(TblBodyguard, models.DO_NOTHING, db_column='ApproverID', related_name='tbldayoff_approverid_set', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_dayoff'


class TblEmergencyContact(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=20, blank=True, null=True)  # Field name made lowercase.
    note = models.TextField(db_column='NOTE', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    contractid = models.ForeignKey(TblContract, models.DO_NOTHING, db_column='ContractID', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_emergency_contact'


class TblEquipment(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    unit = models.CharField(db_column='Unit', max_length=100, blank=True, null=True)  # Field name made lowercase.
    quantity = models.IntegerField(db_column='Quantity', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_equipment'


class TblFeedback(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    contractid = models.ForeignKey(TblContract, models.DO_NOTHING, db_column='ContractID', blank=True, null=True)  # Field name made lowercase.
    message = models.TextField(db_column='MESSAGE', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    evaluate = models.CharField(db_column='Evaluate', max_length=5, blank=True, null=True)  # Field name made lowercase.
    responded = models.BooleanField(db_column='Responded', blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_feedback'


class TblLectures(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=500, blank=True, null=True)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=20, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=255, blank=True, null=True)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=500, blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_lectures'


class TblPaymentTransaction(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    billid = models.ForeignKey(TblPayment, models.DO_NOTHING, db_column='BillID', blank=True, null=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    transactiondate = models.DateField(db_column='TRANSACTIONDate', blank=True, null=True)  # Field name made lowercase.
    comment = models.TextField(db_column='Comment', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_payment_transaction'


class TblRegistration(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    serivceid = models.ForeignKey('TblService', models.DO_NOTHING, db_column='SerivceID', blank=True, null=True)  # Field name made lowercase.
    customerid = models.ForeignKey(TblCustomer, models.DO_NOTHING, db_column='CustomerID', blank=True, null=True)  # Field name made lowercase.
    requirement = models.TextField(db_column='Requirement', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    manquantity = models.IntegerField(db_column='ManQuantity', blank=True, null=True)  # Field name made lowercase.
    womanquantity = models.IntegerField(db_column='WomanQuantity', blank=True, null=True)  # Field name made lowercase.
    status = models.CharField(db_column='Status', max_length=100, blank=True, null=True)  # Field name made lowercase.
    location = models.CharField(db_column='Location', max_length=255, blank=True, null=True)  # Field name made lowercase.
    interview_time = models.DateTimeField(db_column='Interview_time', blank=True, null=True)  # Field name made lowercase.
    interview_location = models.CharField(db_column='Interview_Location', max_length=255, blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_registration'


class TblRole(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=255, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_role'


class TblService(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    description = models.TextField(db_column='Description', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    price = models.DecimalField(db_column='Price', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_service'


class TblTimekeeping(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    guardid = models.ForeignKey(TblBodyguard, models.DO_NOTHING, db_column='GuardID', blank=True, null=True)  # Field name made lowercase.
    timein = models.DateTimeField(db_column='TimeIn', blank=True, null=True)  # Field name made lowercase.
    timeout = models.DateTimeField(db_column='TimeOut', blank=True, null=True)  # Field name made lowercase.
    status = models.CharField(db_column='Status', max_length=50, blank=True, null=True)  # Field name made lowercase.
    supvisorid = models.ForeignKey(TblBodyguard, models.DO_NOTHING, db_column='SupvisorID', related_name='tbltimekeeping_supvisorid_set', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_timekeeping'


class TblTraining(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    lecturesid = models.ForeignKey(TblLectures, models.DO_NOTHING, db_column='LecturesID', blank=True, null=True)  # Field name made lowercase.
    startdate = models.DateField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    enddate = models.DateField(db_column='EndDate', blank=True, null=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=500, blank=True, null=True)  # Field name made lowercase.
    description = models.TextField(db_column='DESCRIPTION', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    status = models.BooleanField(db_column='Status', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_training'


class TblTrainingBodyguard(models.Model):
    trainingid = models.OneToOneField(TblTraining, models.DO_NOTHING, db_column='TrainingID', primary_key=True)  # Field name made lowercase. The composite primary key (TrainingID, BodyguardID) found, that is not supported. The first column is selected.
    bodyguardid = models.ForeignKey(TblBodyguard, models.DO_NOTHING, db_column='BodyguardID')  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_training_bodyguard'
        unique_together = (('trainingid', 'bodyguardid'),)


class TblUser(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=255, blank=True, null=True)  # Field name made lowercase.
    password = models.CharField(db_column='PASSWORD', max_length=500, blank=True, null=True)  # Field name made lowercase.
    user_name = models.CharField(db_column='USER_NAME', max_length=255, blank=True, null=True)  # Field name made lowercase.
    roleid = models.ForeignKey(TblRole, models.DO_NOTHING, db_column='Roleid', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_user'


class TblWorkSchedule(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    guardid = models.ForeignKey(TblBodyguard, models.DO_NOTHING, db_column='GuardID', blank=True, null=True)  # Field name made lowercase.
    workingdate = models.DateField(db_column='WorkingDate', blank=True, null=True)  # Field name made lowercase.
    starttime = models.DateTimeField(db_column='StartTime', blank=True, null=True)  # Field name made lowercase.
    endtime = models.DateTimeField(db_column='EndTime', blank=True, null=True)  # Field name made lowercase.
    shifttype = models.CharField(db_column='ShiftType', max_length=10, blank=True, null=True)  # Field name made lowercase.
    note = models.TextField(db_column='Note', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    contractid = models.ForeignKey(TblContract, models.DO_NOTHING, db_column='ContractID', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_work_schedule'
