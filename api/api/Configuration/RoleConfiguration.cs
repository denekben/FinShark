using api.Constants;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace api.Configuration
{
    public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole>
    {
        public void Configure(EntityTypeBuilder<IdentityRole> modelBuilder)
        {
            List<IdentityRole> roles = new List<IdentityRole> {
                new IdentityRole {
                    Name = UserRole.Admin,
                    NormalizedName = UserRole.Admin.ToUpper()
                },
                new IdentityRole {
                    Name = UserRole.User,
                    NormalizedName = UserRole.User.ToUpper()
                }
            };
            modelBuilder.HasData(roles);
        }
    }
}
