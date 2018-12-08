from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from newapp.models import Table
from newapp.serializer import Serializer

@csrf_exempt
def winner_list(request):
  if request.method == "GET":
    movies = Table.objects.all()
    serialize = Serializer(movies, many=True)
    return JsonResponse(serialize.data, safe=False)
  elif request.method == "POST":
    data = JSONParser().parse(request)
    serialize = Serializer(data=data)
    if serialize.is_valid():
      serialize.save()
      return JsonResponse(serialize.data, status=201)
    return JsonResponse(serialize.errors, status=400)
