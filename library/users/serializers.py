from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from .models import User

class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'birthday_year', 'email']
        # fields = '__all__'

