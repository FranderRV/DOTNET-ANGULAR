using BACKEND.Models;
using Microsoft.EntityFrameworkCore;

namespace BACKEND
{
    public class TarjetaContext:DbContext
    {
        public TarjetaContext(DbContextOptions<TarjetaContext> options):base(options)
        {

        }
        public DbSet<Tarjeta> Tarjeta{ get; set; }
    }
}
