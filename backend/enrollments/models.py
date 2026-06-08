from django.db import models

class BaseEnrollment(models.Model):
    course_name = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    institution = models.CharField(max_length=255)
    designation = models.CharField(max_length=255)
    motivation = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True

    def __str__(self):
        return f"{self.name} - {self.course_name}"

class IndividualEnrollment(BaseEnrollment):
    pass

class InstituteEnrollment(BaseEnrollment):
    pass

class MentorEnrollment(BaseEnrollment):
    pass
