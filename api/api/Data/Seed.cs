using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class Seed
    {
        public static void SeedData(IApplicationBuilder applicationBuilder)
        {
            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var _context = serviceScope.ServiceProvider.GetService<AppDbContext>();

                _context.Database.EnsureCreated();

                //if (!_context.Comments.Any())
                //{
                //    var comments = new List<Comment>()
                //    {
                //        new Comment() {
                //            Title = "Comment1",
                //            Content = "Content1",
                //            StockId = 1
                //        },
                //        new Comment() {
                //            Title = "Comment2",
                //            Content = "Content2",
                //            StockId = 1
                //        },
                //        new Comment() {
                //            Title = "Comment3",
                //            Content = "Content3",
                //            StockId = 1
                //        },
                //    };
                //    _context.Comments.AddRange(comments);
                //    _context.SaveChanges();
                //}

                if (!_context.Stocks.Any())
                {
                    var stocks = new List<Stock>()
                    {
                        new Stock()
                        {
                            Symbol="TSLA",
                            CompanyName="Tesla",
                            Purchase=100.00M,
                            LastDiv=2.00M,
                            Industry="Automotive",
                            MarketCap=1234567,
                        },
                        new Stock()
                        {
                            Symbol="AAPL",
                            CompanyName="Apple",
                            Purchase=100.00M,
                            LastDiv=2.00M,
                            Industry="Technology",
                            MarketCap=1234567,
                        },
                        new Stock()
                        {
                            Symbol="MSFT",
                            CompanyName="Microsoft",
                            Purchase=100.00M,
                            LastDiv=2.00M,
                            Industry="Technology",
                            MarketCap=1234567,
                        },
                    };
                    _context.Stocks.AddRange(stocks);
                    _context.SaveChanges();
                }
            }
        }
    }
}
