# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class TblBackgound(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=500, blank=True, null=True)  # Field name made lowercase.
    story = models.TextField(db_column='Story', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    evaluate = models.CharField(db_column='Evaluate', max_length=5, blank=True, null=True)  # Field name made lowercase.
    guardid = models.ForeignKey('TblBodyguard', models.DO_NOTHING, db_column='GuardID', blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_backgound'


class TblBill(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    contractid = models.ForeignKey('TblContract', models.DO_NOTHING, db_column='ContractID', blank=True, null=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    paymentstatus = models.BooleanField(db_column='PaymentStatus', blank=True, null=True)  # Field name made lowercase.
    details = models.TextField(db_column='Details', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_bill'


class TblBodyguard(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    userid = models.ForeignKey('TblUser', models.DO_NOTHING, db_column='UserID', blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_bodyguard'


class TblBodyguardEquipment(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    equipmentid = models.ForeignKey('TblEquipment', models.DO_NOTHING, db_column='EquipmentID', blank=True, null=True)  # Field name made lowercase.
    starttime = models.DateTimeField(db_column='StartTime', blank=True, null=True)  # Field name made lowercase.
    endtime = models.DateTimeField(db_column='EndTime', blank=True, null=True)  # Field name made lowercase.
    workscheduleid = models.ForeignKey('TblWorkSchedule', models.DO_NOTHING, db_column='WorkScheduleID', blank=True, null=True)  # Field name made lowercase.
    guardid = models.ForeignKey(TblBodyguard, models.DO_NOTHING, db_column='GuardID', blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_bodyguard_equipment'


class TblBodyguardService(models.Model):
    guardid = models.OneToOneField(TblBodyguard, models.DO_NOTHING, db_column='GuardID', primary_key=True)  # Field name made lowercase. The composite primary key (GuardID, ServiceID) found, that is not supported. The first column is selected.
    serviceid = models.ForeignKey('TblService', models.DO_NOTHING, db_column='ServiceID')  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_bodyguard_service'
        unique_together = (('guardid', 'serviceid'),)


class TblCertificate(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=500, blank=True, null=True)  # Field name made lowercase.
    description = models.TextField(db_column='Description', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    startdate = models.DateField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    enddate = models.DateField(db_column='EndDate', blank=True, null=True)  # Field name made lowercase.
    link = models.CharField(db_column='Link', max_length=500, blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_certificate'


class TblCertificateBodyguard(models.Model):
    guardid = models.OneToOneField(TblBodyguard, models.DO_NOTHING, db_column='GuardID', primary_key=True)  # Field name made lowercase. The composite primary key (GuardID, CertificateID) found, that is not supported. The first column is selected.
    certificateid = models.ForeignKey(TblCertificate, models.DO_NOTHING, db_column='CertificateID')  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_certificate_bodyguard'
        unique_together = (('guardid', 'certificateid'),)


class TblCompany(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    linklogo = models.CharField(db_column='LinkLogo', max_length=200, blank=True, null=True)  # Field name made lowercase.
    title = models.CharField(db_column='Title', max_length=500, blank=True, null=True)  # Field name made lowercase.
    content = models.TextField(db_column='Content', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    numberofvisits = models.IntegerField(db_column='NumberOfVisits', blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_company'


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
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_contract'


class TblContractBodyguardCompany(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    guardid = models.ForeignKey(TblBodyguard, models.DO_NOTHING, db_column='GuardID', blank=True, null=True)  # Field name made lowercase.
    description = models.TextField(db_column='Description', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    link_contract = models.CharField(db_column='Link_Contract', max_length=500, blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_contract_bodyguard_company'


class TblContractDetail(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    contractid = models.ForeignKey(TblContract, models.DO_NOTHING, db_column='ContractID', blank=True, null=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    link = models.CharField(db_column='Link', max_length=255, blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

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
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_dayoff'


class TblDetailBodyguard(models.Model):
    guardid = models.ForeignKey(TblBodyguard, models.DO_NOTHING, db_column='GuardID', blank=True, null=True)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=20, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=255, blank=True, null=True)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=500, blank=True, null=True)  # Field name made lowercase.
    experience = models.IntegerField(db_column='Experience', blank=True, null=True)  # Field name made lowercase.
    gender = models.SmallIntegerField(db_column='Gender', blank=True, null=True)  # Field name made lowercase.
    dateofbirth = models.DateField(db_column='DateOfBirth', blank=True, null=True)  # Field name made lowercase.
    hiredate = models.DateField(db_column='HireDate', blank=True, null=True)  # Field name made lowercase.
    education = models.TextField(db_column='Education', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    salary = models.DecimalField(db_column='Salary', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_detail_bodyguard'


class TblDetailCandidate(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    jobid = models.ForeignKey('TblJob', models.DO_NOTHING, db_column='JobID', blank=True, null=True)  # Field name made lowercase.
    candidateid = models.ForeignKey('TblUserCandidate', models.DO_NOTHING, db_column='CandidateID', blank=True, null=True)  # Field name made lowercase.
    inspectorid = models.ForeignKey('TblUser', models.DO_NOTHING, db_column='InspectorID', blank=True, null=True)  # Field name made lowercase.
    resume = models.TextField(db_column='RESUME', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    status = models.CharField(db_column='Status', max_length=6, blank=True, null=True)  # Field name made lowercase.
    attached_file = models.CharField(db_column='Attached_file', max_length=200, blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_detail_candidate'


class TblEmergencyContact(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=20, blank=True, null=True)  # Field name made lowercase.
    note = models.TextField(db_column='NOTE', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    contractid = models.ForeignKey(TblContract, models.DO_NOTHING, db_column='ContractID', blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_emergency_contact'


class TblEquipment(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    unit = models.CharField(db_column='Unit', max_length=100, blank=True, null=True)  # Field name made lowercase.
    quantity = models.IntegerField(db_column='Quantity', blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

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

    class Meta:
        managed = False
        db_table = 'tbl_feedback'


class TblJob(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    title = models.CharField(db_column='Title', max_length=500, blank=True, null=True)  # Field name made lowercase.
    content = models.TextField(db_column='Content', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    publishdate = models.DateField(db_column='PublishDate', blank=True, null=True)  # Field name made lowercase.
    startdate = models.DateField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    enddate = models.DateField(db_column='EndDate', blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_job'


class TblLectures(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=500, blank=True, null=True)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=20, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=255, blank=True, null=True)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=500, blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_lectures'


class TblNews(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    title = models.CharField(db_column='Title', max_length=500, blank=True, null=True)  # Field name made lowercase.
    brief = models.CharField(db_column='Brief', max_length=500, blank=True, null=True)  # Field name made lowercase.
    content = models.TextField(db_column='Content', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    publishdate = models.DateField(db_column='PublishDate', blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_news'


class TblPaymentTransaction(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    billid = models.ForeignKey(TblBill, models.DO_NOTHING, db_column='BillID', blank=True, null=True)  # Field name made lowercase.
    amount = models.DecimalField(db_column='Amount', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    transactiondate = models.DateField(db_column='TRANSACTIONDate', blank=True, null=True)  # Field name made lowercase.
    comment = models.TextField(db_column='Comment', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.

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

    class Meta:
        managed = False
        db_table = 'tbl_registration'


class TblRole(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_role'


class TblService(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    description = models.TextField(db_column='Description', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    price = models.DecimalField(db_column='Price', max_digits=18, decimal_places=0, blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_service'


class TblSkill(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=500, blank=True, null=True)  # Field name made lowercase.
    description = models.TextField(db_column='Description', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    evaluate = models.CharField(db_column='Evaluate', max_length=5, blank=True, null=True)  # Field name made lowercase.
    guardid = models.ForeignKey(TblBodyguard, models.DO_NOTHING, db_column='GuardID', blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_skill'


class TblTimekeeping(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    guardid = models.ForeignKey(TblBodyguard, models.DO_NOTHING, db_column='GuardID', blank=True, null=True)  # Field name made lowercase.
    timein = models.DateTimeField(db_column='TimeIn', blank=True, null=True)  # Field name made lowercase.
    timeout = models.DateTimeField(db_column='TimeOut', blank=True, null=True)  # Field name made lowercase.
    status = models.CharField(db_column='Status', max_length=50, blank=True, null=True)  # Field name made lowercase.
    supvisorid = models.ForeignKey(TblBodyguard, models.DO_NOTHING, db_column='SupvisorID', related_name='tbltimekeeping_supvisorid_set', blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_timekeeping'


class TblTraining(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    lecturesid = models.IntegerField(db_column='LecturesID', blank=True, null=True)  # Field name made lowercase.
    startdate = models.DateField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    enddate = models.DateField(db_column='EndDate', blank=True, null=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=500, blank=True, null=True)  # Field name made lowercase.
    description = models.TextField(db_column='DESCRIPTION', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    status = models.BooleanField(db_column='Status', blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_training'


class TblTrainingResult(models.Model):
    guardid = models.OneToOneField(TblBodyguard, models.DO_NOTHING, db_column='GuardID', primary_key=True)  # Field name made lowercase. The composite primary key (GuardID, TrainingID) found, that is not supported. The first column is selected.
    trainingid = models.ForeignKey(TblTraining, models.DO_NOTHING, db_column='TrainingID')  # Field name made lowercase.
    result = models.BooleanField(db_column='Result', blank=True, null=True)  # Field name made lowercase.
    evaluatorid = models.IntegerField(db_column='EvaluatorID', blank=True, null=True)  # Field name made lowercase.
    startdate = models.DateField(db_column='StartDate', blank=True, null=True)  # Field name made lowercase.
    enddate = models.DateField(db_column='EndDate', blank=True, null=True)  # Field name made lowercase.
    comment = models.TextField(db_column='Comment', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    createdat = models.DateTimeField(db_column='CreatedAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_training_result'
        unique_together = (('guardid', 'trainingid'),)


class TblUser(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=255, blank=True, null=True)  # Field name made lowercase.
    password = models.CharField(db_column='PASSWORD', max_length=500, blank=True, null=True)  # Field name made lowercase.
    user_name = models.CharField(db_column='USER_NAME', max_length=255, blank=True, null=True)  # Field name made lowercase.
    createdat = models.DateTimeField(db_column='CreatedAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updateby = models.IntegerField(db_column='UpdateBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_user'


class TblUserCandidate(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=255, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=255, blank=True, null=True)  # Field name made lowercase.
    password = models.CharField(db_column='PASSWORD', max_length=500, blank=True, null=True)  # Field name made lowercase.
    user_name = models.CharField(db_column='USER_NAME', max_length=255, blank=True, null=True)  # Field name made lowercase.
    phone = models.CharField(db_column='Phone', max_length=20, blank=True, null=True)  # Field name made lowercase.
    address = models.CharField(db_column='Address', max_length=500, blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_user_candidate'


class TblWorkSchedule(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    guardid = models.ForeignKey(TblBodyguard, models.DO_NOTHING, db_column='GuardID', blank=True, null=True)  # Field name made lowercase.
    workingdate = models.DateField(db_column='WorkingDate', blank=True, null=True)  # Field name made lowercase.
    starttime = models.DateTimeField(db_column='StartTime', blank=True, null=True)  # Field name made lowercase.
    endtime = models.DateTimeField(db_column='EndTime', blank=True, null=True)  # Field name made lowercase.
    shifttype = models.CharField(db_column='ShiftType', max_length=10, blank=True, null=True)  # Field name made lowercase.
    note = models.TextField(db_column='Note', blank=True, null=True)  # Field name made lowercase. This field type is a guess.
    trainingid = models.ForeignKey(TblTraining, models.DO_NOTHING, db_column='TrainingID', blank=True, null=True)  # Field name made lowercase.
    createat = models.DateTimeField(db_column='CreateAt', blank=True, null=True)  # Field name made lowercase.
    createdby = models.IntegerField(db_column='CreatedBy', blank=True, null=True)  # Field name made lowercase.
    updatedat = models.DateTimeField(db_column='UpdatedAt', blank=True, null=True)  # Field name made lowercase.
    updatedby = models.IntegerField(db_column='UpdatedBy', blank=True, null=True)  # Field name made lowercase.
    deleted = models.BooleanField(db_column='Deleted', blank=True, null=True)  # Field name made lowercase.
    deletedby = models.IntegerField(db_column='DeletedBy', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbl_work_schedule'
