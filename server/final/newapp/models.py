from django.db import models

class Table(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
   
    def __str__(self):
        return self.name
        

