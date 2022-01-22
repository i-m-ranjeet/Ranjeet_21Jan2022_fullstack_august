from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from . import models


@csrf_exempt
def products(request):
    if request.method == 'GET':
        all_products = models.Products.objects.all()
        get_all = []
        for item in all_products:
            get_all.append({"id":item.id, "name": item.name, "price_p_m":item.price_p_m})
        return JsonResponse(data={"data":get_all})
