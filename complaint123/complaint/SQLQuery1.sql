CREATE TABLE [dbo].[ComplaintTable] (
    [userId]               INT            NULL,
    [Name]                 NVARCHAR (MAX) NULL,
    [Phone]                NVARCHAR (MAX) NULL,
    [Email]                NVARCHAR (MAX) NULL,
    [TypeOfComplaint]      NVARCHAR (MAX) NULL,
    [IPaddress]            NVARCHAR (MAX) NULL,
    [State]                NVARCHAR (MAX) NULL,
    [City]                 NVARCHAR (MAX) NULL,
    [Branch]               NVARCHAR (MAX) NULL,
    [ComplaintDescription] NVARCHAR (MAX) NULL,
    [AccountNumber]        NVARCHAR (MAX) NULL,
    [Status]               NVARCHAR (MAX) NULL,
    [Reply]                NVARCHAR (MAX) NULL,
    [datetime]             DATETIME       NULL
);