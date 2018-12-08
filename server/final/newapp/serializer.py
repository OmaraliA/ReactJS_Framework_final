from rest_framework import serializers
from newapp.models import Table
class Serializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    created_at = serializers.DateTimeField(required=True)
   
    def create(self, validated_data):
        return Table.objects.create(**validated_data)
    
    def update(self, instance, validated_data ):
        instance.name = validated_data.get('name', instance.name)
    
        instance.save()
        return instance