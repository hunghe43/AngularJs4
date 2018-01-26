namespace TestAngularJS.Tedu_session14
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=Model1")
        {
        }

        public virtual DbSet<Employees> Employees { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employees>()
                .Property(e => e.Id)
                .IsFixedLength();

            modelBuilder.Entity<Employees>()
                .Property(e => e.gender)
                .IsFixedLength();
        }
    }
}
