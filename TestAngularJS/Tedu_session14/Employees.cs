namespace TestAngularJS.Tedu_session14
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Employees
    {
        [StringLength(10)]
        public string Id { get; set; }

        [StringLength(50)]
        public string name { get; set; }

        [Column(TypeName = "date")]
        public DateTime? birthday { get; set; }

        public int? salary { get; set; }

        [StringLength(10)]
        public string gender { get; set; }
    }
}
