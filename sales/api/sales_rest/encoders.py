from .models import Salesperson, Customer, AutomobileVO, Sale
from common.json import ModelEncoder


class SalespeopleListEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name", "last_name", "employee_id", "id"]


class SalespeopleDetailEncoder(ModelEncoder):
    model = Salesperson
    properties = ["first_name", "last_name", "employee_id"]


class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["first_name", "last_name", "address", "phone_number", "id"]


class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
    ]


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold"]


class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = ["price", "salesperson", "customer", "id"]

    encoders = {
        "salesperson": SalespeopleDetailEncoder(),
        "customer": CustomerDetailEncoder(),
    }

    def get_extra_data(self, o):
        return {"automobile": o.automobile.vin}


class SaleDetailEncoder(ModelEncoder):
    model = Sale
    properties = ["price", "salesperson", "customer", "automobile"]

    encoders = {
        "salesperson": SalespeopleDetailEncoder(),
        "customer": CustomerDetailEncoder(),
        "automobile": AutomobileVOEncoder(),
    }
