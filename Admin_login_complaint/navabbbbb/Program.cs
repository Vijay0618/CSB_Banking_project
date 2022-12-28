using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using navabbbbb.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<navabbbbbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("navabbbbbContext") ?? throw new InvalidOperationException("Connection string 'navabbbbbContext' not found.")));
builder.Services.AddCors(options =>
{
    options.AddPolicy("MycorsPolicy", builder => builder
    .WithOrigins("http://localhost:3000", "http://localhost:3001")
    .AllowAnyMethod()
    .AllowCredentials()
    .WithHeaders("Accept", "Content-Type", "Origin", "X-My-Header"));
});
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors("MycorsPolicy");

app.MapControllers();

app.Run();
