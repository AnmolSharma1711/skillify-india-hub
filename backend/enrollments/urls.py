from django.urls import path
from .views import (
    IndividualEnrollmentCreateView,
    InstituteEnrollmentCreateView,
    MentorEnrollmentCreateView
)

urlpatterns = [
    path('individual/', IndividualEnrollmentCreateView.as_view(), name='individual-enroll'),
    path('institute/', InstituteEnrollmentCreateView.as_view(), name='institute-enroll'),
    path('mentor/', MentorEnrollmentCreateView.as_view(), name='mentor-enroll'),
]
