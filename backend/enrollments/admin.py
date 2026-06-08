from django.contrib import admin
from .models import IndividualEnrollment, InstituteEnrollment, MentorEnrollment

@admin.register(IndividualEnrollment)
class IndividualEnrollmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'course_name', 'created_at')

@admin.register(InstituteEnrollment)
class InstituteEnrollmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'institution', 'course_name', 'created_at')

@admin.register(MentorEnrollment)
class MentorEnrollmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'designation', 'course_name', 'created_at')
