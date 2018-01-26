using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace TestAngularJS.Tedu_session14
{
    /// <summary>
    /// Summary description for EmployeeService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class EmployeeService : System.Web.Services.WebService
    {

        [WebMethod]
        public void getAll()
        {
            Model1 db = new Model1();
            var listEmp = db.Employees.ToList();
            JavaScriptSerializer jsSerializer = new JavaScriptSerializer();
            Context.Response.Write(jsSerializer.Serialize(listEmp));
        }
    }
}
