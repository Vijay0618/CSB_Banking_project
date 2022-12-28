#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Login_Register_Page/Login_Register_Page.csproj", "Login_Register_Page/"]
RUN dotnet restore "Login_Register_Page/Login_Register_Page.csproj"
COPY . .
WORKDIR "/src/Login_Register_Page"
RUN dotnet build "Login_Register_Page.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Login_Register_Page.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Login_Register_Page.dll"]