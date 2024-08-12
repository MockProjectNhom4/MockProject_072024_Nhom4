from django.contrib import admin
from .models import * 

# Register your models here.

@admin.register(Sysdiagrams)
class SysdiagramsAdmin(admin.ModelAdmin):
    list_display = ('name', 'principal_id', 'diagram_id', 'version')
    search_fields = ('name',)

@admin.register(TblPayment)
class TblPaymentAdmin(admin.ModelAdmin):
    list_display = ('id', 'contractid', 'amount', 'paymentstatus', 'createat')
    search_fields = ('contractid__id', 'details')

@admin.register(TblBackgound)
class TblBackgoundAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'guardid', 'evaluate')
    search_fields = ('name', 'guardid__id')

@admin.register(TblBodyguard)
class TblBodyguardAdmin(admin.ModelAdmin):
    list_display = ('id', 'userid', 'phone', 'experience', 'salary')
    search_fields = ('phone', 'address')

@admin.register(TblBodyguardEquipment)
class TblBodyguardEquipmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'equipmentid', 'guardid', 'starttime', 'endtime')
    search_fields = ('equipmentid__name',)

@admin.register(TblCertificate)
class TblCertificateAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'startdate', 'enddate')
    search_fields = ('name',)

@admin.register(TblCertificateBodyguard)
class TblCertificateBodyguardAdmin(admin.ModelAdmin):
    list_display = ('guardid', 'certificateid')
    search_fields = ('guardid__id', 'certificateid__name')

@admin.register(TblContract)
class TblContractAdmin(admin.ModelAdmin):
    list_display = ('id', 'customername', 'startdate', 'enddate', 'status')
    search_fields = ('customername', 'customerphone')

@admin.register(TblContractDetail)
class TblContractDetailAdmin(admin.ModelAdmin):
    list_display = ('id', 'contractid', 'name', 'link')
    search_fields = ('contractid__id', 'name')

@admin.register(TblCustomer)
class TblCustomerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'phone', 'createat')
    search_fields = ('name', 'email', 'phone')

@admin.register(TblDayoff)
class TblDayoffAdmin(admin.ModelAdmin):
    list_display = ('id', 'guardid', 'leavestarttime', 'numberofdays', 'isapproved')
    search_fields = ('guardid__id',)

@admin.register(TblEmergencyContact)
class TblEmergencyContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'contractid')
    search_fields = ('name', 'phone', 'contractid__id')

@admin.register(TblEquipment)
class TblEquipmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'unit', 'quantity')
    search_fields = ('name',)
    
@admin.register(TblFeedback)
class TblFeedbackAdmin(admin.ModelAdmin):
    list_display = ('id', 'contractid', 'message', 'evaluate', 'responded', 'createat', 'deleted')
    search_fields = ('message', 'evaluate')
    list_filter = ('responded', 'deleted', 'createat')


@admin.register(TblLectures)
class TblLecturesAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'email', 'address', 'deleted')
    search_fields = ('name', 'email', 'phone')
    list_filter = ('deleted',)


@admin.register(TblPaymentTransaction)
class TblPaymentTransactionAdmin(admin.ModelAdmin):
    list_display = ('id', 'billid', 'amount', 'transactiondate', 'comment', 'createat', 'deleted')
    search_fields = ('comment',)
    list_filter = ('transactiondate', 'deleted', 'createat')


@admin.register(TblRegistration)
class TblRegistrationAdmin(admin.ModelAdmin):
    list_display = ('id', 'serivceid', 'customerid', 'requirement', 'manquantity', 'womanquantity', 
                    'status', 'location', 'interview_time', 'interview_location', 'createat', 'deleted')
    search_fields = ('status', 'location', 'interview_location')
    list_filter = ('status', 'deleted', 'createat', 'interview_time')


@admin.register(TblRole)
class TblRoleAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


@admin.register(TblService)
class TblServiceAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'price', 'deleted')
    search_fields = ('name', 'description')
    list_filter = ('deleted',)


@admin.register(TblTimekeeping)
class TblTimekeepingAdmin(admin.ModelAdmin):
    list_display = ('id', 'guardid', 'timein', 'timeout', 'status', 'supvisorid', 'deleted')
    search_fields = ('status',)
    list_filter = ('status', 'deleted', 'timein', 'timeout')


@admin.register(TblTraining)
class TblTrainingAdmin(admin.ModelAdmin):
    list_display = ('id', 'lecturesid', 'startdate', 'enddate', 'name', 'description', 'status', 'deleted')
    search_fields = ('name', 'description')
    list_filter = ('status', 'deleted', 'startdate', 'enddate')


@admin.register(TblTrainingBodyguard)
class TblTrainingBodyguardAdmin(admin.ModelAdmin):
    list_display = ('trainingid', 'bodyguardid', 'deleted')
    list_filter = ('deleted',)


@admin.register(TblUser)
class TblUserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email', 'user_name', 'roleid', 'deleted')
    search_fields = ('name', 'email', 'user_name')
    list_filter = ('roleid', 'deleted')


@admin.register(TblWorkSchedule)
class TblWorkScheduleAdmin(admin.ModelAdmin):
    list_display = ('id', 'guardid', 'workingdate', 'starttime', 'endtime', 'shifttype', 'note', 'contractid', 'deleted')
    search_fields = ('shifttype', 'note')
    list_filter = ('workingdate', 'deleted', 'shifttype')
