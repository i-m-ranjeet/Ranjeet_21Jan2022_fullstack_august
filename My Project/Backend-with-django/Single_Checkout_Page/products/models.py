from django.db import models


class Products(models.Model):
    name = models.CharField(max_length=50)
    price_p_m = models.FloatField()


class Promotions(models.Model):
    code = models.CharField(max_length=20)
    discount = models.IntegerField()
    description = models.CharField(max_length=120)
