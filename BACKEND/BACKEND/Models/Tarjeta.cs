using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BACKEND.Models
{
    public class Tarjeta
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName="varchar(16)")]
        public int Numero { get; set; }

        [Required]
        [Column(TypeName = "varchar(5)")]
        public int FechaExpiracion{ get; set; }

        [Required]
        [Column(TypeName = "varchar(3)")]
        public int Cvv { get; set; }
    }
}
