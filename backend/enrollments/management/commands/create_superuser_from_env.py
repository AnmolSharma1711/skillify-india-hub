import os
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model


class Command(BaseCommand):
    help = "Create a superuser from environment variables (DJANGO_SU_NAME, DJANGO_SU_EMAIL, DJANGO_SU_PASSWORD). Skips silently if the user already exists or env vars are missing."

    def handle(self, *args, **options):
        User = get_user_model()

        username = os.environ.get("DJANGO_SU_NAME")
        email = os.environ.get("DJANGO_SU_EMAIL", "")
        password = os.environ.get("DJANGO_SU_PASSWORD")

        if not username or not password:
            self.stdout.write(self.style.WARNING(
                "DJANGO_SU_NAME or DJANGO_SU_PASSWORD not set. Skipping superuser creation."
            ))
            return

        if User.objects.filter(username=username).exists():
            self.stdout.write(self.style.SUCCESS(
                f'Superuser "{username}" already exists. Skipping.'
            ))
            return

        User.objects.create_superuser(username=username, email=email, password=password)
        self.stdout.write(self.style.SUCCESS(
            f'Superuser "{username}" created successfully.'
        ))
