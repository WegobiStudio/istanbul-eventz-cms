FROM mcr.microsoft.com/dotnet/aspnet:latest AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:latest AS build
WORKDIR /src
COPY ["istanbul-eventz-cms.csproj", "./"]
RUN dotnet restore "istanbul-eventz-cms.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "istanbul-eventz-cms.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "istanbul-eventz-cms.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "istanbul-eventz-cms.dll"]
