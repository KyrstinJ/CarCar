from .models import Salesperson, Customer, AutomobileVO, Sale
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import (
    SalespeopleListEncoder,
    SalespeopleDetailEncoder,
    CustomerListEncoder,
    CustomerDetailEncoder,
    SaleListEncoder,
    SaleDetailEncoder,
)


@require_http_methods(["GET", "POST"])
def list_salespeople(request):
    if request.method == "GET":
        try:
            salespeople = Salesperson.objects.all()
            return JsonResponse(
                {"salespeople": salespeople}, encoder=SalespeopleListEncoder
            )
        except Salesperson.DoesNotExist:
            return JsonResponse({"message": "Salesperson does not exist"}, status=400)
    else:
        content = json.loads(request.body)
        try:
            salespeople = Salesperson.objects.create(**content)
            return JsonResponse(
                salespeople,
                encoder=SalespeopleDetailEncoder,
                safe=False,
            )
        except:
            return JsonResponse({"message": "Invalid request"}, status=400)


@require_http_methods(["DELETE"])
def delete_salespeople(request, id):
    try:
        salesperson = Salesperson.objects.get(id=id)
    except Salesperson.DoesNotExist:
        return JsonResponse(
            {"message": "Salesperson does not exist"}, status=404, safe=False
        )
    salesperson.delete()
    return JsonResponse({"message": "deleted successfully"}, safe=False)


@require_http_methods(["GET", "POST"])
def list_customer(request):
    if request.method == "GET":
        try:
            customer = Customer.objects.all()
            return JsonResponse(
                {"customers": customer},
                encoder=CustomerListEncoder,
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Customer does not exist"}, status=400)
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def delete_customer(request, id):
    try:
        customer = Customer.objects.get(id=id)
    except Customer.DoesNotExist:
        return JsonResponse(
            {"message": "Customer does not exist"}, status=404, safe=False
        )
    customer.delete()
    return JsonResponse({"message": "Delete successfully"}, safe=False)


@require_http_methods(["GET", "POST"])
def list_sales(request, automobile_vo_id=None):
    if request.method == "GET":
        if automobile_vo_id is not None:
            sales = Sale.objects.filter(automobile=automobile_vo_id)
        else:
            sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            automobile_vin = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=automobile_vin)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile VIN"},
                status=400,
            )
        try:
            salesperson = Salesperson.objects.get(id=content["salesperson"])
            content["salesperson"] = salesperson
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid salesperson id"},
                status=400,
            )
        try:
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Invalid customer id"}, status=400)
        sales = Sale.objects.create(**content)
        return JsonResponse(sales, encoder=SaleDetailEncoder, safe=False)


@require_http_methods(["DELETE"])
def delete_sale(request, id):
    try:
        sale = Sale.objects.get(id=id)
    except Sale.DoesNotExist:
        return JsonResponse({"message": "Sale not found"}, status=400, safe=False)
    sale.delete()
    return JsonResponse({"message": "deleted successfully"}, safe=False)
