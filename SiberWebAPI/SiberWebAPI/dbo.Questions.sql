CREATE TABLE [dbo].[Questions] (
    [Id]            INT            IDENTITY (1, 1) NOT NULL,
    [Question]      NVARCHAR (500) NULL,
    [Option1]       NVARCHAR (250) NULL,
    [Option2]       NVARCHAR (250) NULL,
    [Option3]       NVARCHAR (250) NULL,
    [Option4]       NVARCHAR (250) NULL,
    [CorrectOption] NVARCHAR (250) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

