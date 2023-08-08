from django.urls import path

from .views import (
    api_list_appointments,
    api_list_technicians,
    api_show_appointment,
    api_delete_technician,
    api_finish_appointment,
    api_cancel_appointment,
)

urlpatterns = [
    path("appointments/", api_list_appointments, name="list_appointment"),
    path("technicians/", api_list_technicians, name="list_technicians"),
    path(
        "appointments/<int:id>",
        api_show_appointment,
        name="delete_appointment",
    ),
    path(
        "technicians/<int:id>",
        api_delete_technician,
        name="delete_technician"
    ),
    path(
        "appointments/<int:id>/finish",
        api_finish_appointment,
        name="finish_appointment"
    ),
    path(
        "appointments/<int:id>/cancel",
        api_cancel_appointment,
        name="cancel_appointment"
    ),

]
