from django.db import models

# Create your models here.

class Messages(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.name} - {self.subject}"

class Quotes(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    projectType = models.CharField(max_length=100)
    location=models.CharField(max_length=100)
    budget = models.CharField(max_length=100, blank=True, null=True)
    timeline = models.CharField(max_length=100, blank=True, null=True)
    message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name
    
class Image(models.Model):
    quote = models.ForeignKey(Quotes, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='quotes/images/')
    def __str__(self):
        return self.quote.name

class Interior(models.Model):
    name=models.CharField(max_length=100)
    description=models.TextField()
    budget=models.CharField(max_length=100)
    timeline=models.CharField(max_length=100)

class InteriorImage(models.Model):
    interior = models.ForeignKey(Quotes, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='interior/images/')
    def __str__(self):
        return self.quote.name

class InteriorStyle(models.Model):
    interior_name=models.CharField(max_length=100,null=True,blank=True)



