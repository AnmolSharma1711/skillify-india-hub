from rest_framework import generics
from .models import IndividualEnrollment, InstituteEnrollment, MentorEnrollment
from .serializers import (
    IndividualEnrollmentSerializer,
    InstituteEnrollmentSerializer,
    MentorEnrollmentSerializer
)

class IndividualEnrollmentCreateView(generics.CreateAPIView):
    queryset = IndividualEnrollment.objects.all()
    serializer_class = IndividualEnrollmentSerializer

class InstituteEnrollmentCreateView(generics.CreateAPIView):
    queryset = InstituteEnrollment.objects.all()
    serializer_class = InstituteEnrollmentSerializer

class MentorEnrollmentCreateView(generics.CreateAPIView):
    queryset = MentorEnrollment.objects.all()
    serializer_class = MentorEnrollmentSerializer
