using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BACKEND.Models
{
    public class Tarjeta
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "varchar(100)")]
        public string Titular { get; set; }
        [Required]
        [Column(TypeName="varchar(16)")]
        public string Numero { get; set; }

        [Required]
        [Column(TypeName = "varchar(5)")]
        public string FechaExpiracion { get; set; }

        [Required]
        [Column(TypeName = "varchar(3)")]
        public string Cvv { get; set; }
    }
}
