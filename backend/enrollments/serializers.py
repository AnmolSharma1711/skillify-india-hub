from rest_framework import serializers
from .models import IndividualEnrollment, InstituteEnrollment, MentorEnrollment

class IndividualEnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndividualEnrollment
        fields = '__all__'

class InstituteEnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstituteEnrollment
        fields = '__all__'

class MentorEnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorEnrollment
        fields = '__all__'
