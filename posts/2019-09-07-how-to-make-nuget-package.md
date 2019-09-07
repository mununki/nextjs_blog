---
title: How to make a NuGet package for class library
createdAt: 2019-09-07
filename: 2019-09-07-how-to-make-nuget-package
category: ["backend", "dotnetcore", ".net", "core"]
tag: ["microsoft", "dotnetcore"]
thumb: 2019-09-07_thumb.jpg
slug: Make a NuGet package with dotnet CLI
---

# How to make a NuGet package for class library

by moondaddi on 07 Sep 2019

---

## NuGet

https://www.nuget.org/packages/PasswordHasher.SHA256.ASP.NET.CORE.Identity/

## Purpose

This is to show how to pack the external class library into NuGet package and publish it on NuGet.org.

## Background

My team decided to build a new indentity api for auth and control roles of each client apis. We chose the `IdentityServer4` on ASP.NET Core. But we had to migrate all users information including password which is stored in DB. `IdentityServer4` has a default password hasher `PBKDF2`. Hence, we decided to override this password hasher with custom hasher which is `SHA256` and `BASE64` encoding. We built the custom password hasher as the external class library and published it to NuGet for later use and maintanence.

## Requirements

- macOS
- dotnet CLI

## Steps

1. Install the dotnet CLI

https://dotnet.microsoft.com/download

2. Create the class library

```shell
example$ dotnet new classlib -n SHA256.Password.Hasher
```
> This makes a directory `SHA256.Password.Hasher` and create a template for class library

3. Build the class library

```csharp
using System;

namespace SHA256.Password.Hasher
{
    public class CustomPasswordHasher
    {
        // ...
    }
}
```
> Rename the class or file (default filename : Class1.cs)

4. Add the new class library into `.sln` file

```shell
example$ dotnet new sln
```
> Generate the `.sln` file if not exists

```shell
example$ dotnet sln add SHA256.Password.Hasher/SHA256.Password.Hasher.csproj
```

> Add the `SHA256.Password.Hasher` into `.sln`

5. Add the reference into the main cs project to use the class library

```shell
example/IdentityServer4$ dotnet add reference ../SHA256.Password.Hasher/SHA256.Password.Hasher.csproj

example/IdentityServer4$ dotnet restore
```

6. Build the class library

```shell
example/SHA256.Password.Hasher$ dotnet build
```

7. Set the properties for NuGet package information

```csharp
# SHA256.Password.Hasher.csproj
 
<Project Sdk="Microsoft.NET.Sdk">
 
  <PropertyGroup>
    <TargetFramework>netcoreapp2.2</TargetFramework>
    <PackageId>PasswordHasher.SHA256.ASP.NET.CORE.Identity</PackageId>
    <Version>1.0.1</Version>
    <Authors>moondaddi</Authors>
    <RepositoryUrl>https://github.com/mattdamon108/PasswordHasher.SHA256.ASP.NET.CORE.Identity.git</RepositoryUrl>
  </PropertyGroup>
 
  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.Identity" Version="2.2.0" />
    <PackageReference Include="Microsoft.AspNetCore.Identity.EntityFrameworkCore" Version="2.2.0" />
  </ItemGroup>
 
</Project>
```

8. Pack the class library to .nupkg file

```shell
example/SHA256.Password.Hasher$ dotnet pack
```
> This generate a `.nupkg` file

9. Create NuGet.org account and upload the `.nupkg` file

10. References

- https://docs.microsoft.com/ko-kr/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli
- https://docs.microsoft.com/ko-kr/nuget/create-packages/creating-a-package-dotnet-cli
- https://docs.microsoft.com/ko-kr/nuget/nuget-org/publish-a-package
- Using Visual Studio to make a package
  - https://www.devtrends.co.uk/blog/creating-your-first-shared-library-in-.net-core
- https://docs.microsoft.com/ko-kr/dotnet/core/tools/csproj