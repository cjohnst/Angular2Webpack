
Imports System.IO
Imports System.Web
Imports System.Web.Caching
Imports System.Web.Hosting

Namespace Angular2VS2015.Web.Extensions
    Public NotInheritable Class StaticFile
        Private Sub New()
        End Sub
        Public Shared Function Version(rootRelativePath As String) As String
            If HttpRuntime.Cache(rootRelativePath) Is Nothing Then
                Dim absolutePath = HostingEnvironment.MapPath(rootRelativePath)
                Dim lastChangedDateTime = File.GetLastWriteTime(absolutePath)

                If rootRelativePath.StartsWith("~") Then
                    rootRelativePath = rootRelativePath.Substring(1)
                End If

                Dim versionedUrl = (rootRelativePath & "?v=" & lastChangedDateTime.Ticks.ToString())

                HttpRuntime.Cache.Insert(rootRelativePath, versionedUrl, New CacheDependency(absolutePath))
            End If

            Return TryCast(HttpRuntime.Cache(rootRelativePath), String)
        End Function
    End Class
End Namespace

