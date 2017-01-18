Imports System.Net
Imports System.Web.Http


<RoutePrefix("api/customer")>
Public Class TestAPIController
    Inherits ApiController


    <Route("list")>
    <HttpGet>
    Public Function Read() As List(Of Customer)
        Dim customers As New List(Of Customer)

        For i = 1 To 10
            customers.Add(New Customer With {
                          .Id = i,
                          .FirstName = "John",
                          .LastName = i & " Doe"
                          })
        Next

        'Threading.Thread.Sleep(3000)


        Return customers
    End Function

    <Route("detail/{id}")>
    <HttpGet>
    Public Function Detail(ByVal id As Integer) As Customer
        Dim customer As New Customer

        customer.Id = id
        customer.FirstName = "test"
        customer.LastName = "xxxxxx"


        Return customer
    End Function



    Public Class Customer
        Public Id As Integer
        Public FirstName As String
        Public LastName As String
    End Class




End Class
