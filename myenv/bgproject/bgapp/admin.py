from django.contrib import admin
from .models import * 

# Register your models here.
@admin.register(AuthGroup)
class AuthGroupAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

@admin.register(AuthGroupPermissions)
class AuthGroupPermissionsAdmin(admin.ModelAdmin):
    list_display = ('id', 'group', 'permission')
    list_filter = ('group', 'permission')



@admin.register(AuthUser)
class AuthUserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'first_name', 'last_name', 'email', 'is_superuser')
    search_fields = ('username', 'email')
    list_filter = ('is_superuser', 'is_staff', 'is_active')

@admin.register(AuthUserGroups)
class AuthUserGroupsAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'group')
    list_filter = ('user', 'group')

@admin.register(AuthUserUserPermissions)
class AuthUserUserPermissionsAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'permission')
    list_filter = ('user', 'permission')
    

@admin.register(AuthPermission)
class AuthPermissionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'content_type', 'codename')
    search_fields = ('name', 'codename')


@admin.register(DjangoAdminLog)
class DjangoAdminLogAdmin(admin.ModelAdmin):
    list_display = ('action_time', 'object_id', 'object_repr', 'action_flag', 'change_message', 'content_type', 'user')
    list_filter = ('action_time', 'user', 'content_type')
    search_fields = ('object_id', 'object_repr', 'change_message')

@admin.register(DjangoMigrations)
class DjangoMigrationsAdmin(admin.ModelAdmin):
    list_display = ('id', 'app', 'name', 'applied')
    list_filter = ('app', 'applied')
    search_fields = ('app', 'name')

@admin.register(TblBackgound)
class TblBackgoundAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'story', 'evaluate', 'guardid', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    list_filter = ('createat', 'updatedat', 'deleted')
    search_fields = ('name', 'story', 'evaluate')
    
@admin.register(TblBodyguard)
class TblBodyguardAdmin(admin.ModelAdmin):
    list_display = ('id', 'userid', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    list_filter = ('createat', 'updatedat', 'deleted')
    search_fields = ('userid',)


@admin.register(TblBodyguardService)
class TblBodyguardServiceAdmin(admin.ModelAdmin):
    list_display = ('guardid', 'serviceid', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    list_filter = ('createat', 'updatedat', 'deleted')
    search_fields = ('guardid', 'serviceid')

@admin.register(DjangoContentType)
class DjangoContentTypeAdmin(admin.ModelAdmin):
    list_display = ('app_label', 'model')
    search_fields = ('app_label', 'model')

@admin.register(DjangoSession)
class DjangoSessionAdmin(admin.ModelAdmin):
    list_display = ('session_key', 'expire_date')
    search_fields = ('session_key',)

@admin.register(TblBill)
class TblBillAdmin(admin.ModelAdmin):
    list_display = ('id', 'contractid', 'amount', 'paymentstatus', 'details', 'createat', 'updatedat')
    list_filter = ('paymentstatus', 'createat', 'updatedat')
    search_fields = ('details',)


@admin.register(TblBodyguardEquipment)
class TblBodyguardEquipmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'equipmentid', 'starttime', 'endtime', 'workscheduleid', 'guardid', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    list_filter = ('starttime', 'endtime', 'createat', 'updatedat', 'deleted')
    search_fields = ('equipmentid', 'workscheduleid', 'guardid')


@admin.register(TblCertificate)
class TblCertificateAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'startdate', 'enddate', 'link', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    list_filter = ('startdate', 'enddate', 'createat', 'updatedat', 'deleted')
    search_fields = ('name', 'description', 'link')

@admin.register(TblCertificateBodyguard)
class TblCertificateBodyguardAdmin(admin.ModelAdmin):
    list_display = ('guardid', 'certificateid', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    list_filter = ('createat', 'updatedat', 'deleted')
    search_fields = ('guardid', 'certificateid')

@admin.register(TblCompany)
class TblCompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'linklogo', 'title', 'content', 'numberofvisits', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    list_filter = ('createat', 'updatedat', 'deleted')
    search_fields = ('name', 'linklogo', 'title', 'content')

@admin.register(TblContract)
class TblContractAdmin(admin.ModelAdmin):
    list_display = ('id', 'registrationid', 'serivceid', 'customername', 'customerphone', 'customeremail', 'customeraddress', 'startdate', 'enddate', 'status', 'linkcontract', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    list_filter = ('startdate', 'enddate', 'status', 'createat', 'updatedat', 'deleted')
    search_fields = ('customername', 'customerphone', 'customeremail', 'customeraddress', 'status', 'linkcontract')

@admin.register(TblContractBodyguardCompany)
class TblContractBodyguardCompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'guardid', 'description', 'link_contract', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    list_filter = ('createat', 'updatedat', 'deleted')
    search_fields = ('description', 'link_contract')

@admin.register(TblContractDetail)
class TblContractDetailAdmin(admin.ModelAdmin):
    list_display = ('id', 'contractid', 'name', 'link', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    list_filter = ('createat', 'updatedat', 'deleted')
    search_fields = ('name', 'link')

@admin.register(TblCustomer)
class TblCustomerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'phone', 'user_name', 'password', 'createat')
    search_fields = ('name', 'email', 'phone', 'user_name')

@admin.register(TblDayoff)
class TblDayoffAdmin(admin.ModelAdmin):
    list_display = ('id', 'guardid', 'leavestarttime', 'numberofdays', 'isapproved', 'approverid', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    search_fields = ('id', 'guardid__name', 'isapproved')

@admin.register(TblDetailBodyguard)
class TblDetailBodyguardAdmin(admin.ModelAdmin):
    list_display = ('guardid', 'phone', 'email', 'address', 'experience', 'gender', 'dateofbirth', 'hiredate', 'education', 'salary', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    search_fields = ('guardid__name', 'phone', 'email')

@admin.register(TblDetailCandidate)
class TblDetailCandidateAdmin(admin.ModelAdmin):
    list_display = ('id', 'jobid', 'candidateid', 'inspectorid', 'resume', 'status', 'attached_file', 'createat', 'updatedat')
    search_fields = ('jobid__title', 'candidateid__name', 'status')

@admin.register(TblEmergencyContact)
class TblEmergencyContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'note', 'contractid', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    search_fields = ('name', 'phone', 'contractid__customername')

@admin.register(TblEquipment)
class TblEquipmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'unit', 'quantity', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    search_fields = ('name', 'unit')

@admin.register(TblFeedback)
class TblFeedbackAdmin(admin.ModelAdmin):
    list_display = ('id', 'contractid', 'message', 'evaluate', 'responded', 'createat')
    search_fields = ('contractid__customername', 'message', 'evaluate')

@admin.register(TblJob)
class TblJobAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'content', 'publishdate', 'startdate', 'enddate', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    search_fields = ('title', 'content')
    
@admin.register(TblLectures)
class TblLecturesAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'email', 'address', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    search_fields = ('name', 'phone', 'email')

@admin.register(TblNews)
class TblNewsAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'brief', 'content', 'publishdate', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    search_fields = ('title', 'brief', 'content')

@admin.register(TblPaymentTransaction)
class TblPaymentTransactionAdmin(admin.ModelAdmin):
    list_display = ('id', 'billid', 'amount', 'transactiondate', 'comment', 'createat')
    search_fields = ('billid__id', 'amount', 'comment')

@admin.register(TblRegistration)
class TblRegistrationAdmin(admin.ModelAdmin):
    list_display = ('id', 'serivceid', 'customerid', 'requirement', 'manquantity', 'womanquantity', 'status', 'location', 'interview_time', 'interview_location', 'createat')
    search_fields = ('serivceid__name', 'customerid__name', 'status', 'location')

@admin.register(TblRole)
class TblRoleAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    search_fields = ('name',)

@admin.register(TblService)
class TblServiceAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'price', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    search_fields = ('name', 'description')

@admin.register(TblSkill)
class TblSkillAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'evaluate', 'guardid', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    search_fields = ('name', 'evaluate', 'guardid__name')

@admin.register(TblTimekeeping)
class TblTimekeepingAdmin(admin.ModelAdmin):
    list_display = ('id', 'guardid', 'timein', 'timeout', 'status', 'supvisorid', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    search_fields = ('guardid__name', 'status', 'supvisorid__name')

@admin.register(TblTraining)
class TblTrainingAdmin(admin.ModelAdmin):
    list_display = ('id', 'lecturesid', 'startdate', 'enddate', 'name', 'description', 'status', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    search_fields = ('lecturesid', 'name', 'description')

@admin.register(TblTrainingResult)
class TblTrainingResultAdmin(admin.ModelAdmin):
    list_display = ('guardid', 'trainingid', 'result', 'evaluatorid', 'startdate', 'enddate', 'comment', 'createdat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    search_fields = ('guardid__name', 'trainingid__name', 'result', 'evaluatorid')

@admin.register(TblUser)
class TblUserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'password', 'user_name', 'createdat', 'createdby', 'updatedat', 'updateby', 'deleted', 'deletedby')
    search_fields = ('name', 'email', 'user_name')

@admin.register(TblUserCandidate)
class TblUserCandidateAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'password', 'user_name', 'phone', 'address', 'createat', 'updatedat', 'deleted')
    search_fields = ('name', 'email', 'user_name', 'phone')

@admin.register(TblWorkSchedule)
class TblWorkScheduleAdmin(admin.ModelAdmin):
    list_display = ('id', 'guardid', 'workingdate', 'starttime', 'endtime', 'shifttype', 'note', 'trainingid', 'createat', 'createdby', 'updatedat', 'updatedby', 'deleted', 'deletedby')
    search_fields = ('guardid__name', 'shifttype', 'trainingid__name', 'note')


