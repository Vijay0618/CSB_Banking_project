using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using System.Xml.Linq;

namespace complaint.Models
{
    public class ComplaintService : Complaint, IComplaint
    {

        public List<Complaint> getall()
        {
            SqlDataReader dr = null;
            SqlConnection myConnection = new SqlConnection();
            myConnection.ConnectionString = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=Complaint_Main;Integrated Security=True";


            SqlCommand sqlCmd = new SqlCommand();
            sqlCmd.CommandType = CommandType.Text;
            sqlCmd.CommandText = "Select * from ComplaintTable";
            sqlCmd.Connection = myConnection;
            myConnection.Open();
            Complaint bk = null;
            List<Complaint> prod = new List<Complaint>();
            dr = sqlCmd.ExecuteReader();
            while (dr.Read())
            {
                bk = new Complaint();
                bk.userId = Convert.ToInt32(dr.GetValue(0));
                bk.Name = dr.GetValue(1).ToString();
                bk.Phone = dr.GetValue(2).ToString();
                bk.Email = dr.GetValue(3).ToString();
                bk.TypeOfComplaint = dr.GetValue(4).ToString();
                bk.IPaddress = dr.GetValue(5).ToString();
                bk.State = dr.GetValue(6).ToString();
                bk.City = dr.GetValue(7).ToString();
                bk.Branch = dr.GetValue(8).ToString();
                bk.ComplaintDescription = dr.GetValue(9).ToString();
                bk.AccountNumber = dr.GetValue(10).ToString();
                bk.Status = dr.GetValue(11).ToString();
                bk.Reply = dr.GetValue(12).ToString();
             bk.datetime = Convert.ToDateTime(dr.GetValue(13));

                prod.Add(bk);

            }
            dr.Close();
            myConnection.Close();
            return prod;
        }



        public void Insert([FromBody] Complaint bk)
        {

            SqlConnection myConnection = new SqlConnection();

            myConnection.ConnectionString = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=Complaint_Main;Integrated Security=True";


            ////SqlCommand sqlCmd = new SqlCommand("INSERT INTO tblEmployee (EmployeeId,Name,ManagerId) Values (@EmployeeId,@Name,@ManagerId)", myConnection);  
            SqlCommand sqlCmd = new SqlCommand();
            sqlCmd.CommandType = CommandType.Text;
            sqlCmd.CommandText = "INSERT INTO ComplaintTable(userId,Name,Phone,Email,TypeOfComplaint,IPaddress,State,City,Branch,ComplaintDescription,AccountNumber,Status,Reply,datetime) Values (@userId,@Name,@Phone,@Email,@TypeOfComplaint,@IPaddress,@State,@City,@Branch,@ComplaintDescription,@AccountNumber,@Status,@Reply,@datetime)";
            sqlCmd.Connection = myConnection;
            sqlCmd.Parameters.AddWithValue("@userId", bk.userId);
            sqlCmd.Parameters.AddWithValue("@Name", bk.Name);
            sqlCmd.Parameters.AddWithValue("@Phone", bk.Phone);
            sqlCmd.Parameters.AddWithValue("@Email", bk.Email);

            sqlCmd.Parameters.AddWithValue("@TypeOfComplaint", bk.TypeOfComplaint);
            sqlCmd.Parameters.AddWithValue("@IPaddress", bk.IPaddress);
            sqlCmd.Parameters.AddWithValue("@State", bk.State);
            sqlCmd.Parameters.AddWithValue("@City", bk.City);
            sqlCmd.Parameters.AddWithValue("@Branch", bk.Branch);

            sqlCmd.Parameters.AddWithValue("@ComplaintDescription", bk.ComplaintDescription);
            sqlCmd.Parameters.AddWithValue("@AccountNumber", bk.AccountNumber);
            sqlCmd.Parameters.AddWithValue("@Status", bk.Status);
            sqlCmd.Parameters.AddWithValue("@Reply", bk.Reply);
            sqlCmd.Parameters.AddWithValue("@datetime", bk.datetime);


            myConnection.Open();
            var val = sqlCmd.ExecuteNonQuery();
            myConnection.Close();



        }

        public List<Complaint> Selectname(string name)
        {
            SqlDataReader dr = null;
            SqlConnection myConnection = new SqlConnection();
            myConnection.ConnectionString = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=Complaint_Main;Integrated Security=True";

            SqlCommand sqlCmd = new SqlCommand();
            sqlCmd.CommandType = CommandType.Text;
            sqlCmd.CommandText = "Select * from ComplaintTable where Name='" + name + "'";
            sqlCmd.Connection = myConnection;
            myConnection.Open();
            dr = sqlCmd.ExecuteReader();
            Complaint bk = null;
            List<Complaint> prod = new List<Complaint>();
            while (dr.Read())
            {
                bk = new Complaint();
                bk.userId = Convert.ToInt32(dr.GetValue(0));
                bk.Name = dr.GetValue(1).ToString();
                bk.Phone = dr.GetValue(2).ToString();
                bk.Email = dr.GetValue(3).ToString();
                bk.TypeOfComplaint = dr.GetValue(4).ToString();
                bk.IPaddress = dr.GetValue(5).ToString();
                bk.State = dr.GetValue(6).ToString();
                bk.City = dr.GetValue(7).ToString();
                bk.Branch = dr.GetValue(8).ToString();
                bk.ComplaintDescription = dr.GetValue(9).ToString();
                bk.AccountNumber = dr.GetValue(10).ToString();
                bk.Status = dr.GetValue(11).ToString();
                bk.Reply = dr.GetValue(12).ToString();
                bk.datetime = Convert.ToDateTime(dr.GetValue(13));

                prod.Add(bk);

            }

            return prod;
            myConnection.Close();
        }


        public List<Complaint> Selectdept(string dept)
        {
            SqlDataReader dr = null;
            SqlConnection myConnection = new SqlConnection();
            myConnection.ConnectionString = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=Complaint_Main;Integrated Security=True";

            SqlCommand sqlCmd = new SqlCommand();
            sqlCmd.CommandType = CommandType.Text;
            sqlCmd.CommandText = "Select * from ComplaintTable where TypeOfComplaint='" + dept + "'";
            sqlCmd.Connection = myConnection;
            myConnection.Open();
            dr = sqlCmd.ExecuteReader();
            Complaint bk = null;
            List<Complaint> prod = new List<Complaint>();
            while (dr.Read())
            {
                bk = new Complaint();
                bk.userId = Convert.ToInt32(dr.GetValue(0));
                bk.Name = dr.GetValue(1).ToString();
                bk.Phone = dr.GetValue(2).ToString();
                bk.Email = dr.GetValue(3).ToString();
                bk.TypeOfComplaint = dr.GetValue(4).ToString();
                bk.IPaddress = dr.GetValue(5).ToString();
                bk.State = dr.GetValue(6).ToString();
                bk.City = dr.GetValue(7).ToString();
                bk.Branch = dr.GetValue(8).ToString();
                bk.ComplaintDescription = dr.GetValue(9).ToString();
                bk.AccountNumber = dr.GetValue(10).ToString();
                bk.Status = dr.GetValue(11).ToString();
                bk.Reply = dr.GetValue(12).ToString();
                bk.datetime = Convert.ToDateTime(dr.GetValue(13));

                prod.Add(bk);

            }

            return prod;
            myConnection.Close();
        }


        public void Update(int id, [FromBody] Complaint bk)
        {
            SqlConnection myConnection = new SqlConnection();

            myConnection.ConnectionString = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=Complaint_Main;Integrated Security=True";


            ////SqlCommand sqlCmd = new SqlCommand("INSERT INTO tblEmployee (EmployeeId,Name,ManagerId) Values (@EmployeeId,@Name,@ManagerId)", myConnection);  
            SqlCommand sqlCmd = new SqlCommand();
            sqlCmd.CommandType = CommandType.Text;
            //sqlCmd.CommandText = "INSERT INTO ComplaintTable(userId,Name,Phone,Email,TypeOfComplaint,IPaddress,State,City,Branch,ComplaintDescription,AccountNumber,Status,Reply) Values (@userId,@Name,@Phone,@Email,@TypeOfComplaint,@IPaddress,@State,@City,@Branch,@ComplaintDescription,@AccountNumber,@Status,@Reply)";
            //            sqlCmd.CommandText = "UPDATE book SET bknm=:booknm,bkprice=:bookprice WHERE bkid=:bookid";

            sqlCmd.CommandText = "UPDATE ComplaintTable SET Status=@Status,Reply=@Reply where userId=@userId";
            sqlCmd.Connection = myConnection;
            sqlCmd.Parameters.AddWithValue("@userId", bk.userId);
            //sqlCmd.Parameters.AddWithValue("@Name", bk.Name);
            //sqlCmd.Parameters.AddWithValue("@Phone", bk.Phone);
            //sqlCmd.Parameters.AddWithValue("@Email", bk.Email);

            //sqlCmd.Parameters.AddWithValue("@TypeOfComplaint", bk.TypeOfComplaint);
            //sqlCmd.Parameters.AddWithValue("@IPaddress", bk.IPaddress);
            //sqlCmd.Parameters.AddWithValue("@State", bk.State);
            //sqlCmd.Parameters.AddWithValue("@City", bk.City);
            //sqlCmd.Parameters.AddWithValue("@Branch", bk.Branch);

            //sqlCmd.Parameters.AddWithValue("@ComplaintDescription", bk.ComplaintDescription);
            //sqlCmd.Parameters.AddWithValue("@AccountNumber", bk.AccountNumber);
            sqlCmd.Parameters.AddWithValue("@Status", bk.Status);
            sqlCmd.Parameters.AddWithValue("@Reply", bk.Reply);


            myConnection.Open();
            var val = sqlCmd.ExecuteNonQuery();
            myConnection.Close();


        }
        public void delete(int id)
        {
            SqlConnection myConnection = new SqlConnection();
            myConnection.ConnectionString = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=Complaint_Main;Integrated Security=True";

            SqlCommand sqlCmd = new SqlCommand();
            sqlCmd.CommandType = CommandType.Text;
            sqlCmd.CommandText = "delete from ComplaintTable where userId=" + id + "";
            sqlCmd.Connection = myConnection;
            myConnection.Open();
            var val = sqlCmd.ExecuteNonQuery();
            myConnection.Close();
        }
    }
}

    



